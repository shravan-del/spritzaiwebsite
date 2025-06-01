import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9333EA]/20 rounded-full blur-3xl floating purple-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C6A355]/20 rounded-full blur-3xl floating gold-glow" style={{animationDelay: '-3s'}}></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-3 py-1.5 mb-4">
                <span className="text-2xl">🦃</span>
                <span className="text-sm font-medium text-[#C6A355] uppercase tracking-wider shimmer">Virginia Tech Community Hub</span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
                  Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#C6A355] shimmer">CommunityAI</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0">
                  Your all-in-one AI companion hub for Virginia Tech. From academic guidance to campus life, our AI agents are here to enhance your Hokie experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="/agents" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white metallic-purple rounded-lg transition-all duration-200 hover:scale-105 purple-glow shimmer">
                  <span className="mr-2">🤖</span>
                  Explore AI Agents
                </a>
                <a href="/community" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black metallic-gold rounded-lg transition-all duration-200 hover:scale-105 gold-glow shimmer">
                  <span className="mr-2">👥</span>
                  Join Community
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-[#C6A355] mb-4">Featured AI Agents</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <span className="px-4 py-2 glass-effect rounded-lg text-sm text-white/80 shimmer">Academic Advisor AI</span>
                  <span className="px-4 py-2 glass-effect rounded-lg text-sm text-white/80 shimmer">Campus Life AI</span>
                  <span className="px-4 py-2 glass-effect rounded-lg text-sm text-white/80 shimmer">Social Events AI</span>
                  <span className="px-4 py-2 glass-effect rounded-lg text-sm text-white/80 shimmer">Career Guide AI</span>
                </div>
              </div>
            </div>

            {/* Right Content - Agent Preview */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#9333EA] rounded-full animate-pulse purple-glow"></div>
                    <span className="text-sm font-medium text-white/80">Campus Life Assistant</span>
                  </div>
                  <span className="text-xs text-[#C6A355] bg-[#C6A355]/10 px-2 py-1 rounded-full gold-glow">Live</span>
                </div>

                <div className="space-y-4">
                  <div className="metallic-purple text-white rounded-2xl rounded-tr-sm p-4 ml-auto max-w-[80%] purple-glow">
                    <p>What events are happening at the Squires Student Center this week?</p>
                  </div>
                  <div className="glass-effect text-white/90 rounded-2xl rounded-tl-sm p-4 mr-auto max-w-[80%]">
                    <p>Here are some upcoming events at Squires:<br/>
                    - Student Organization Fair (Tuesday, 11AM-3PM)<br/>
                    - Movie Night: Latest Releases (Thursday, 7PM)<br/>
                    - Cultural Festival (Saturday, 12PM-6PM)<br/>
                    Would you like me to help you register for any of these events?</p>
                  </div>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#9333EA] rounded-full animate-bounce purple-glow" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-[#9333EA] rounded-full animate-bounce purple-glow" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#9333EA] rounded-full animate-bounce purple-glow" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span>AI is typing...</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="glass-effect rounded-xl p-4 text-center shimmer">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#A855F7]">5+</div>
                  <div className="text-sm text-[#C6A355] mt-1">AI Agents</div>
                </div>
                <div className="glass-effect rounded-xl p-4 text-center shimmer">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C6A355] to-[#E5CF8E]">30K+</div>
                  <div className="text-sm text-[#C6A355] mt-1">VT Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your AI-Powered <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#C6A355] shimmer">Hokie Companion</span>
            </h2>
            <p className="text-lg text-white/70">
              Discover our suite of specialized AI agents designed to enhance every aspect of your Virginia Tech experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Academic AI Card */}
            <a href="/agents/academic" className="group glass-effect rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02] shimmer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 metallic-purple rounded-xl flex items-center justify-center text-2xl purple-glow">
                  🎓
                </div>
                <h3 className="text-xl font-semibold text-white">Academic Advisor AI</h3>
              </div>
              <p className="text-white/70 mb-4">Course planning, study resources, and academic guidance tailored to VT programs.</p>
              <div className="flex items-center text-[#9333EA] font-medium group-hover:translate-x-2 transition-transform duration-200">
                Start Learning <span className="ml-2">→</span>
              </div>
            </a>

            {/* Campus Life Card */}
            <a href="/agents/campus" className="group glass-effect rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02] shimmer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 metallic-gold rounded-xl flex items-center justify-center text-2xl gold-glow">
                  🏛️
                </div>
                <h3 className="text-xl font-semibold text-white">Campus Life AI</h3>
              </div>
              <p className="text-white/70 mb-4">Events, dining options, campus navigation, and student organization information.</p>
              <div className="flex items-center text-[#C6A355] font-medium group-hover:translate-x-2 transition-transform duration-200">
                Explore Campus <span className="ml-2">→</span>
              </div>
            </a>

            {/* Social Hub Card */}
            <a href="/agents/social" className="group glass-effect rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02] shimmer">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 metallic-purple rounded-xl flex items-center justify-center text-2xl purple-glow">
                  🎉
                </div>
                <h3 className="text-xl font-semibold text-white">Social Hub AI</h3>
              </div>
              <p className="text-white/70 mb-4">Connect with fellow Hokies, find events, and build your campus community.</p>
              <div className="flex items-center text-[#9333EA] font-medium group-hover:translate-x-2 transition-transform duration-200">
                Get Social <span className="ml-2">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to enhance your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#C6A355] shimmer">VT experience?</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join your fellow Hokies and discover how our AI agents can help you make the most of your time at Virginia Tech
            </p>
            <a href="/agents" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white metallic-purple rounded-lg transition-all duration-200 hover:scale-105 purple-glow shimmer">
              <span className="mr-2">✨</span>
              Get Started Now
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
