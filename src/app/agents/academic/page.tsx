'use client'

import { useState } from 'react'
import ClientAgentChat from '@/components/ClientAgentChat'

export default function AcademicAgentPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎓</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-2">Academic Advisor AI</h1>
            <p className="text-gray-600">
              Get personalized academic guidance and course recommendations. Ask me about:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">📚</span>
                Course recommendations and prerequisites
              </li>
              <li className="flex items-center">
                <span className="mr-2">📊</span>
                Grade distributions and course difficulty
              </li>
              <li className="flex items-center">
                <span className="mr-2">👩‍🏫</span>
                Professor information and teaching styles
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎯</span>
                Academic pathways and career alignment
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <ClientAgentChat />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 text-left border rounded-lg hover:bg-purple-50">
            <span className="block font-medium">Course Catalog</span>
            <span className="text-sm text-gray-600">Browse available courses</span>
          </button>
          <button className="p-4 text-left border rounded-lg hover:bg-purple-50">
            <span className="block font-medium">Degree Requirements</span>
            <span className="text-sm text-gray-600">View graduation requirements</span>
          </button>
          <button className="p-4 text-left border rounded-lg hover:bg-purple-50">
            <span className="block font-medium">Academic Calendar</span>
            <span className="text-sm text-gray-600">Important dates and deadlines</span>
          </button>
        </div>
      </div>
    </div>
  )
} 