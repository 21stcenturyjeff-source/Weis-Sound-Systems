import { Button } from "@/components/ui/button";
import { Volume2, Mic, Radio, Zap } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function HomeContent() {
  return (
    <>
      <SEOHead 
        title="Professional Sound Systems Pittsburgh PA | Weis Audio Systems"
        description="Premium sound systems, professional mixers, and crystal-clear microphones for bands, concerts, and live events in Pittsburgh PA and surrounding regions. Expert audio equipment rental and services."
        path="/home"
      />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-visible pb-32"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
        
        {/* Stage Lighting Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#00ffff]/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#ff00ff]/15 via-transparent to-transparent blur-3xl" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
        
        <div className="container relative z-10 py-8 md:py-12">
          <div className="max-w-5xl">
            {/* Logo */}
            <div className="mb-12 md:mb-18">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663047521100/WvliBgwpAaGnYxTN.png"
                alt="Weis Audio Systems"
                className="w-full max-w-[730px] md:max-w-[730px] max-h-[400px] object-contain"
              />
            </div>
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-16 bg-gradient-to-r from-[#00ffff] to-transparent" />
              <p className="text-sm font-bold tracking-[0.3em] text-[#00ffff]">
                PROFESSIONAL STAGE AUDIO
              </p>
            </div>
            
            {/* Main Headline */}
            <h1 
              className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] mb-8 relative"
              data-text="AMPLIFY YOUR PERFORMANCE"
            >
              <span className="block" style={{ 
                textShadow: `
                  0 0 30px rgba(0, 255, 255, 0.4),
                  5px 5px 0 rgba(255, 0, 255, 0.3)
                `
              }}>
                AMPLIFY
              </span>
              <span className="block text-[#00ffff]" style={{
                textShadow: `
                  0 0 30px rgba(0, 255, 255, 0.6),
                  -5px 5px 0 rgba(255, 0, 255, 0.3)
                `
              }}>
                YOUR
              </span>
              <span className="block text-[#ff00ff]" style={{
                textShadow: `
                  0 0 30px rgba(255, 0, 255, 0.6),
                  5px -5px 0 rgba(0, 255, 255, 0.3)
                `
              }}>
                PERFORMANCE
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-2xl text-white/80">
              Professional sound systems, premium mixers, and crystal-clear microphones for bands, concerts, and live events in Pittsburgh PA and surrounding regions. Expert audio equipment rental and event services.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="h-14 px-8 text-lg font-bold tracking-wider bg-[#00ffff] text-black hover:bg-[#00ffff]/90 hover:scale-105 transition-all duration-200 w-48"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.5), 4px 4px 0 rgba(255, 0, 255, 0.4)"
                }}
              >
                GET A QUOTE
              </Button>
              <a href="/gallery" className="inline-block">
                <Button 
                  size="lg"
                  className="h-14 px-8 text-lg font-bold tracking-wider bg-[#ff00ff] text-white hover:bg-[#ff00ff]/90 hover:scale-105 transition-all duration-200 w-48"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 0, 255, 0.5), 4px 4px 0 rgba(0, 255, 255, 0.4)"
                  }}
                >
                  VIEW GALLERY
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Waveform Decoration - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-8 opacity-30">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-[#00ffff] to-[#ff00ff]"
              style={{
                height: `${Math.random() * 100 + 20}px`,
                animation: `pulse ${Math.random() * 3 + 1}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section - Angled Layout */}
      <section className="relative py-8 overflow-hidden">
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
                <h3 className="text-4xl mb-4 text-[#00ffff]">PROFESSIONAL PA SYSTEMS</h3>
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
                <h3 className="text-4xl mb-4 text-[#ff00ff]">YAMAHA MIXERS</h3>
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
                <h3 className="text-4xl mb-4 text-[#ffff00]">SHURE MICROPHONES</h3>
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
                <h3 className="text-4xl mb-4 text-[#00ffff]">POWER & AUDIO PROCESSING</h3>
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
        className="relative py-32 overflow-hidden"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-8vh",
          paddingTop: "12vh"
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
          
          <Button 
            size="lg"
            className="h-16 px-12 text-xl font-bold tracking-wider bg-[#ff00ff] text-white hover:bg-[#ff00ff]/90 hover:scale-105 transition-all duration-200"
            style={{
              boxShadow: "0 0 30px rgba(255, 0, 255, 0.6), 6px 6px 0 rgba(0, 255, 255, 0.4)"
            }}
          >
            CONTACT US NOW
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t-2 border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p className="text-3xl font-bold tracking-wider">WEIS AUDIO SYSTEMS</p>
              <p className="text-[3.6rem] font-bold text-[#00ffff] mt-2">724-448-6944</p>
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
                  <a href="/privacy-policy" className="text-sm text-white/60 hover:text-[#00ffff] transition-colors">Privacy Policy</a>
                  <a href="/terms-of-service" className="text-sm text-white/60 hover:text-[#ff00ff] transition-colors">Terms of Service</a>
                  <a href="/disclaimer" className="text-sm text-white/60 hover:text-[#ffff00] transition-colors">Disclaimer</a>
                </nav>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">© 2026 Weis Audio Systems. All rights reserved.</p>
              <p className="text-white/40 text-xs mt-2">Pittsburgh, PA - Serving Western PA and Surrounding Regions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
