'use client';

import React from "react"
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0F0F0F, rgba(15, 15, 15, 0.8))' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -mr-48" style={{ backgroundColor: 'rgba(57, 255, 20, 0.05)' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -ml-48" style={{ backgroundColor: 'rgba(255, 95, 31, 0.05)' }}></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Michroma' }}>
          <span style={{ color: '#39FF14' }}>Stay Connected</span>
          <span className="block" style={{ color: 'white' }}>with the Wild</span>
        </h2>

        <p className="text-lg mb-8" style={{ color: '#AAAAAA' }}>
          Get exclusive deals, new gear releases, and adventure tips delivered to your inbox. Join our community of modern explorers.
        </p>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-4" size={20} style={{ color: '#39FF14' }} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none transition"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#39FF14'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; }}
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 font-bold rounded-lg transition whitespace-nowrap"
              style={{ backgroundColor: '#FF5F1F', color: '#0F0F0F', boxShadow: '0 0 20px rgba(255, 95, 31, 0.6)' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#39FF14'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FF5F1F'; }}
            >
              {submitted ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </div>
        </form>

        <p className="text-sm mt-6" style={{ color: '#888888' }}>
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
