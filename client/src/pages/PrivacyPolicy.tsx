export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
        <div className="container relative z-10">
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-bold tracking-wider mb-4">
            PRIVACY
            <br />
            <span className="text-[#00ffff]">POLICY</span>
          </h1>
          <p className="text-xl text-white/60">Last Updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]" />
        <div className="container relative z-10 max-w-3xl">
          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Introduction</h2>
              <p>
                Weis Sound Systems ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, weissoundsystems.com and weissound.systems (the "Site").
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Information We Collect</h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide through inquiry forms or direct communication.</li>
                <li><strong>Device Information:</strong> Browser type, IP address, operating system, and other technical information about your device.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and other browsing behavior.</li>
                <li><strong>Location Data:</strong> General geographic information based on IP address (not precise location without consent).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To respond to your inquiries and provide customer service</li>
                <li>To send you promotional materials and updates (with your consent)</li>
                <li>To improve and optimize our website and services</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small files stored on your device that help us remember your preferences and track your activity. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our Site.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights and safety.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10">
                <p><strong>Weis Sound Systems</strong></p>
                <p>Phone: 724-448-6944</p>
                <p>Email: info@weissoundsystems.com</p>
                <p>Service Area: Pittsburgh, PA and surrounding regions</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00ffff] mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date at the top of this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
