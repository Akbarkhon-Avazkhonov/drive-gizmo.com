'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: 'rgba(15, 15, 15, 0.8)', borderColor: '#2D2D2D', backdropFilter: 'blur(12px)' }}>
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'linear-gradient(to bottom right, #FF5F1F, #39FF14)', color: '#0F0F0F' }}>
              ⚙️
            </div>
            <span className="text-2xl font-bold" style={{ color: '#FF5F1F', fontFamily: 'Michroma' }}>
              Drive-Gizmo
            </span>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          
          
          <a href="/products" className="text-white hover:transition" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39FF14'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Products</a>
          <a href="/reviews" className="text-white hover:transition" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#39FF14'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Reviews</a>
          <a href="/about" className="text-white hover:transition" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF5F1F'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>About</a>
          <a href="/contact" className="text-white hover:transition" style={{ color: 'white' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF5F1F'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Contact</a>
          
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: 'white' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-b p-4 space-y-4" style={{ backgroundColor: '#0F0F0F', borderColor: '#2D2D2D' }}>
          <a href="/fire-pit" className="block" style={{ color: 'white' }}>The Fire Pit</a>
          <a href="/gear" className="block" style={{ color: 'white' }}>Gear</a>
          <a href="/products" className="block" style={{ color: 'white' }}>Products</a>
          <a href="/reviews" className="block" style={{ color: 'white' }}>Reviews</a>
          <a href="/about" className="block" style={{ color: 'white' }}>About</a>
          <a href="/contact" className="block" style={{ color: 'white' }}>Contact</a>
          <button className="w-full px-6 py-2 rounded-full font-bold" style={{ backgroundColor: '#FF5F1F', color: '#0F0F0F' }}>
            Shop Now
          </button>
        </div>
      )}
    </header>
  );
}
