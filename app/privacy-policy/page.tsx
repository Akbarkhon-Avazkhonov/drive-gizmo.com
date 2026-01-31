'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20" style={{ marginTop: '80px' }}>
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>Privacy Policy</h1>
        
        <div style={{ color: '#CCCCCC', lineHeight: '1.8' }}>
          <p className="mb-6">Last updated: January 2026</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>1. Introduction</h2>
          <p className="mb-6">Drive-Gizmo ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>2. Information We Collect</h2>
          <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="mb-6 ml-6 space-y-2">
            <li>• Personal identification information (name, email address, phone number, etc.)</li>
            <li>• Billing and shipping information</li>
            <li>• Payment information</li>
            <li>• Device information and cookies</li>
            <li>• Usage data and browsing information</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>3. Use of Your Information</h2>
          <p className="mb-6">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="mb-6 ml-6 space-y-2">
            <li>• Process your transactions and send related information</li>
            <li>• Email you regarding your account or order</li>
            <li>• Improve our website and customer service</li>
            <li>• Enforce our terms, conditions, and policies</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>4. Disclosure of Your Information</h2>
          <p className="mb-6">We may share your information with third parties to help us use your information, as described above. We may also disclose your information when required by law or to protect our rights.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>5. Security of Your Information</h2>
          <p className="mb-6">We use administrative, technical, and physical security measures to protect your personal information. However, the security of your information also depends on your cooperation.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>6. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p className="mt-4">Drive-Gizmo<br/>1850 Eagle Street<br/>Rice, Illinois 62274<br/>United States<br/>+1 (228) 336-5322</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
