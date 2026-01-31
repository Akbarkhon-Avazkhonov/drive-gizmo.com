'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: '#0F0F0F' }}>
      <Header />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <div className="mt-8">
          <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>
            Contact Us
          </h1>
          <p className="text-xl mb-12" style={{ color: '#AAAAAA' }}>
            Have questions? We'd love to hear from you. Reach out to our team anytime.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF5F1F15', color: '#FF5F1F' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p style={{ color: '#CCCCCC' }}>support@drive-gizmo.com</p>
                  <p style={{ color: '#CCCCCC' }}>Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#39FF1415', color: '#39FF14' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p style={{ color: '#CCCCCC' }}>+1 (228) 336-5322</p>
                  <p style={{ color: '#CCCCCC' }}>Mon-Fri 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1A2A6C15', color: '#1A2A6C' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office</h3>
                  <p style={{ color: '#CCCCCC' }}>1850 Eagle Street</p>
                  <p style={{ color: '#CCCCCC' }}>Rice, Illinois 62274</p>
                  <p style={{ color: '#CCCCCC' }}>United States</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none transition"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none transition"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none transition"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 font-bold rounded-lg transition"
                style={{ backgroundColor: '#FF5F1F', color: '#0F0F0F' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#39FF14'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FF5F1F'; }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
