export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      agents: {
        Row: {
          id: string
          name: string
          type: string
          description: string
          system_prompt: string
          model: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          description: string
          system_prompt: string
          model: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          description?: string
          system_prompt?: string
          model?: string
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          content: string
          role: string
          agent_id: string
          user_id: string
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          content: string
          role: string
          agent_id: string
          user_id: string
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          content?: string
          role?: string
          agent_id?: string
          user_id?: string
          metadata?: Json | null
          created_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          settings: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          settings: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          settings?: Json
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 