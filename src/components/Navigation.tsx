'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Academic AI', href: '/academic' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 metallic-purple rounded-xl flex items-center justify-center text-2xl purple-glow">
              <span className="text-xl font-bold text-white text-glow">AI</span>
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C6A355] shimmer">
              CommunityAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-[#C6A355] bg-[#C6A355]/10 gold-glow'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/academic" 
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black metallic-gold rounded-lg transition-all duration-200 hover:scale-105 shimmer"
            >
              <span className="mr-2">🚀</span>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="glass-effect rounded-2xl p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-[#C6A355] bg-[#C6A355]/10 gold-glow'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-purple-900/50">
                <Link 
                  href="/academic" 
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-black metallic-gold rounded-lg transition-all duration-200 hover:scale-105 shimmer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">🚀</span>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 