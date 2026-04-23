import { anthropic, MODEL, getTextContent, extractJSON } from '@/lib/anthropic'

export const maxDuration = 60

const SYSTEM = `You are a social impact startup analyst with broad knowledge of existing products, apps, NGOs, and initiatives. \
Name real existing products with their actual URLs — draw on your training knowledge. \
Assign similarity scores honestly (0.0 = totally different, 1.0 = identical). \
Then explain how the described idea could carve out a unique position. \
Respond with ONLY a valid JSON object — no markdown fences, no explanation, no preamble.`

interface ExistingProduct {
  name: string
  url: string
  description: string
  similarity_score: number
}

export async function POST(request: Request) {
  const { ideaTitle, ideaDescription, challengeName } = await request.json()

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({
      products: [
        {
          name: 'Live validation unavailable',
          url: 'https://anthropic.com',
          description:
            'Web search validation requires an API key. Add ANTHROPIC_API_KEY to your environment to enable live competitive analysis.',
          similarity_score: 0,
        },
      ],
      differentiation:
        'Live validation is not configured in this deployment. When enabled, this feature searches the web for real existing products, NGOs, and initiatives similar to your idea — and explains how your approach differs.',
    })
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
          content: `Search for existing products or initiatives similar to this social impact idea:

Challenge area: ${challengeName}
Idea title: ${ideaTitle}
Idea description: ${ideaDescription}

Find 3 real existing products, apps, platforms, or NGO programs that address overlapping problems. \
Include their actual website URLs. Score similarity 0.0–1.0 honestly. \
Then write a clear differentiation paragraph explaining how this idea occupies a distinct position.

Return ONLY this JSON structure:
{"products":[{"name":"real product name","url":"https://actual-url.com","description":"what it does and who it serves","similarity_score":0.7}],"differentiation":"2–3 sentences on how this idea is positioned differently from the products above"}`,
        },
      ],
    })

    const text = getTextContent(response)
    const data = extractJSON<{ products: ExistingProduct[]; differentiation: string }>(text)

    if (!Array.isArray(data.products)) {
      throw new Error('Invalid validation structure returned')
    }

    return Response.json(data)
  } catch (err) {
    console.error('Validation failed:', err)
    return Response.json({ error: 'Failed to validate idea' }, { status: 500 })
  }
}
