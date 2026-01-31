'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Star } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      product: 'Ultra-Lite Titanium Stove',
      author: 'John Explorer',
      rating: 5,
      date: '2 days ago',
      text: 'Amazing quality! This stove is incredibly lightweight and heats up in seconds. Perfect for my camping trips. Highly recommended!',
      verified: true
    },
    {
      id: 2,
      product: 'LED Lantern Pro',
      author: 'Sarah Adventure',
      rating: 5,
      date: '1 week ago',
      text: 'The LED Lantern Pro is a game-changer! Bright, durable, and the battery lasts forever. Best purchase for outdoor adventures.',
      verified: true
    },
    {
      id: 3,
      product: 'Carbon Fiber Chair',
      author: 'Mike Camper',
      rating: 4,
      date: '2 weeks ago',
      text: 'Solid chair, very comfortable for long sitting hours. Slightly heavy for backpacking but worth it. Great build quality.',
      verified: true
    },
    {
      id: 4,
      product: 'Thermal Water Bottle',
      author: 'Emma Explorer',
      rating: 5,
      date: '3 weeks ago',
      text: 'Keeps my drinks hot/cold for hours! The insulation is excellent and it looks sleek. Worth every penny.',
      verified: true
    },
    {
      id: 5,
      product: 'Multi-Tool Compact',
      author: 'David Outdoors',
      rating: 4,
      date: '1 month ago',
      text: 'Compact and practical. Has all the essential tools. Wish it had a few more features but overall great value.',
      verified: true
    },
    {
      id: 6,
      product: 'Portable Power Bank',
      author: 'Lisa Trail',
      rating: 5,
      date: '1 month ago',
      text: 'Lifesaver on the trail! Charges my phone and headlamp multiple times. Fast charging and compact design.',
      verified: true
    }
  ];

  return (
    <main style={{ backgroundColor: '#0F0F0F' }}>
      <Header />
      
      <section style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', fontFamily: 'Michroma', color: '#FF5F1F' }}>
              Customer Reviews
            </h1>
            <p style={{ fontSize: '18px', color: '#AAAAAA', maxWidth: '600px', margin: '0 auto' }}>
              Real stories from real adventurers. See what our customers think about their Drive-Gizmo gear.
            </p>
          </div>

          {/* Stats Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'rgba(255, 95, 31, 0.1)', border: '1px solid rgba(255, 95, 31, 0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#FF5F1F', marginBottom: '8px' }}>4.8/5</div>
              <div style={{ color: '#AAAAAA' }}>Average Rating</div>
            </div>
            <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'rgba(57, 255, 20, 0.1)', border: '1px solid rgba(57, 255, 20, 0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#39FF14', marginBottom: '8px' }}>2,847</div>
              <div style={{ color: '#AAAAAA' }}>Total Reviews</div>
            </div>
            <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'rgba(26, 42, 108, 0.1)', border: '1px solid rgba(26, 42, 108, 0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1A2A6C', marginBottom: '8px' }}>98%</div>
              <div style={{ color: '#AAAAAA' }}>Verified Purchases</div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
            {reviews.map((review) => (
              <div
                key={review.id}
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid #2D2D2D',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 95, 31, 0.05)';
                  e.currentTarget.style.borderColor = '#FF5F1F';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = '#2D2D2D';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#FF5F1F', marginBottom: '4px', fontFamily: 'Michroma' }}>
                      {review.product}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#AAAAAA' }}>
                      by {review.author} {review.verified && '✓'}
                    </p>
                  </div>
                  <span style={{ fontSize: '12px', color: '#888888' }}>{review.date}</span>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      style={{
                        fill: i < review.rating ? '#39FF14' : '#2D2D2D',
                        color: i < review.rating ? '#39FF14' : '#2D2D2D'
                      }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p style={{ fontSize: '14px', color: '#CCCCCC', lineHeight: '1.6', marginBottom: '16px' }}>
                  "{review.text}"
                </p>

                {/* Footer */}
                
              </div>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
