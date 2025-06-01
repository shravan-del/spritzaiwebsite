'use client'

import dynamic from 'next/dynamic'

const AgentChat = dynamic(() => import('./AgentChat'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[600px] bg-white rounded-xl shadow-lg">
      <div className="animate-pulse text-gray-600">Loading chat interface...</div>
    </div>
  ),
})

export default function ClientAgentChat() {
  return <AgentChat />
} 