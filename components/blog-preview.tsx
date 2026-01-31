'use client';

import Link from 'next/link';

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Winter Camping',
      excerpt: 'Learn how to stay warm and comfortable during cold weather adventures',
      date: 'Jan 28, 2026',
      category: 'Guide',
      color: '#FF5F1F'
    },
    {
      id: 2,
      title: 'Best Lightweight Gear for Backpackers',
      excerpt: 'Discover the perfect balance between weight and functionality',
      date: 'Jan 25, 2026',
      category: 'Gear Review',
      color: '#39FF14'
    },
    {
      id: 3,
      title: 'Leave No Trace: Sustainable Outdoor Practices',
      excerpt: 'How to enjoy nature while protecting it for future generations',
      date: 'Jan 22, 2026',
      category: 'Sustainability',
      color: '#1A2A6C'
    }
  ];

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: 'white' }}>
            <span style={{ color: '#39FF14' }}>Latest From Our</span>
            <span className="block" style={{ color: 'white' }}>Adventure Blog</span>
          </h2>
          <p className="text-lg" style={{ color: '#AAAAAA' }}>
            Expert tips, gear reviews, and outdoor adventure stories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105"
              style={{ borderColor: `${post.color}80`, backgroundColor: `${post.color}05` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = post.color;
                e.currentTarget.style.boxShadow = `0 0 20px ${post.color}99`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${post.color}80`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-2 py-1 rounded" style={{ backgroundColor: `${post.color}33`, color: post.color }}>
                    {post.category}
                  </span>
                  <span style={{ color: '#AAAAAA', fontSize: '12px' }}>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 flex-grow" style={{ fontFamily: 'Michroma', color: 'white' }}>
                  {post.title}
                </h3>
                <p style={{ color: '#CCCCCC', marginBottom: '12px' }}>{post.excerpt}</p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            
          </Link>
        </div>
      </div>
    </section>
  );
}
