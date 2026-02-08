import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEOHead } from "./SEOHead";
import { Volume2, Radio, Mic, Zap } from "lucide-react";

export default function HomeContent() {
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    const curtainSeen = localStorage.getItem("weis-curtain-seen");
    if (!curtainSeen) {
      setShowCurtain(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title="Professional Sound Systems Pittsburgh PA | Weis Audio Systems"
        description="Premium sound systems, professional mixers, and crystal-clear microphones for bands, concerts, and live events in Pittsburgh PA and surrounding regions. Expert audio equipment rental and services."
        path="/home"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
        
        {/* Cyan neon stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff] to-[#00ffff]/0 shadow-[0_0_20px_#00ffff] pointer-events-none" />
        
        {/* Lighting Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#ff00ff]/5 via-transparent to-transparent blur-3xl" />
        
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-[clamp(3rem,12vw,8rem)] leading-[0.9] mb-6 font-bold">
            WEIS
            <br />
            <span className="text-[#00ffff]">AUDIO SYSTEMS</span>
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-[#ff00ff] to-transparent mx-auto mb-8" />
          
          {/* Description */}
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-2xl text-white/80">
            Professional sound systems, premium mixers, and crystal-clear microphones for bands, concerts, and live events in Pittsburgh PA and surrounding regions. Expert audio equipment rental and event services.
          </p>
          
          {/* VIEW GALLERY Button */}
          <Link href="/gallery">
            <a className="inline-block">
              <Button 
                size="lg"
                className="h-14 px-10 text-lg font-bold tracking-wider bg-[#ff00ff] text-white hover:bg-[#ff00ff]/90 hover:scale-105 transition-all duration-200 mb-8"
                style={{
                  boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 4px 4px 0 rgba(0, 255, 255, 0.3)"
                }}
              >
                VIEW GALLERY
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]" />
        {/* Cyan neon stripe with transparent fade */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff] to-[#00ffff]/0 shadow-[0_0_20px_#00ffff] pointer-events-none z-50" />
        
        <div className="container relative z-10 pt-6">
          <div className="mb-5">
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] mb-6">
              OUR
              <br />
              <span className="text-[#00ffff]">EQUIPMENT</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#ff00ff] to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sound Systems */}
            <div 
              className="group relative bg-card p-8 border-2 border-border hover:border-[#00ffff] transition-all duration-300 card-rotate-sound-systems"
              style={{
                boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className="absolute top-4 right-4 text-[#00ffff] opacity-20 group-hover:opacity-40 transition-opacity">
                <Volume2 size={80} strokeWidth={1} />
              </div>
              <div className="relative">
                <h3 className="text-4xl mb-4 text-[#00ffff] whitespace-nowrap">PROFESSIONAL PA SYSTEMS</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  Professional PA systems, line arrays, and subwoofers for Pittsburgh PA events. Designed to deliver crystal-clear audio for venues of all sizes. From intimate clubs to massive outdoor festivals in Western PA and surrounding regions.
                </p>
              </div>
            </div>

            {/* Mixers */}
            <div 
              className="group relative bg-card p-8 border-2 border-border hover:border-[#ff00ff] transition-all duration-300 md:mt-12 card-rotate-mixers"
              style={{
                boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className="absolute top-4 right-4 text-[#ff00ff] opacity-20 group-hover:opacity-40 transition-opacity">
                <Radio size={80} strokeWidth={1} />
              </div>
              <div className="relative">
                <h3 className="text-4xl mb-4 text-[#ff00ff] whitespace-nowrap">YAMAHA AND MIDAS MIXERS</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  Digital and analog mixing consoles with advanced routing, effects processing, and multi-channel capabilities. Professional audio mixing equipment for Pittsburgh PA concerts and live events. Complete control over every aspect of your sound.
                </p>
              </div>
            </div>

            {/* Microphones */}
            <div 
              className="group relative bg-card p-8 border-2 border-border hover:border-[#ffff00] transition-all duration-300 card-rotate-microphones"
              style={{
                boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className="absolute top-4 right-4 text-[#ffff00] opacity-20 group-hover:opacity-40 transition-opacity">
                <Mic size={80} strokeWidth={1} />
              </div>
              <div className="relative">
                <h3 className="text-4xl mb-4 text-[#ffff00] whitespace-nowrap">SHURE MICROPHONES</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  Premium vocal and instrument microphones, wireless systems, and monitoring solutions for Pittsburgh PA events. Capture every nuance with professional-grade clarity and reliability.
                </p>
              </div>
            </div>

            {/* Power & Processing */}
            <div 
              className="group relative bg-card p-8 border-2 border-border hover:border-[#00ffff] transition-all duration-300 md:mt-12 card-rotate-power"
              style={{
                boxShadow: "8px 8px 0 rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className="absolute top-4 right-4 text-[#00ffff] opacity-20 group-hover:opacity-40 transition-opacity">
                <Zap size={80} strokeWidth={1} />
              </div>
              <div className="relative">
                <h3 className="text-4xl mb-4 text-[#00ffff] whitespace-nowrap">POWER & AUDIO PROCESSING</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  High-performance amplifiers, signal processors, and power distribution systems for professional events. Clean, reliable power delivery for flawless performance every time in Pittsburgh PA and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Diagonal Cut */}
      <section 
        className="relative py-32 overflow-hidden md:pb-12"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-8vh",
          paddingTop: "12vh",
          paddingBottom: "0"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0a0a0a] to-[#1a1a2e]" />
        
        {/* Lighting Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#00ffff]/10 via-transparent to-transparent blur-3xl" />
        
        <div className="container relative z-10 text-center">
          <h2 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] mb-8">
            READY TO
            <br />
            <span className="text-[#00ffff]">ROCK?</span>
          </h2>
          
          <p className="text-2xl font-medium mb-12 max-w-2xl mx-auto text-white/80">
            Get in touch for equipment rentals, technical support, or custom audio solutions for your next event.
          </p>
          
          <Link href="/contact">
            <a>
              <Button 
                size="lg"
                className="h-16 px-12 text-xl font-bold tracking-wider bg-[#ff00ff] text-white hover:bg-[#ff00ff]/90 hover:scale-105 transition-all duration-200"
                style={{
                  boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 6px 6px 0 rgba(0, 255, 255, 0.4)"
                }}
              >
                CONTACT US NOW
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t-2 border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-3xl font-bold tracking-wider">WEIS AUDIO SYSTEMS</p>
              <p className="text-[3.6rem] font-bold text-[#00ffff] mt-2 whitespace-nowrap">724-448-6944</p>
              <p className="text-sm text-white/60 mt-2">Professional Stage Audio Solutions</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <p className="text-sm font-bold text-white/80 mb-2">GALLERY</p>
                <nav className="flex flex-col gap-1">
                  <a href="/gallery" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">Stage Photos</a>
                </nav>
              </div>
              <div>
                <p className="text-sm font-bold text-white/80 mb-2">LEGAL</p>
                <nav className="flex flex-col gap-1">
                  <a href="/privacy" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">Terms of Service</a>
                  <a href="/disclaimer" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">Disclaimer</a>
                </nav>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/60">© 2026 Weis Audio Systems. All rights reserved.</p>
                <p className="text-xs text-white/60 mt-2">Pittsburgh, PA - Serving Western PA and Surrounding Regions</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
