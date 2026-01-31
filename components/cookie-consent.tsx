'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookieConsent='));

    if (!consentCookie) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = 'cookieConsent=accepted; path=/; max-age=31536000';
    setShowConsent(false);
  };

  const handleReject = () => {
    document.cookie = 'cookieConsent=rejected; path=/; max-age=31536000';
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t"
      style={{
        backgroundColor: 'rgba(15, 15, 15, 0.95)',
        borderColor: '#2D2D2D',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm" style={{ color: '#CCCCCC' }}>
            We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
            <Link href="/privacy-policy" style={{ color: '#39FF14', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>{' '}
            to learn more.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2 rounded-lg font-semibold transition border"
            style={{
              borderColor: '#666666',
              color: '#CCCCCC',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 rounded-lg font-semibold transition"
            style={{
              backgroundColor: '#FF5F1F',
              color: '#0F0F0F',
              boxShadow: '0 0 15px rgba(255, 95, 31, 0.6)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#39FF14';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF5F1F';
            }}
          >
            Accept All
          </button>
        </div>

        <button
          onClick={() => setShowConsent(false)}
          className="absolute top-4 right-4 sm:static"
          style={{ color: '#AAAAAA' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FF5F1F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#AAAAAA';
          }}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
