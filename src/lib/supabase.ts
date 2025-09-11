import { createClient } from '@supabase/supabase-js'

// For demo purposes, these would normally be environment variables
// In a real hackathon, you'd set these up with your Supabase project
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database schemas for Health360°
export interface Patient {
  id: string
  name: string
  phone: string
  email?: string
  created_at: string
}

export interface Appointment {
  id: string
  patient_id: string
  department: string
  appointment_date: string
  appointment_time: string
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high'
  estimated_wait: number
  symptoms?: string
  created_at: string
}

export interface SymptomAnalysis {
  id: string
  patient_id: string
  symptoms: string
  analysis_result: {
    condition: string
    priority: 'low' | 'medium' | 'high'
    confidence: number
    department: string
    wait_time: string
  }
  created_at: string
}

export interface MedicalReport {
  id: string
  patient_id: string
  original_report_url: string
  simplified_explanation: string
  language: string
  created_at: string
}

// Sample database functions (would be implemented with real Supabase)
export const appointmentService = {
  async createAppointment(appointment: Omit<Appointment, 'id' | 'created_at'>) {
    // In real implementation:
    // const { data, error } = await supabase
    //   .from('appointments')
    //   .insert([appointment])
    
    // For demo, return mock data
    return {
      data: {
        ...appointment,
        id: 'APT' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        created_at: new Date().toISOString()
      },
      error: null
    }
  },

  async getAppointments(patientId: string) {
    // Mock data for demo
    return {
      data: [],
      error: null
    }
  }
}

export const symptomService = {
  async analyzeSymptoms(symptoms: string, patientId: string) {
    // In real implementation, this would call an AI service
    const mockAnalysis = {
      condition: symptoms.toLowerCase().includes('fever') ? 'Possible Viral Infection' : 'General Consultation',
      priority: symptoms.toLowerCase().includes('chest pain') ? 'high' : 'medium',
      confidence: Math.floor(Math.random() * 20) + 80,
      department: 'General Medicine',
      wait_time: '15-20 minutes'
    }

    return {
      data: {
        id: 'SYM' + Math.random().toString(36).substr(2, 9),
        patient_id: patientId,
        symptoms,
        analysis_result: mockAnalysis,
        created_at: new Date().toISOString()
      },
      error: null
    }
  }
}