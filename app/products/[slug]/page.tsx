'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Ultra-Lite Titanium Stove',
    price: '$89.99',
    category: 'Cooking',
    image: '/products/stove.jpg',
    color: '#FF5F1F',
    description: 'Lightweight portable stove perfect for camping and backpacking',
    inStock: true,
    fullDescription: 'The Ultra-Lite Titanium Stove is engineered for backpackers and campers who demand the best. Weighing just 1.2 lbs, this portable stove delivers exceptional performance without the weight. Made from food-grade titanium, it\'s incredibly durable and resistant to corrosion. Perfect for solo adventurers or small groups, this stove heats water quickly and efficiently using minimal fuel.',
    amazonUrl: 'https://www.amazon.com/s?k=titanium+camping+stove'
  },
  {
    id: 2,
    name: 'LED Lantern Pro',
    price: '$54.99',
    category: 'Lighting',
    image: '/products/lantern.jpg',
    color: '#39FF14',
    description: 'Bright LED lantern with adjustable brightness levels',
    inStock: true,
    fullDescription: 'Illuminate your campsite with the LED Lantern Pro. Featuring multiple brightness settings and a 360-degree light radius, this lantern provides the perfect ambient lighting for any outdoor setting. With a battery life of up to 40 hours on low brightness, you\'ll have reliable light throughout your entire adventure.',
    amazonUrl: 'https://www.amazon.com/s?k=LED+lantern+camping'
  },
  {
    id: 3,
    name: 'Carbon Fiber Chair',
    price: '$129.99',
    category: 'Seating',
    image: '/products/chair.jpg',
    color: '#1A2A6C',
    description: 'Ultralight and durable camping chair for outdoor adventures',
    inStock: true,
    fullDescription: 'Comfort meets ultralight design with the Carbon Fiber Chair. Weighing only 1.8 lbs, this chair can support up to 300 lbs. The carbon fiber frame provides exceptional durability while minimizing weight. With a comfortable backrest and armrests, it\'s the perfect companion for any outdoor gathering or solo camping trip.',
    amazonUrl: 'https://www.amazon.com/s?k=carbon+fiber+camping+chair'
  },
  {
    id: 4,
    name: 'Thermal Water Bottle',
    price: '$44.99',
    category: 'Hydration',
    image: '/products/bottle.jpg',
    color: '#FF5F1F',
    description: 'Double-walled insulated bottle keeps drinks hot or cold for hours',
    inStock: true,
    fullDescription: 'Stay hydrated on every adventure with our Thermal Water Bottle. The double-walled vacuum insulation keeps drinks at the perfect temperature for up to 24 hours. Available in 32oz and 40oz sizes, it fits perfectly in any backpack. The durable stainless steel construction ensures this bottle will last for years of outdoor adventures.',
    amazonUrl: 'https://www.amazon.com/s?k=thermal+water+bottle+insulated'
  },
  {
    id: 5,
    name: 'Multi-Tool Compact',
    price: '$39.99',
    category: 'Tools',
    image: '/products/multitool.jpg',
    color: '#39FF14',
    description: 'All-in-one multi-tool with essential camping utilities',
    inStock: true,
    fullDescription: 'The Multi-Tool Compact features 15 essential tools in a lightweight design. Includes knife, pliers, saw, can opener, file, screwdriver bits, and more. Perfect for camp repairs, food prep, and emergency situations. Built with high-quality stainless steel and weighing just 6 oz, it\'s an essential addition to any adventurer\'s gear collection.',
    amazonUrl: 'https://www.amazon.com/s?k=multitool+compact+camping'
  },
  {
    id: 6,
    name: 'Portable Power Bank',
    price: '$69.99',
    category: 'Electronics',
    image: '/products/powerbank.jpg',
    color: '#1A2A6C',
    description: 'High-capacity power bank for charging devices on the go',
    inStock: true,
    fullDescription: 'Never run out of battery with our Portable Power Bank. Featuring a 20,000 mAh capacity, it can fully charge most smartphones 5-7 times. The fast-charging technology supports multiple devices simultaneously. Compact and rugged design makes it perfect for outdoor adventures where staying connected matters.',
    amazonUrl: 'https://www.amazon.com/s?k=portable+power+bank+20000mah'
  },
  {
    id: 7,
    name: 'Emergency First Aid Kit',
    price: '$34.99',
    category: 'Safety',
    image: '/products/firstaid.jpg',
    color: '#FF5F1F',
    description: 'Comprehensive first aid kit for outdoor emergencies',
    inStock: true,
    fullDescription: 'Be prepared for any emergency with our comprehensive First Aid Kit. Contains 100+ items including bandages, antiseptic, pain relievers, emergency blanket, and more. Water-resistant case keeps everything organized and protected. Recommended for hiking groups, camping trips, and vehicle emergency kits.',
    amazonUrl: 'https://www.amazon.com/s?k=first+aid+kit+outdoor'
  },
  {
    id: 8,
    name: 'Sleeping Bag Ultra',
    price: '$149.99',
    category: 'Sleep',
    image: '/products/sleepingbag.jpg',
    color: '#39FF14',
    description: 'Temperature-rated sleeping bag for cold weather camping',
    inStock: false,
    fullDescription: 'The Sleeping Bag Ultra provides warmth down to -10°F, making it ideal for winter camping and cold weather adventures. Filled with premium synthetic insulation, it\'s water-resistant and compresses down to fit any backpack. The durable ripstop exterior protects against tears and abrasion.',
    amazonUrl: 'https://www.amazon.com/s?k=sleeping+bag+cold+weather'
  },
  {
    id: 9,
    name: 'Headlamp LED',
    price: '$24.99',
    category: 'Lighting',
    image: '/products/headlamp.jpg',
    color: '#1A2A6C',
    description: 'Hands-free headlamp with red light mode for night vision',
    inStock: true,
    fullDescription: 'The Headlamp LED provides 200 lumens of bright light with hands-free operation. Features red light mode to preserve night vision, three brightness settings, and a 30-hour battery life. Lightweight and comfortable, it\'s perfect for night hiking, camping, and outdoor work.',
    amazonUrl: 'https://www.amazon.com/s?k=LED+headlamp+camping'
  }
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => 
    p.name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === params.slug
  );

  if (!product) {
    return (
      <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
        <Header />
        <div style={{ paddingTop: '200px', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <p>The product you\'re looking for doesn\'t exist.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
      <Header />
      
      <section style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
            {/* Product Image */}
            <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', border: `1px solid ${product.color}4D` }}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Product Info */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: product.color, marginBottom: '8px' }}>
                  {product.category}
                </p>
                {!product.inStock && (
                  <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#FF5F1F', marginBottom: '8px' }}>
                    Out of Stock
                  </p>
                )}
              </div>

              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', fontFamily: 'Michroma' }}>
                {product.name}
              </h1>

              

              <p style={{ fontSize: '18px', color: '#CCCCCC', marginBottom: '24px', lineHeight: '1.6' }}>
                {product.fullDescription}
              </p>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ flex: 1, textDecoration: 'none' }}
                >
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: product.color,
                      color: '#0F0F0F',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '16px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    Buy on Amazon
                  </button>
                </a>
              </div>

              <div style={{ paddingTop: '24px', borderTop: `1px solid rgba(255, 255, 255, 0.1)` }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px' }}>Features:</h3>
                <ul style={{ color: '#CCCCCC', lineHeight: '1.8' }}>
                  <li>Premium construction and materials</li>
                  <li>Designed for outdoor adventures</li>
                  <li>Durable and long-lasting</li>
                  <li>Perfect for professionals and enthusiasts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
