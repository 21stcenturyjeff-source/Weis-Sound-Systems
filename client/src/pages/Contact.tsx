import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const CONTACT_EMAIL = "Markweis@protonmail.com";

// Format phone number as (123) 456-7890
function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [venue, setVenue] = useState("");
  const [bandName, setBandName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subject || !name || !email || !phone || !message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          name,
          email,
          phone,
          eventDate: eventDate || undefined,
          venue: venue || undefined,
          bandName: bandName || undefined,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      setSubject("");
      setName("");
      setEmail("");
      setPhone("");
      setEventDate("");
      setVenue("");
      setBandName("");
      setMessage("");
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff] to-[#00ffff]/0 shadow-[0_0_20px_#00ffff] pointer-events-none" />

        <div className="container relative z-10">
          <Link href="/home">
            <a className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">← Back</a>
          </Link>

          <h1 className="text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] mb-4 font-bold">
            GET IN
            <br />
            <span className="text-[#ff00ff]">TOUCH</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl">
            Have questions about our equipment rental services? Need a custom audio solution for your event? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-gray-900 p-8 rounded border border-gray-800 hover:border-[#00ffff] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="text-[#00ffff]" size={32} />
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#00ffff] hover:text-[#00ffff]/80 break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-900 p-8 rounded border border-gray-800 hover:border-[#ff00ff] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="text-[#ff00ff]" size={32} />
                <h3 className="text-xl font-bold">Phone</h3>
              </div>
              <a
                href="tel:724-448-6944"
                className="text-[#ff00ff] hover:text-[#ff00ff]/80 text-2xl font-bold"
              >
                724-448-6944
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-900 p-8 rounded border border-gray-800 hover:border-[#ffff00] transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-[#ffff00]" size={32} />
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <p className="text-white/70">
                Pittsburgh, PA
                <br />
                Serving Western PA and Surrounding Regions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0a0a0a] to-[#1a1a2e]" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff00ff]/0 via-[#ff00ff] to-[#ff00ff]/0 shadow-[0_0_20px_#ff00ff] pointer-events-none" />

        <div className="container relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Send us a <span className="text-[#ff00ff]">Message</span>
          </h2>

          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded border border-gray-800">
            {/* Subject */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Subject *</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Equipment rental inquiry, technical support, etc."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff]"
                required
              />
            </div>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff]"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff]"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Phone *</label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(123) 456-7890"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff]"
                required
              />
            </div>

            {/* Date of Event */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Date of Event</label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff] [color-scheme:dark]"
              />
            </div>

            {/* Venue For Event */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Venue For Event</label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Venue name and location"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff]"
              />
            </div>

            {/* Name Of Band */}
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Name Of Band (Optional)</label>
              <input
                type="text"
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
                placeholder="Band or artist name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff]"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-bold mb-2">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your event and audio needs..."
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffff] resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={sending}
              className="w-full h-14 text-lg font-bold tracking-wider bg-[#ff00ff] text-white hover:bg-[#ff00ff]/90 hover:scale-105 transition-all duration-200 disabled:opacity-50"
              style={{
                boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 4px 4px 0 rgba(0, 255, 255, 0.3)",
              }}
            >
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t-2 border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-3xl font-bold tracking-wider">WEIS AUDIO SYSTEMS</p>
              <p className="text-[3.6rem] font-bold text-[#00ffff] mt-2 whitespace-nowrap">
                724-448-6944
              </p>
              <p className="text-sm text-white/60 mt-2">Professional Stage Audio Solutions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <p className="text-sm font-bold text-white/80 mb-2">GALLERY</p>
                <nav className="flex flex-col gap-1">
                  <a href="/gallery" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">
                    Stage Photos
                  </a>
                </nav>
              </div>
              <div>
                <p className="text-sm font-bold text-white/80 mb-2">LEGAL</p>
                <nav className="flex flex-col gap-1">
                  <a href="/privacy" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">
                    Terms of Service
                  </a>
                  <a href="/disclaimer" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">
                    Disclaimer
                  </a>
                </nav>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/60">© 2026 Weis Audio Systems. All rights reserved.</p>
                <p className="text-xs text-white/60 mt-2">
                  Pittsburgh, PA - Serving Western PA and Surrounding Regions
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
