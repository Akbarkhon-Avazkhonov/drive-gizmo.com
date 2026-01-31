'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Essential Gear for Your First Camping Trip',
      excerpt: 'Learn what gear you need to make your first camping adventure comfortable and safe.',
      date: 'January 25, 2026',
      category: 'Guides',
      color: '#FF5F1F'
    },
    {
      id: 2,
      title: 'Top 5 Lightweight Backpacking Stoves',
      excerpt: 'Discover the best portable stoves perfect for backpackers who want to minimize weight.',
      date: 'January 20, 2026',
      category: 'Reviews',
      color: '#39FF14'
    },
    {
      id: 3,
      title: 'Winter Camping: Stay Warm in the Cold',
      excerpt: 'Expert tips and gear recommendations for camping in freezing temperatures.',
      date: 'January 15, 2026',
      category: 'Guides',
      color: '#1A2A6C'
    },
    {
      id: 4,
      title: 'Sustainable Outdoor Gear Choices',
      excerpt: 'Explore eco-friendly alternatives for your outdoor adventures without sacrificing quality.',
      date: 'January 10, 2026',
      category: 'Sustainability',
      color: '#FF5F1F'
    },
    {
      id: 5,
      title: 'Navigation Skills Every Explorer Should Know',
      excerpt: 'Master map reading, compass use, and other essential navigation techniques.',
      date: 'January 5, 2026',
      category: 'Skills',
      color: '#39FF14'
    },
    {
      id: 6,
      title: 'Camping with Kids: A Beginner\'s Guide',
      excerpt: 'Make family camping trips fun and safe with these practical tips and gear suggestions.',
      date: 'December 30, 2025',
      category: 'Guides',
      color: '#1A2A6C'
    }
  ];

  return (
    <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-20" style={{ marginTop: '80px' }}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>
            Drive-Gizmo Blog
          </h1>
          <p style={{ color: '#AAAAAA', fontSize: '18px' }}>
            Tips, guides, and stories from the outdoor adventure community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: `1px solid ${post.color}33` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = post.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = `${post.color}33`;
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: `${post.color}20`, color: post.color }}>
                  {post.category}
                </span>
                <span style={{ color: '#888888', fontSize: '12px' }}>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Michroma', color: 'white' }}>
                {post.title}
              </h3>
              <p style={{ color: '#AAAAAA', marginBottom: '16px' }}>
                {post.excerpt}
              </p>
              <button
                style={{ color: post.color, fontWeight: 'bold', fontSize: '14px' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
