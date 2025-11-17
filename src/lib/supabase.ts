import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lbndwnujwezqtzqfgjir.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibmR3bnVqd2V6cXR6cWZnamlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyOTcxNzQsImV4cCI6MjA3ODg3MzE3NH0.6q30x-8DtFjNto5Tl5Ss7n5wHnQ02zkTvwFBvlA9q5w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface UserProgress {
  id?: string
  user_id?: string
  current_step: number
  total_score: number
  character_data: any
  progress_data: any
  last_accessed?: string
  created_at?: string
  updated_at?: string
}

export interface LeadData {
  id?: string
  user_id?: string
  email?: string
  name?: string
  phone?: string
  age?: number
  smoking_years?: number
  cigarettes_per_day?: number
  motivation_level?: number
  goals?: string[]
  lead_source?: string
  conversion_step?: number
  total_score?: number
  completed_challenges?: string[]
  created_at?: string
  updated_at?: string
}

export interface ChallengeCompletion {
  id?: string
  user_id?: string
  challenge_step: number
  challenge_type: string
  score: number
  completion_time?: number
  performance_data?: any
  completed_at?: string
}

export class UserTrackingService {
  static async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }

  static async getOrCreateUserProgress(userId?: string): Promise<UserProgress | null> {
    if (!userId) {
      // For anonymous users, return default progress from localStorage
      const savedProgress = localStorage.getItem('funnel_progress')
      if (savedProgress) {
        return JSON.parse(savedProgress)
      }
      return {
        current_step: 1,
        total_score: 0,
        character_data: {},
        progress_data: {}
      }
    }

    const { data, error } = await supabase
      .from('app_da8d152dfb_user_progress')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error && error.code === 'PGRST116') {
      // No progress found, create new
      const newProgress: UserProgress = {
        user_id: userId,
        current_step: 1,
        total_score: 0,
        character_data: {},
        progress_data: {}
      }

      const { data: created, error: createError } = await supabase
        .from('app_da8d152dfb_user_progress')
        .insert(newProgress)
        .select()
        .single()

      if (createError) {
        console.error('Error creating user progress:', createError)
        return null
      }

      return created
    }

    if (error) {
      console.error('Error fetching user progress:', error)
      return null
    }

    return data
  }

  static async updateUserProgress(userId: string, progress: Partial<UserProgress>) {
    const { error } = await supabase
      .from('app_da8d152dfb_user_progress')
      .update({
        ...progress,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)

    if (error) {
      console.error('Error updating user progress:', error)
      return false
    }

    return true
  }

  static async saveLeadData(leadData: LeadData) {
    const { data, error } = await supabase
      .from('app_da8d152dfb_leads')
      .insert({
        ...leadData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Error saving lead data:', error)
      return null
    }

    return data
  }

  static async updateLeadData(leadId: string, updates: Partial<LeadData>) {
    const { error } = await supabase
      .from('app_da8d152dfb_leads')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', leadId)

    if (error) {
      console.error('Error updating lead data:', error)
      return false
    }

    return true
  }

  static async saveChallengeCompletion(completion: ChallengeCompletion) {
    const { data, error } = await supabase
      .from('app_da8d152dfb_challenge_completions')
      .insert({
        ...completion,
        completed_at: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Error saving challenge completion:', error)
      return null
    }

    return data
  }

  static async getUserChallengeCompletions(userId: string) {
    const { data, error } = await supabase
      .from('app_da8d152dfb_challenge_completions')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false })

    if (error) {
      console.error('Error fetching challenge completions:', error)
      return []
    }

    return data || []
  }

  static saveProgressLocally(progress: UserProgress) {
    localStorage.setItem('funnel_progress', JSON.stringify(progress))
  }

  static getLocalProgress(): UserProgress | null {
    const saved = localStorage.getItem('funnel_progress')
    return saved ? JSON.parse(saved) : null
  }

  static clearLocalProgress() {
    localStorage.removeItem('funnel_progress')
  }
}