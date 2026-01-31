'use client';

import Image from 'next/image';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Ultra-Lite Titanium Stove',
      price: '$89.99',
      category: 'Cooking',
      image: '/products/stove.jpg',
      color: '#FF5F1F',
      featured: true
    },
    {
      id: 2,
      name: 'LED Lantern Pro',
      price: '$54.99',
      category: 'Lighting',
      image: '/products/lantern.jpg',
      color: '#39FF14'
    },
    {
      id: 3,
      name: 'Carbon Fiber Chair',
      price: '$129.99',
      category: 'Seating',
      image: '/products/chair.jpg',
      color: '#1A2A6C'
    },
    {
      id: 4,
      name: 'Thermal Water Bottle',
      price: '$44.99',
      category: 'Hydration',
      image: '/products/bottle.jpg',
      color: '#FF5F1F'
    },
    {
      id: 5,
      name: 'Multi-Tool Compact',
      price: '$39.99',
      category: 'Tools',
      image: '/products/multitool.jpg',
      color: '#39FF14'
    },
    {
      id: 6,
      name: 'Portable Power Bank',
      price: '$69.99',
      category: 'Electronics',
      image: '/products/powerbank.jpg',
      color: '#1A2A6C'
    }
  ];

  return (
    <section id="featured" className="py-20 px-4" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Michroma' }}>
            <span style={{ color: '#FF5F1F' }}>Featured</span>
            <span className="block" style={{ color: 'white' }}>Gear Collection</span>
          </h2>
          <p className="text-lg" style={{ color: '#AAAAAA' }}>
            Handpicked equipment for modern explorers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 group"
              style={{ gridColumn: product.featured ? 'span 2' : 'span 1', gridRow: product.featured ? 'span 2' : 'span 1' }}
            >
              <div className="w-full rounded-xl p-8 flex flex-col justify-between relative overflow-hidden" style={{ height: product.featured ? '380px' : '280px', background: `linear-gradient(to bottom right, ${product.color}33, ${product.color}11)`, border: `1px solid ${product.color}4D` }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: `${product.color}1A` }}></div>

                <div className="relative z-10">
                  <div style={{ position: 'relative', width: '100%', height: product.featured ? '200px' : '140px', marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                  {product.featured && (
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: `${product.color}33`, border: `1px solid ${product.color}80`, color: product.color }}>
                      ⭐ Featured
                    </div>
                  )}
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-semibold mb-2" style={{ color: product.color }}>
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Michroma', color: 'white' }}>
                    {product.name}
                  </h3>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
