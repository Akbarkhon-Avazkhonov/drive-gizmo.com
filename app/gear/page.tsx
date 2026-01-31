'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Gear() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#0F0F0F' }}>
      <Header />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="mt-8">
          <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Michroma', color: '#39FF14' }}>
            ⚙️ All Gear
          </h1>
          <p className="text-xl mb-8" style={{ color: '#AAAAAA' }}>
            Complete collection of outdoor equipment and accessories
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { name: 'Carbon Fiber Chair', price: '$129.99', category: 'Seating', icon: '⛺' },
              { name: 'LED Lantern Pro', price: '$54.99', category: 'Lighting', icon: '💡' },
              { name: 'Thermal Water Bottle', price: '$44.99', category: 'Hydration', icon: '💧' },
              { name: 'Multi-Tool Compact', price: '$39.99', category: 'Tools', icon: '🔧' },
              { name: 'Portable Power Bank', price: '$69.99', category: 'Electronics', icon: '🔋' },
              { name: 'Sleeping Bag Compact', price: '$89.99', category: 'Sleep Gear', icon: '🛏️' },
              { name: 'Backpack 40L', price: '$129.99', category: 'Bags', icon: '🎒' },
              { name: 'Tent 2-Person', price: '$199.99', category: 'Shelter', icon: '⛺' },
              { name: 'Headlamp LED', price: '$34.99', category: 'Lighting', icon: '💡' },
            ].map((product, i) => (
              <div key={i} className="rounded-xl p-6 border-2 transition hover:scale-105" style={{ borderColor: '#39FF1499', backgroundColor: '#39FF1415' }}>
                <div className="text-4xl mb-3">{product.icon}</div>
                <p className="text-sm mb-2" style={{ color: '#39FF14' }}>{product.category}</p>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#39FF14' }}>{product.price}</span>
                  <button className="px-4 py-2 rounded-lg font-semibold" style={{ backgroundColor: '#39FF14', color: '#0F0F0F' }}>
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
