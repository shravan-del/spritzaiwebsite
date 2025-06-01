'use client'

interface FetchAgentResponse {
  answer: string
  error?: string
}

export async function fetchAcademicAnswer(question: string): Promise<FetchAgentResponse> {
  try {
    const response = await fetch('http://localhost:8000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { answer: data.answer }
  } catch (error) {
    console.error('Error fetching from agent:', error)
    return {
      answer: 'Sorry, I encountered an error. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
} 