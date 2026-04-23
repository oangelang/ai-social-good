import { anthropic, MODEL, getTextContent, extractJSON } from '@/lib/anthropic'
import { STATIC_PROBLEMS } from '@/lib/static-data'

export const maxDuration = 60

const SYSTEM = `You are a global development researcher with deep expertise in social challenges. \
Use web search to find specific, current real-world problems in the given challenge domain. \
Prioritize sources from 2024–2026. Focus on problems that are underserved by existing technology \
and solvable by a small development team. \
Respond with ONLY a valid JSON object — no markdown fences, no explanation, no preamble.`

interface DiscoveredProblem {
  title: string
  description: string
  location: string
  source_url: string
}

export async function POST(request: Request) {
  const { challengeId, challengeName, challengeDescription } = await request.json()

  // 1. Try Supabase seeded problems
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url'
  ) {
    try {
      const { supabase } = await import('@/lib/supabase')
      const { data: seeded } = await supabase
        .from('seeded_problems')
        .select('*')
        .eq('challenge_id', challengeId)
        .order('is_featured', { ascending: false })
        .limit(3)

      if (seeded && seeded.length > 0) {
        return Response.json({ problems: seeded, source: 'seeded' })
      }
    } catch {
      // Supabase unavailable
    }
  }

  // 2. Static hardcoded fallback — always works, no env vars needed
  const staticProblems = STATIC_PROBLEMS[challengeId]
  if (staticProblems?.length) {
    return Response.json({ problems: staticProblems, source: 'seeded' })
  }

  // 3. Claude API with web search
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: 'Failed to discover problems' }, { status: 500 })
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
      tools: [{ type: 'web_search_20260209', name: 'web_search' }],
      messages: [
        {
          role: 'user',
          content: `Find 3 specific, current real-world problems in the domain of "${challengeName}".

Context: ${challengeDescription}

Requirements for each problem:
- Must be documented in news or research from 2024–2026
- Must name a specific region, country, or community affected
- Must be currently underserved by technology solutions
- Must be concrete enough that a developer could build something to address it

Return ONLY this JSON structure:
{"problems":[{"title":"concise problem title","description":"2-3 sentence description of what's happening and why it matters","location":"specific place(s) affected","source_url":"direct URL to a real article or report"}]}`,
        },
      ],
    })

    const text = getTextContent(response)
    const data = extractJSON<{ problems: DiscoveredProblem[] }>(text)

    if (!Array.isArray(data.problems) || data.problems.length === 0) {
      throw new Error('Invalid problem structure returned')
    }

    return Response.json({ problems: data.problems, source: 'live' })
  } catch (err) {
    console.error('Problem discovery failed:', err)
    return Response.json({ error: 'Failed to discover problems' }, { status: 500 })
  }
}
