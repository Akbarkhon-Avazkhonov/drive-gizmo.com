import React from "react"
import type { Metadata } from 'next'
import { Michroma, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const michroma = Michroma({ weight: '400', subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Drive-Gizmo | Electric Wilderness Gear',
  description: 'Precision outdoor tools for the modern explorer. Ultra-portable, ultra-tough gear engineered for the road.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} antialiased`} style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
