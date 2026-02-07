import LegalPageHeader from "@/components/LegalPageHeader";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LegalPageHeader title="TERMS OF SERVICE" subtitle="Last Updated: February 2026" />

      {/* Content */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]" />
        <div className="container relative z-10 max-w-3xl">
          <div className="space-y-8 text-lg text-white/80 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Weis Sound Systems' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Disclaimer</h2>
              <p className="mb-4">
                The materials on Weis Sound Systems' website are provided on an 'as is' basis. Weis Sound Systems makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Weis Sound Systems does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Limitations</h2>
              <p>
                In no event shall Weis Sound Systems or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Weis Sound Systems' website, even if Weis Sound Systems or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Accuracy of Materials</h2>
              <p>
                The materials appearing on Weis Sound Systems' website could include technical, typographical, or photographic errors. Weis Sound Systems does not warrant that any of the materials on its website are accurate, complete, or current. Weis Sound Systems may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Links</h2>
              <p>
                Weis Sound Systems has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Weis Sound Systems of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Modifications</h2>
              <p>
                Weis Sound Systems may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10">
                <p><strong>Weis Sound Systems</strong></p>
                <p>Phone: 724-448-6944</p>
                <p>Email: info@weissoundsystems.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
