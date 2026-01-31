'use client';

import Link from 'next/link';

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export default function GearBoxes() {
  const gearCrates = [
    {
      id: 1,
      name: 'The Fire Pit',
      description: 'Portable Stoves & Cookware',
      icon: '🔥',
      color: '#FF5F1F',
      items: 24,
      slug: 'fire-pit',
      productSlug: 'ultra-lite-titanium-stove'
    },
    {
      id: 2,
      name: 'The Base Camp',
      description: 'Foldable Chairs & Tables',
      icon: '⛺',
      color: '#39FF14',
      items: 18,
      slug: 'base-camp',
      productSlug: 'carbon-fiber-chair'
    },
    {
      id: 3,
      name: 'The Beam',
      description: 'Lanterns & Flashlights',
      icon: '💡',
      color: '#1A2A6C',
      items: 31,
      slug: 'beam',
      productSlug: 'led-lantern-pro'
    },
    {
      id: 4,
      name: 'The Vessel',
      description: 'Bottles & Hydration Gear',
      icon: '💧',
      color: '#FF5F1F',
      items: 15,
      slug: 'vessel',
      productSlug: 'thermal-water-bottle'
    }
  ];

  return (
    <section id="crates" className="py-20 px-4" style={{ background: 'linear-gradient(to bottom, #0F0F0F, #0F0F0F, rgba(15, 15, 15, 0.5))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Michroma' }}>
            <span style={{ color: '#39FF14' }}>Your Cargo</span>
            <span className="block" style={{ color: 'white' }}>Awaits</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#AAAAAA' }}>
            Browse our interactive cargo crates filled with the ultimate outdoor gear
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {gearCrates.map((crate) => (
            <Link key={crate.id} href={`/products/${crate.productSlug}`} style={{ textDecoration: 'none' }}>
              <div
                className="group relative overflow-hidden rounded-xl p-8 border-2 transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ borderColor: `${crate.color}80`, backgroundColor: `${crate.color}10` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = crate.color;
                  e.currentTarget.style.boxShadow = `0 0 20px ${crate.color}99`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${crate.color}80`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to bottom right, ${crate.color}33, transparent)` }}></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4">{crate.icon}</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Michroma', color: 'white' }}>
                    {crate.name}
                  </h3>
                  <p className="mb-4" style={{ color: '#CCCCCC' }}>{crate.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <span className="text-sm font-semibold" style={{ color: crate.color }}>
                      {crate.items} Items
                    </span>
                    <span className="text-white font-bold group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
