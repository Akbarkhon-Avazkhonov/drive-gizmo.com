'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function About() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#0F0F0F' }}>
      <Header />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="mt-8">
          <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Michroma', color: '#1A2A6C' }}>
            About Drive-Gizmo
          </h1>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>
                Our Mission
              </h2>
              <p style={{ color: '#CCCCCC' }} className="text-lg leading-relaxed">
                At Drive-Gizmo, we believe that adventure shouldn't be complicated. We create precision outdoor tools engineered for the modern explorer—ultra-portable, ultra-tough gear that merges rugged outdoor performance with neon-lit innovation. Every product is designed to handle the Electric Wilderness.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: '#39FF14' }}>
                Why Choose Us?
              </h2>
              <ul className="space-y-3">
                <li className="text-lg" style={{ color: '#CCCCCC' }}>
                  ✓ Premium quality materials sourced from industry leaders
                </li>
                <li className="text-lg" style={{ color: '#CCCCCC' }}>
                  ✓ Lightweight designs that don't compromise on durability
                </li>
                <li className="text-lg" style={{ color: '#CCCCCC' }}>
                  ✓ Innovative features for modern adventurers
                </li>
                <li className="text-lg" style={{ color: '#CCCCCC' }}>
                  ✓ Lifetime warranty on selected products
                </li>
                <li className="text-lg" style={{ color: '#CCCCCC' }}>
                  ✓ Expert customer support and adventure tips
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>
                Our Story
              </h2>
              <p style={{ color: '#CCCCCC' }} className="text-lg leading-relaxed">
                Founded in 2024, Drive-Gizmo started with a simple idea: combine cutting-edge technology with outdoor gear. Our team of engineers and outdoor enthusiasts spent years perfecting every detail. Today, we're trusted by adventurers around the world who demand the best in portable, durable equipment.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: '#39FF14' }}>
                Sustainability
              </h2>
              <p style={{ color: '#CCCCCC' }} className="text-lg leading-relaxed">
                We're committed to environmental responsibility. All our products are designed to last a lifetime, reducing waste. We use recyclable packaging and partner with eco-friendly manufacturers. The wilderness deserves our respect and protection.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
