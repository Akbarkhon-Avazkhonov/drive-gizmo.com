'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Rodriguez',
      role: 'Adventure Enthusiast',
      text: 'Drive-Gizmo products have completely transformed my camping trips. The Titanium Stove is incredibly lightweight and efficient!',
      rating: 5,
      image: '/testimonials/john-mitchell.jpg'
    },
    {
      id: 2,
      name: 'Jennifer Lee',
      role: 'Professional Hiker',
      text: 'I\'ve tested gear from many brands, but Drive-Gizmo stands out for quality and innovation. Worth every penny!',
      rating: 5,
      image: '/testimonials/sarah-chen.jpg'
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Outdoor Photographer',
      text: 'The power bank keeps my camera charged during long expeditions. Absolutely reliable and compact!',
      rating: 5,
      image: '/testimonials/marcus-williams.jpg'
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: 'white' }}>
            <span style={{ color: '#FF5F1F' }}>What Adventurers</span>
            <span className="block" style={{ color: 'white' }}>Are Saying</span>
          </h2>
          <p className="text-lg" style={{ color: '#AAAAAA' }}>
            Real reviews from real explorers who trust Drive-Gizmo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl p-8 border transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgba(255, 95, 31, 0.05)', borderColor: 'rgba(255, 95, 31, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF5F1F';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 95, 31, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 95, 31, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden' }}>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'white' }}>{testimonial.name}</h3>
                  <p style={{ color: '#AAAAAA', fontSize: '12px' }}>{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} style={{ color: '#FF5F1F' }}>★</span>
                ))}
              </div>

              <p style={{ color: '#CCCCCC' }}>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
