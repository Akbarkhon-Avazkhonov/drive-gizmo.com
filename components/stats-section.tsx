'use client';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: '50K+',
      label: 'Happy Explorers',
      icon: '👥'
    },
    {
      id: 2,
      number: '500+',
      label: 'Premium Products',
      icon: '📦'
    },
    {
      id: 3,
      number: '98%',
      label: 'Customer Satisfaction',
      icon: '⭐'
    },
    {
      id: 4,
      number: '24/7',
      label: 'Expert Support',
      icon: '🛟'
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, rgba(255, 95, 31, 0.1), rgba(57, 255, 20, 0.1))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>{stat.icon}</div>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>
                {stat.number}
              </div>
              <p style={{ color: '#AAAAAA' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
