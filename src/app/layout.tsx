import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "CommunityAI - AI-Powered Academic Platform",
  description: "The future of AI-powered academic guidance and community connection for university students",
};

export default function RootLayout({
  children,
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
      </body>
    </html>
  );
}
