'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import GearBoxes from '@/components/gear-boxes';
import FeaturedProducts from '@/components/featured-products';
import StatsSection from '@/components/stats-section';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import BlogPreview from '@/components/blog-preview';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';
import CookieConsent from '@/components/cookie-consent';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF' }}>
      <Header />
      <Hero />
      <GearBoxes />
      <FeaturedProducts />
      <StatsSection />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <Footer />
      <CookieConsent />
    </main>
  );
}
