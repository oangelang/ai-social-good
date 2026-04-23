export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      challenges: {
        Row: {
          id: string
          name: string
          description: string
          emoji: string
          sdg_mapping: string | null
          color_class: string
          sort_order: number
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['challenges']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['challenges']['Insert']>
      }
      seeded_problems: {
        Row: {
          id: string
          title: string
          description: string
          source_url: string | null
          location: string | null
          challenge_id: string
          is_featured: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['seeded_problems']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['seeded_problems']['Insert']>
      }
      seeded_ideas: {
        Row: {
          id: string
          title: string
          description: string
          approach_tags: string[]
          challenge_id: string
          problem_id: string
          is_featured: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['seeded_ideas']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['seeded_ideas']['Insert']>
      }
      cached_ideas: {
        Row: {
          id: string
          title: string
          description: string
          approach_tags: string[]
          challenge_id: string
          problem_id: string
          generated_at: string
        }
        Insert: {
          title: string
          description: string
          approach_tags?: string[]
          challenge_id: string
          problem_id: string
          generated_at?: string
        }
        Update: {
          title?: string
          description?: string
          approach_tags?: string[]
        }
      }
      existing_products: {
        Row: {
          id: string
          name: string
          url: string | null
          description: string
          similarity_score: number | null
          idea_id: string | null
          cached_idea_id: string | null
        }
        Insert: Omit<Database['public']['Tables']['existing_products']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['existing_products']['Insert']>
      }
    }
  }
}

export type Challenge = Database['public']['Tables']['challenges']['Row']
export type SeededProblem = Database['public']['Tables']['seeded_problems']['Row']
export type SeededIdea = Database['public']['Tables']['seeded_ideas']['Row']
export type CachedIdea = Database['public']['Tables']['cached_ideas']['Row']
