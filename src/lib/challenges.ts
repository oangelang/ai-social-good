import type { Challenge } from './database.types'

export const STATIC_CHALLENGES: Challenge[] = [
  {
    id: 'a1000000-0000-0000-0000-000000000001',
    name: 'Poverty',
    description: 'Over 700 million people live on less than $2.15 a day. Economic exclusion, lack of financial tools, and broken safety nets trap communities in cycles of deprivation.',
    emoji: '💸',
    sdg_mapping: 'SDG 1: No Poverty',
    color_class: 'challenge-poverty',
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: 'a1000000-0000-0000-0000-000000000002',
    name: 'Hunger',
    description: 'Nearly 800 million people go to bed hungry every night while a third of all food produced globally is lost or wasted. Supply chain failures and climate shocks are making it worse.',
    emoji: '🌾',
    sdg_mapping: 'SDG 2: Zero Hunger',
    color_class: 'challenge-hunger',
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: 'a1000000-0000-0000-0000-000000000003',
    name: 'Ocean & Climate',
    description: 'Oceans absorb 90% of excess heat and 30% of CO₂ emissions, yet face unprecedented acidification, plastic pollution, and warming that is collapsing marine ecosystems.',
    emoji: '🌊',
    sdg_mapping: 'SDG 13 & 14: Climate Action / Life Below Water',
    color_class: 'challenge-ocean',
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
  {
    id: 'a1000000-0000-0000-0000-000000000004',
    name: 'Health',
    description: 'Two billion people lack access to essential medicines. Preventable diseases kill millions annually, disproportionately in low-income countries with fragile health infrastructure.',
    emoji: '🩺',
    sdg_mapping: 'SDG 3: Good Health & Well-Being',
    color_class: 'challenge-health',
    sort_order: 4,
    created_at: new Date().toISOString(),
  },
]

export async function getChallenges(): Promise<Challenge[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key || url === 'your_supabase_project_url') {
    return STATIC_CHALLENGES
  }

  try {
    const { supabase } = await import('./supabase')
    const { data, error } = await supabase
      .from('challenges')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error || !data?.length) return STATIC_CHALLENGES
    return data
  } catch {
    return STATIC_CHALLENGES
  }
}
