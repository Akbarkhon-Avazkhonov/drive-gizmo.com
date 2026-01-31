'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: 'rgba(15, 15, 15, 0.5)', borderColor: '#2D2D2D', backgroundImage: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.5), #0F0F0F)' }}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'linear-gradient(to bottom right, #FF5F1F, #39FF14)', color: '#0F0F0F' }}>
                ⚙️
              </div>
              <span className="text-xl font-bold" style={{ color: '#FF5F1F', fontFamily: 'Michroma' }}>
                Drive-Gizmo
              </span>
            </div>
            <p className="text-sm" style={{ color: '#AAAAAA' }}>
              Premium outdoor gear for modern adventurers. Engineered for performance, designed for the wild.
            </p>
          </div>

          

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'Michroma', color: 'white' }}>Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm transition" style={{ color: '#AAAAAA', display: 'inline-block' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39FF14'} onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}>About Us</Link></li>
              <li><Link href="/contact" className="text-sm transition" style={{ color: '#AAAAAA', display: 'inline-block' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39FF14'} onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}>Contact</Link></li>
              
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'Michroma', color: 'white' }}>Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm transition" style={{ color: '#AAAAAA', display: 'inline-block' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39FF14'} onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}>Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm transition" style={{ color: '#AAAAAA', display: 'inline-block' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39FF14'} onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}>Terms of Service</Link></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="my-8" style={{ borderTop: '1px solid #2D2D2D' }}></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <p className="text-sm text-center md:text-left" style={{ color: '#888888' }}>
            © 2026 Drive-Gizmo. All rights reserved. | Engineered for adventure.
          </p>

          
        </div>

        <div className="py-6 border-t" style={{ borderColor: '#2D2D2D' }}>
          <p className="text-xs text-center" style={{ color: '#777777' }}>
            As an Amazon Associate, we earn from qualifying purchases. Drive-Gizmo is a participant in the Amazon Services LLC Associates Program.
          </p>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center font-bold hover:scale-110 transition z-40"
        style={{ background: 'linear-gradient(to bottom right, #FF5F1F, #39FF14)', color: '#0F0F0F', boxShadow: '0 0 20px rgba(255, 95, 31, 0.6)' }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
}
