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

const categoryData: Record<string, any> = {
  'fire-pit': {
    name: 'The Fire Pit',
    description: 'Portable Stoves & Cookware',
    color: '#FF5F1F',
    icon: '🔥',
    products: [
      { id: 1, name: 'Ultra-Lite Titanium Stove', price: '$89.99', image: '/products/stove.jpg' },
      { id: 4, name: 'Thermal Water Bottle', price: '$44.99', image: '/products/bottle.jpg' }
    ]
  },
  'base-camp': {
    name: 'The Base Camp',
    description: 'Foldable Chairs & Tables',
    color: '#39FF14',
    icon: '⛺',
    products: [
      { id: 3, name: 'Carbon Fiber Chair', price: '$129.99', image: '/products/chair.jpg' }
    ]
  },
  'beam': {
    name: 'The Beam',
    description: 'Lanterns & Flashlights',
    color: '#1A2A6C',
    icon: '💡',
    products: [
      { id: 2, name: 'LED Lantern Pro', price: '$54.99', image: '/products/lantern.jpg' },
      { id: 9, name: 'Headlamp LED', price: '$24.99', image: '/products/headlamp.jpg' }
    ]
  },
  'vessel': {
    name: 'The Vessel',
    description: 'Bottles & Hydration Gear',
    color: '#FF5F1F',
    icon: '💧',
    products: [
      { id: 4, name: 'Thermal Water Bottle', price: '$44.99', image: '/products/bottle.jpg' }
    ]
  }
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryData[params.slug];

  if (!category) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0F0F0F' }}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'white', fontFamily: 'Michroma' }}>Category Not Found</h1>
            <Link href="/">
              <button style={{ backgroundColor: '#FF5F1F', color: '#0F0F0F', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#0F0F0F', minHeight: '100vh' }}>
        <section style={{ paddingTop: '120px', paddingBottom: '60px', paddingLeft: '16px', paddingRight: '16px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>{category.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: category.color }}>
                {category.name}
              </h1>
              <p style={{ fontSize: '18px', color: '#AAAAAA', marginBottom: '32px' }}>
                {category.description}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
              {category.products.map((product: any) => (
                <Link key={product.id} href={`/products/${slugify(product.name)}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      backgroundColor: `${category.color}15`,
                      border: `1px solid ${category.color}4D`,
                      borderRadius: '12px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 0 20px ${category.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                      />
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px', fontFamily: 'Michroma' }}>
                        {product.name}
                      </h3>
                      
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <Link href="/products">
                <button
                  style={{
                    backgroundColor: category.color,
                    color: '#0F0F0F',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
