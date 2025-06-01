import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Navigation from "../components/Navigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "CommunityAI - AI-Powered Academic Platform",
  description: "The future of AI-powered academic guidance and community connection for university students",
=======

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CommunityAI Dashboard",
  description: "AI agent-powered, community-centered dashboard for universities and student organizations",
>>>>>>> 4309a5b450abed16e462f95ffd6124eb0f9ae403
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Navigation />
        <main className="relative min-h-screen">
          {children}
        </main>
=======
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-lg">
            <div className="p-4">
              <h1 className="text-xl font-bold text-purple-600">CommunityAI</h1>
            </div>
            <nav className="mt-4">
              <a href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50">
                <span className="mr-2">🏠</span>
                Dashboard
              </a>
              <a href="/agents" className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50">
                <span className="mr-2">🤖</span>
                AI Agents
              </a>
              <a href="/community" className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50">
                <span className="mr-2">👥</span>
                Community
              </a>
              <a href="/resources" className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50">
                <span className="mr-2">📚</span>
                Resources
              </a>
              <a href="/events" className="flex items-center px-4 py-2 text-gray-700 hover:bg-purple-50">
                <span className="mr-2">📅</span>
                Events
              </a>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
            <header className="bg-white shadow">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-800">Virginia Tech Community Hub</h2>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-800">
                      <span className="mr-2">🔔</span>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <span className="mr-2">👤</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
>>>>>>> 4309a5b450abed16e462f95ffd6124eb0f9ae403
      </body>
    </html>
  );
}
