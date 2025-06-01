import Link from 'next/link'

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">AI Agents</h1>
        <p className="text-gray-600">
          Access our suite of AI assistants to help with various aspects of your academic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/agents/academic" 
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">Academic Advisor AI</h2>
              <p className="text-gray-600">Get personalized academic guidance and course recommendations</p>
            </div>
          </div>
          <div className="mt-4">
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Course planning assistance</li>
              <li>• Prerequisites guidance</li>
              <li>• Grade distribution insights</li>
              <li>• Professor information</li>
            </ul>
          </div>
        </Link>

        <Link href="/agents/community" 
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">Community Assistant</h2>
              <p className="text-gray-600">Find study groups and connect with fellow students</p>
            </div>
          </div>
          <div className="mt-4">
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Study group matching</li>
              <li>• Event recommendations</li>
              <li>• Club suggestions</li>
              <li>• Peer connections</li>
            </ul>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow opacity-50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">Study Assistant AI</h2>
              <p className="text-gray-600">Get help with study techniques and material comprehension</p>
              <p className="text-sm text-purple-600 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow opacity-50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">Career Guide AI</h2>
              <p className="text-gray-600">Career planning and internship guidance</p>
              <p className="text-sm text-purple-600 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 