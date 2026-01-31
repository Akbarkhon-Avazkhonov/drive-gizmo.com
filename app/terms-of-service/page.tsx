'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';

export default function TermsOfServicePage() {
  return (
    <main style={{ backgroundColor: '#0F0F0F', color: 'white', minHeight: '100vh' }}>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-20" style={{ marginTop: '80px' }}>
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Michroma', color: '#FF5F1F' }}>Terms of Service</h1>
        
        <div style={{ color: '#CCCCCC', lineHeight: '1.8' }}>
          <p className="mb-6">Last updated: January 2026</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>1. Agreement to Terms</h2>
          <p className="mb-6">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>2. Use License</h2>
          <p className="mb-6">Permission is granted to temporarily download one copy of the materials (information or software) on Drive-Gizmo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="mb-6 ml-6 space-y-2">
            <li>• Modify or copy the materials</li>
            <li>• Use the materials for any commercial purpose or for any public display</li>
            <li>• Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>• Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>3. Disclaimer</h2>
          <p className="mb-6">The materials on Drive-Gizmo's website are provided on an 'as is' basis. Drive-Gizmo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>4. Limitations</h2>
          <p className="mb-6">In no event shall Drive-Gizmo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Drive-Gizmo's website.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>5. Accuracy of Materials</h2>
          <p className="mb-6">The materials appearing on Drive-Gizmo's website could include technical, typographical, or photographic errors. Drive-Gizmo does not warrant that any of the materials on its website are accurate, complete, or current.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>6. Links</h2>
          <p className="mb-6">Drive-Gizmo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Drive-Gizmo of the site. Use of any such linked website is at the user's own risk.</p>
          
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#39FF14', fontFamily: 'Michroma' }}>7. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p className="mt-4">Drive-Gizmo<br/>1850 Eagle Street<br/>Rice, Illinois 62274<br/>United States<br/>+1 (228) 336-5322</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
