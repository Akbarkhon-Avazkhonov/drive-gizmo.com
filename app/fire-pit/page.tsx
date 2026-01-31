'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function FirePit() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#0F0F0F' }}>
      <Header />
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="mt-8">
          <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>
            🔥 The Fire Pit
          </h1>
          <p className="text-xl mb-8" style={{ color: '#AAAAAA' }}>
            Portable Stoves & Cookware for outdoor adventures
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { name: 'Ultra-Lite Titanium Stove', price: '$89.99', desc: 'Weighs only 85g, folds to pocket size' },
              { name: 'Compact Cooking Pan Set', price: '$54.99', desc: 'Non-stick coating, nesting design' },
              { name: 'Portable Grill Plate', price: '$69.99', desc: 'Cast iron, works on any heat source' },
              { name: 'Windscreen Reflector', price: '$24.99', desc: 'Lightweight aluminum, increases efficiency' },
              { name: 'Camp Kettle Pro', price: '$39.99', desc: '1.5L capacity, stainless steel' },
              { name: 'Cooking Utensil Kit', price: '$29.99', desc: 'Fork, knife, spoon combo tool' },
            ].map((product, i) => (
              <div key={i} className="rounded-xl p-6 border-2 transition hover:scale-105" style={{ borderColor: '#FF5F1F99', backgroundColor: '#FF5F1F15' }}>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p style={{ color: '#AAAAAA' }} className="text-sm mb-4">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: '#FF5F1F' }}>{product.price}</span>
                  <button className="px-4 py-2 rounded-lg font-semibold" style={{ backgroundColor: '#FF5F1F', color: '#0F0F0F' }}>
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
