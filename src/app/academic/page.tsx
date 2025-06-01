'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AcademicAI() {
  const [query, setQuery] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Welcome! I\'m your Academic AI Assistant. I can help you with course planning, prerequisites, study guidance, and academic recommendations. What would you like to explore today?',
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: query,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setQuery('')
    setIsLoading(true)

    try {
      // Replace with your actual Academic AI URL
      const res = await fetch('https://your-academic-ai-url.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      const data = await res.json()
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response || 'I apologize, but I couldn\'t process your request at the moment. Please try again.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, there was an error connecting to the AI service. Please try again later.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const exampleQueries = [
    'What courses should I take as a first year CS student?',
    'Tell me about CS1114 prerequisites',
    'What\'s the difference between CS2114 and CS2124?',
    'How should I prepare for advanced algorithms?',
    'What electives would you recommend for AI specialization?',
    'Can you create a 4-year plan for Computer Science?'
  ]

  const quickActions = [
    { icon: '📅', title: 'Create Study Plan', query: 'Create a comprehensive 4-year academic plan for Computer Science' },
    { icon: '📚', title: 'Find Electives', query: 'What are the best electives for my CS major?' },
    { icon: '🎯', title: 'Grad School Prep', query: 'How do I prepare for graduate school applications?' },
    { icon: '💼', title: 'Career Guidance', query: 'What career paths are available with a CS degree?' }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="gradient-text-primary">Academic AI</span> Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your intelligent companion for academic success and course planning
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="card-professional">
              {/* Messages */}
              <div className="h-[600px] overflow-y-auto p-6 space-y-4 custom-scrollbar">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white rounded-2xl rounded-br-lg p-4'
                          : 'bg-gray-700 text-gray-100 rounded-2xl rounded-bl-lg p-4'
                      }`}
                    >
                      <p className="leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-2 opacity-70`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 rounded-2xl rounded-bl-lg p-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <div className="border-t border-gray-700 p-6">
                <form onSubmit={handleSubmit} className="flex gap-4">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask about courses, requirements, study tips..."
                    className="flex-1 input-professional"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? '⏳' : '🚀'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card-professional">
              <h3 className="text-lg font-bold mb-4 flex items-center text-white">
                <span className="mr-2 text-xl">⚡</span>
                Quick Actions
              </h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(action.query)}
                    className="w-full text-left p-3 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{action.icon}</span>
                      <span className="text-sm font-medium text-gray-100">{action.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Example Questions */}
            <div className="card-professional">
              <h3 className="text-lg font-bold mb-4 flex items-center text-white">
                <span className="mr-2 text-xl">💡</span>
                Example Questions
              </h3>
              <div className="space-y-2">
                {exampleQueries.slice(0, 4).map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(example)}
                    className="w-full text-left p-3 rounded-lg border border-gray-600 hover:border-blue-500 hover:border-opacity-50 hover:bg-gray-700 hover:bg-opacity-30 transition-all duration-300 text-sm text-gray-300"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div className="card-professional bg-blue-500 bg-opacity-5 border-blue-500 border-opacity-20">
              <h3 className="text-lg font-bold mb-4 flex items-center text-white">
                <span className="mr-2 text-xl">🎯</span>
                Pro Tips
              </h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400 mt-1">•</span>
                  Be specific about your major and current year
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-cyan-400 mt-1">•</span>
                  Ask about prerequisites before course planning
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-400 mt-1">•</span>
                  Mention your career goals for better recommendations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400 mt-1">•</span>
                  Ask follow-up questions for detailed explanations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 