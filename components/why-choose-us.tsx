'use client';

export default function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      title: 'Premium Quality',
      description: 'Crafted with highest quality materials for durability and performance',
      icon: '⭐'
    },
    {
      id: 2,
      title: 'Ultra Lightweight',
      description: 'Engineered to minimize weight without compromising functionality',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Eco-Friendly',
      description: 'Sustainable production practices and recyclable materials',
      icon: '♻️'
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Dedicated customer service team always ready to help',
      icon: '🛟'
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'linear-gradient(to bottom, #0F0F0F, rgba(57, 255, 20, 0.05))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: 'white' }}>
            <span style={{ color: '#39FF14' }}>Why Choose</span>
            <span className="block" style={{ color: 'white' }}>Drive-Gizmo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-xl p-8 text-center border transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'rgba(57, 255, 20, 0.05)', borderColor: 'rgba(57, 255, 20, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#39FF14';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(57, 255, 20, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(57, 255, 20, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Michroma', color: 'white' }}>
                {benefit.title}
              </h3>
              <p style={{ color: '#CCCCCC' }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
