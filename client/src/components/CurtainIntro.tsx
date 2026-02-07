/**
 * Design Philosophy: Brutalist Concert Poster Aesthetic
 * - Dramatic curtain opening animation with theatrical weight
 * - Professional concert stage with speakers, lighting, and equipment
 * - Logo appears as the main performer on pure black center stage
 * 
 * Timing Sequence:
 * 1. Page loads, curtain closed (2 seconds pause)
 * 2. Curtain automatically opens (2 seconds)
 * 3. Logo stays on stage (5 seconds)
 * 4. Transition to main website
 * Total: 9 seconds
 */

import { useState, useEffect } from "react";

interface CurtainIntroProps {
  onComplete: () => void;
}

export default function CurtainIntro({ onComplete }: CurtainIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Wait 2 seconds, then start opening the curtain
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 2000);

    // After curtain opens (2s) + hold logo (5s) = 7s more, then complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 9000); // 2s pause + 2s open + 5s hold = 9s total

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Professional Concert Stage Background */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/9pL43gJi26t4rDUjb9jcAm/sandbox/z7UrqC9jCyq2QtEhIBZhDI-img-1_1770487021000_na1fn_Y29uY2VydC1zdGFnZS1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOXBMNDNnSmkyNnQ0ckRVamI5amNBbS9zYW5kYm94L3o3VXJxQzlqQ3lxMlF0RWhJQlpoREktaW1nLTFfMTc3MDQ4NzAyMTAwMF9uYTFmbl9ZMjl1WTJWeWRDMXpkR0ZuWlMxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=h8R1HCna5bxDhXN3Nhezc~~rgepdR5LHw35yVtrVtfV~5ZXhbB4ujEKfknl4eO38U97WhGefNtxuwUeqP8Zibm0ubMMSeftgoSpEywj4Tdiz05jikjBxCO~-ZFfFkFpsOrjeHuha7kfskEKKMURIiiJWWIWNLh8JjbSoSe2h~cn18NhUMFNPNZhuqHtWNRwwxNhuM6i86VgmdZAEGnssvoWlGRAiRBQ3lYo32RFVjCohWqlaSiXXiMW2eNbC4lUFNwoQwiVuv5YgcXiEJvwbtRMKtNqyJqMUdnVsKc9YMzRJ80cOTw29wQImwljUJKKcxhHFOS5ZsF59UVk76aj4-A__)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Logo Container - Center Stage (Pure Black Background) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            {/* Responsive Logo - Horizontal for desktop, Vertical for mobile */}
            <div className="relative">
              {/* Desktop Logo (Horizontal) */}
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663047521100/aYzqzbNGAQIVzewB.png"
                alt="Weis Audio Systems"
                className="hidden md:block w-full max-w-[800px] mx-auto"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 80px rgba(255, 0, 255, 0.4))'
                }}
              />
              
              {/* Mobile Logo (Vertical) */}
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663047521100/ZeGIWRMrJmYslPHT.png"
                alt="Weis Audio Systems"
                className="md:hidden w-full max-w-[400px] mx-auto"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(0, 255, 255, 0.5)) drop-shadow(0 0 80px rgba(255, 0, 255, 0.4))'
                }}
              />
            </div>
          </div>
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
