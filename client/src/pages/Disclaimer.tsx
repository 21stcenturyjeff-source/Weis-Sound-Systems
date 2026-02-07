import LegalPageHeader from "@/components/LegalPageHeader";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegalPageHeader title="DISCLAIMER" subtitle="Last Updated: February 2026" />

      {/* Content */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]" />
        <div className="container relative z-10 max-w-3xl">
          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">General Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Service Availability</h2>
              <p>
                Weis Sound Systems provides professional audio equipment and sound system services for events, concerts, and live performances in the Pittsburgh, Pennsylvania area and surrounding regions. Service availability, pricing, and specific offerings are subject to change without notice. We recommend contacting us directly for current availability and pricing information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Equipment Specifications</h2>
              <p>
                All equipment specifications, capabilities, and descriptions provided on this website are subject to change. We recommend verifying all specifications directly with our team before making decisions based on this information. Equipment performance may vary based on venue conditions, setup, and other environmental factors.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">No Professional Advice</h2>
              <p>
                The information on this website should not be construed as professional audio engineering or event planning advice. While we provide professional sound services, any information on this site is general in nature. For specific recommendations tailored to your event, please contact our team directly.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Third-Party Links</h2>
              <p>
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Weis Sound Systems, its owners, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Service Terms</h2>
              <p className="mb-4">
                Specific terms, conditions, and limitations apply to our sound system rental and event services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Equipment rental terms are subject to individual service agreements</li>
                <li>Damage, loss, or theft of equipment may result in additional charges</li>
                <li>Setup and breakdown times are included in service agreements</li>
                <li>Cancellation policies apply based on notice provided</li>
                <li>Services are subject to availability and venue requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Safety and Compliance</h2>
              <p>
                While we maintain our equipment to professional standards, all event venues must comply with local safety codes and regulations. Customers are responsible for ensuring their venues meet all applicable safety requirements. We recommend consulting with venue management regarding electrical capacity, structural considerations, and safety protocols.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Weis Sound Systems, its owners, employees, and agents from any claims, damages, losses, or expenses arising from your use of this website or our services, or from any violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Service Area</h2>
              <p>
                Weis Sound Systems primarily serves the Pittsburgh, Pennsylvania area and surrounding regions within approximately 100 miles. Services outside this area may be available upon request with additional considerations for travel and logistics.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ffff00] mb-4">Contact Us</h2>
              <p>
                For questions about this disclaimer or our services, please contact us:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10">
                <p><strong>Weis Sound Systems</strong></p>
                <p>Phone: 724-448-6944</p>
                <p>Email: info@weissoundsystems.com</p>
                <p>Service Area: Pittsburgh, PA and surrounding regions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
