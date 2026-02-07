/**
 * Design Philosophy: Brutalist Concert Poster Aesthetic
 * - Dramatic curtain opening animation with theatrical weight
 * - Deep black backgrounds with electric accents
 * - Bold typography and raw energy
 */

import { useState } from "react";

interface CurtainIntroProps {
  onComplete: () => void;
}

export default function CurtainIntro({ onComplete }: CurtainIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    // Wait for animation to complete before calling onComplete
    setTimeout(onComplete, 2000);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 cursor-pointer overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      {/* Stage Background - Visible behind curtains */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
        {/* Stage Lighting Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00ffff]/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#ff00ff]/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#ffff00]/10 via-transparent to-transparent blur-3xl" />
        
        {/* Logo Container - Center Stage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            {/* Main Logo Text */}
            <h1 
              className="text-[clamp(3rem,10vw,10rem)] leading-[0.9] tracking-tight"
              style={{
                textShadow: `
                  0 0 20px rgba(0, 255, 255, 0.5),
                  0 0 40px rgba(0, 255, 255, 0.3),
                  0 0 60px rgba(0, 255, 255, 0.2),
                  4px 4px 0 rgba(255, 0, 255, 0.3)
                `
              }}
            >
              WEIS<br />
              SOUND<br />
              SYSTEMS
            </h1>
            
            {/* Tagline */}
            <p className="text-[clamp(1rem,2vw,1.5rem)] font-medium tracking-widest text-[#00ffff] opacity-80">
              PROFESSIONAL STAGE AUDIO
            </p>
            
            {/* Waveform Decoration */}
            <div className="flex justify-center gap-1 mt-8">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[#00ffff] to-[#ff00ff]"
                  style={{
                    height: `${Math.random() * 60 + 20}px`,
                    animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Click to Enter Prompt */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xl font-medium tracking-widest animate-pulse text-white/80">
            CLICK TO ENTER
          </p>
        </div>
      </div>

      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-[2000ms] ${
          isOpening ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Velvet Texture */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a0e0e] via-[#6b1414] to-[#4a0e0e]">
          {/* Fabric Folds */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-[8.33%] bg-gradient-to-r from-black/30 via-transparent to-black/30"
                style={{ left: `${i * 8.33}%` }}
              />
            ))}
          </div>
          
          {/* Curtain Highlights */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        </div>
        
        {/* Right Edge Shadow */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 h-full w-1/2 transition-transform duration-[2000ms] ${
          isOpening ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Velvet Texture */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#4a0e0e] via-[#6b1414] to-[#4a0e0e]">
          {/* Fabric Folds */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-[8.33%] bg-gradient-to-r from-black/30 via-transparent to-black/30"
                style={{ left: `${i * 8.33}%` }}
              />
            ))}
          </div>
          
          {/* Curtain Highlights */}
          <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-transparent" />
        </div>
        
        {/* Left Edge Shadow */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Center Seam */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 bg-black/80 transition-opacity duration-1000 ${
          isOpening ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
