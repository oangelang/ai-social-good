import { anthropic, MODEL, getTextContent, extractJSON } from '@/lib/anthropic'

export const maxDuration = 60

const SYSTEM = `You are a social impact product designer who specializes in "vibe coded" solutions — \
creative, buildable apps that a solo developer could prototype in a weekend or a month. \
Your ideas are specific, actionable, and grounded in realistic technology. \
Avoid generic suggestions. Think: what exact mechanism makes this work, who specifically uses it, \
and how does it reach people without smartphones or reliable internet? \
Respond with ONLY a valid JSON object — no markdown fences, no explanation, no preamble.`

interface GeneratedIdea {
  title: string
  description: string
  approach_tags: string[]
}

export async function POST(request: Request) {
  const { problemTitle, problemDescription, challengeName, challengeId, problemId } =
    await request.json()

  // Serve from stored data first to save API credits
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url'
  ) {
    try {
      const { supabase } = await import('@/lib/supabase')

      const { data: cached } = await supabase
        .from('cached_ideas')
        .select('*')
        .eq('problem_id', problemId)
        .limit(3)

      if (cached && cached.length >= 3) {
        return Response.json({ ideas: cached })
      }

      const { data: seeded } = await supabase
        .from('seeded_ideas')
        .select('*')
        .eq('problem_id', problemId)
        .limit(3)

      if (seeded && seeded.length >= 2) {
        return Response.json({ ideas: seeded })
      }
    } catch {
      // Supabase unavailable, fall through to API
    }
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: 'Failed to generate ideas' }, { status: 500 })
  }

  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 2000,
      system: [
        {
          type: 'text',
          text: SYSTEM,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages: [
        {
          role: 'user',
          content: `Generate 3 specific, buildable solution ideas for this real-world problem:

Challenge area: ${challengeName}
Problem: ${problemTitle}
Details: ${problemDescription}

Each idea must:
- Be buildable by a solo developer in 1–3 months
- State the exact mechanism (e.g., "SMS bot that...", "Android app that...", "WhatsApp chatbot that...")
- Reach the affected community directly
- Be more specific than generic app ideas

Return ONLY this JSON structure:
{"ideas":[{"title":"short specific title","description":"2–3 sentences explaining exactly how it works, who it helps, and the key mechanism","approach_tags":["technology1","technology2","use case"]}]}`,
        },
      ],
    })

    const text = getTextContent(response)
    const data = extractJSON<{ ideas: GeneratedIdea[] }>(text)

    if (!Array.isArray(data.ideas) || data.ideas.length === 0) {
      throw new Error('Invalid idea structure returned')
    }

    // Write to cached_ideas in Supabase (non-blocking — don't fail if this errors)
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url'
    ) {
      import('@/lib/supabase')
        .then(({ supabase }) => {
          const rows = data.ideas.map(idea => ({
            title: idea.title,
            description: idea.description,
            approach_tags: idea.approach_tags,
            challenge_id: challengeId,
            problem_id: problemId,
          }))
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          supabase.from('cached_ideas').insert(rows as any).then(() => {})
        })
        .catch(() => {})
    }

    return Response.json({ ideas: data.ideas })
  } catch (err) {
    console.error('Idea generation failed:', err)
    return Response.json({ error: 'Failed to generate ideas' }, { status: 500 })
  }
}
