'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ShippingReturnsPage() {
  return (
    <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20" style={{ marginTop: '80px' }}>
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>Shipping & Returns</h1>
        
        <div style={{ color: '#CCCCCC', lineHeight: '1.8' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>Shipping Information</h2>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: '#39FF14' }}>Domestic Shipping</h3>
          <p className="mb-6">We offer free shipping on all orders within the United States. Delivery typically takes 5-7 business days. You will receive a tracking number via email once your order ships.</p>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: '#39FF14' }}>International Shipping</h3>
          <p className="mb-6">We currently ship to most countries worldwide. International shipping rates vary by location. International orders typically arrive within 10-20 business days.</p>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: '#39FF14' }}>Handling Time</h3>
          <p className="mb-6">Orders are typically processed and shipped within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.</p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>Return Policy</h2>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: '#39FF14' }}>30-Day Return Guarantee</h3>
          <p className="mb-6">We want you to be completely satisfied with your purchase. If you're not happy with your order, you have 30 days from the date of delivery to return it for a full refund or exchange.</p>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: '#39FF14' }}>Return Conditions</h3>
          <ul className="mb-6 ml-6 space-y-2">
            <li>• Items must be unused and in original condition</li>
            <li>• Packaging and documentation must be intact</li>
            <li>• Return shipping costs are the customer's responsibility (unless defective)</li>
            <li>• Refunds are processed within 5-7 business days after we receive your return</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3" style={{ color: '#39FF14' }}>Defective Items</h3>
          <p className="mb-6">If you receive a defective product, we will provide a full refund or replacement at no charge, including return shipping. Please contact us immediately with photos of the defect.</p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>Return Process</h2>
          <ol className="mb-6 ml-6 space-y-2">
            <li>1. Contact our customer service team at support@drivegizmo.com</li>
            <li>2. Obtain a return authorization number</li>
            <li>3. Ship the item back to us with proper packaging</li>
            <li>4. We'll inspect and process your return</li>
            <li>5. Receive your refund or replacement</li>
          </ol>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>Contact Us</h2>
          <p>For shipping and returns inquiries, please contact:</p>
          <p className="mt-4">Drive-Gizmo Customer Service<br/>1850 Eagle Street<br/>Rice, Illinois 62274<br/>United States<br/>+1 (228) 336-5322<br/>Email: support@drivegizmo.com</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
