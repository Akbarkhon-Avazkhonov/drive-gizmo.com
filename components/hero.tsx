'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(255, 95, 31, 0.1)', animationDuration: '3s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(57, 255, 20, 0.1)', animationDuration: '3s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(26, 42, 108, 0.1)', animationDuration: '3s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold" style={{ border: '1px solid rgba(57, 255, 20, 0.5)', color: '#39FF14', boxShadow: 'inset 0 0 10px rgba(57, 255, 20, 0.3)' }}>
          ⚡ Electric Wilderness Awaits
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Michroma' }}>
          <span style={{ color: '#FF5F1F' }}>Gear Up.</span>
          <span className="block" style={{ color: 'white' }}>Get Out.</span>
          <span style={{ color: '#39FF14' }}>Drive Your Adventure</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#CCCCCC' }}>
          Precision outdoor tools for the modern explorer. Ultra-portable, ultra-tough, and engineered for the road. Merge the rugged outdoors with neon-lit innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/products">
            <button className="px-8 py-4 font-bold rounded-lg transition text-lg" style={{ backgroundColor: '#FF5F1F', color: '#0F0F0F', boxShadow: '0 0 20px rgba(255, 95, 31, 0.6)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#39FF14'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FF5F1F'; }}>
              Explore Gear
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-4 font-bold rounded-lg transition text-lg" style={{ border: '2px solid #39FF14', color: '#39FF14', backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(57, 255, 20, 0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Learn More
            </button>
          </Link>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-md h-80">
            <div className="absolute inset-0 rounded-2xl border p-8 flex flex-col justify-center items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom right, rgba(255, 95, 31, 0.2), rgba(57, 255, 20, 0.2))', borderColor: 'rgba(57, 255, 20, 0.3)', backdropFilter: 'blur(10px)', boxShadow: '0 0 20px rgba(255, 95, 31, 0.6), 0 0 40px rgba(255, 95, 31, 0.3)' }}>
              <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '16px' }}>
                <Image
                  src="/hero-survival-kit.jpg"
                  alt="Survival Kit Pro"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Michroma', color: 'white' }}>Survival Kit Pro</h3>
              <p className="text-sm" style={{ color: '#CCCCCC' }}>Portable stove, lantern & titanium thermos</p>
              <div className="mt-6 w-full h-1 rounded-full" style={{ background: 'linear-gradient(to right, #FF5F1F, #39FF14)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
