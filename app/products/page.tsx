'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Ultra-Lite Titanium Stove',
      price: '$89.99',
      category: 'Cooking',
      image: '/products/stove.jpg',
      color: '#FF5F1F',
      description: 'Lightweight portable stove perfect for camping and backpacking',
      inStock: true
    },
    {
      id: 2,
      name: 'LED Lantern Pro',
      price: '$54.99',
      category: 'Lighting',
      image: '/products/lantern.jpg',
      color: '#39FF14',
      description: 'Bright LED lantern with adjustable brightness levels',
      inStock: true
    },
    {
      id: 3,
      name: 'Carbon Fiber Chair',
      price: '$129.99',
      category: 'Seating',
      image: '/products/chair.jpg',
      color: '#1A2A6C',
      description: 'Ultralight and durable camping chair for outdoor adventures',
      inStock: true
    },
    {
      id: 4,
      name: 'Thermal Water Bottle',
      price: '$44.99',
      category: 'Hydration',
      image: '/products/bottle.jpg',
      color: '#FF5F1F',
      description: 'Double-walled insulated bottle keeps drinks hot or cold for hours',
      inStock: true
    },
    {
      id: 5,
      name: 'Multi-Tool Compact',
      price: '$39.99',
      category: 'Tools',
      image: '/products/multitool.jpg',
      color: '#39FF14',
      description: 'All-in-one multi-tool with essential camping utilities',
      inStock: true
    },
    {
      id: 6,
      name: 'Portable Power Bank',
      price: '$69.99',
      category: 'Electronics',
      image: '/products/powerbank.jpg',
      color: '#1A2A6C',
      description: 'High-capacity power bank for charging devices on the go',
      inStock: true
    },
    {
      id: 7,
      name: 'Emergency First Aid Kit',
      price: '$34.99',
      category: 'Safety',
      image: '/products/firstaid.jpg',
      color: '#FF5F1F',
      description: 'Comprehensive first aid kit for outdoor emergencies',
      inStock: true
    },
    {
      id: 8,
      name: 'Sleeping Bag Ultra',
      price: '$149.99',
      category: 'Sleep',
      image: '/products/sleepingbag.jpg',
      color: '#39FF14',
      description: 'Temperature-rated sleeping bag for cold weather camping',
      inStock: false
    },
    {
      id: 9,
      name: 'Headlamp LED',
      price: '$24.99',
      category: 'Lighting',
      image: '/products/headlamp.jpg',
      color: '#1A2A6C',
      description: 'Hands-free headlamp with red light mode for night vision',
      inStock: true
    }
  ];

  return (
    <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
      <Header />
      
      <section style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '16px', paddingRight: '16px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', fontFamily: 'Michroma' }}>
              <span style={{ color: '#FF5F1F' }}>Complete</span>
              <span style={{ display: 'block', color: 'white' }}>Product Catalog</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#AAAAAA', maxWidth: '600px', margin: '0 auto' }}>
              Browse our full selection of premium outdoor gear and equipment designed for modern adventurers
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: `linear-gradient(to bottom right, ${product.color}33, ${product.color}11)`,
                  border: `1px solid ${product.color}4D`,
                  borderRadius: '12px',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  opacity: product.inStock ? 1 : 0.6
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 0 20px ${product.color}99`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {!product.inStock && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(255, 95, 31, 0.8)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    Out of Stock
                  </div>
                )}
                
                <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '16px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>

                <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px', color: product.color }}>
                  {product.category}
                </p>

                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', fontFamily: 'Michroma', color: 'white' }}>
                  {product.name}
                </h3>

                <p style={{ fontSize: '14px', color: '#CCCCCC', marginBottom: '16px' }}>
                  {product.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  
                  
                  <Link href={`/products/${slugify(product.name)}`}>
                    <button
                      style={{
                        backgroundColor: product.color,
                        color: '#0F0F0F',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      Read More
                    </button>
                  </Link>
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
