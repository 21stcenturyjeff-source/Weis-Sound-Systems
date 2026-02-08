/**
 * Design Philosophy: Brutalist Concert Poster Aesthetic
 * - Dramatic curtain opening animation with theatrical weight
 * - Professional concert stage with speakers, lighting, and equipment
 * - Logo with black background appears as the main performer
 * 
 * Timing Sequence:
 * 1. Page loads, curtain closed (1 second pause)
 * 2. Curtain automatically opens slower (3 seconds)
 * 3. Logo stays on stage (2 seconds)
 * 4. Transition to main website
 * Total: 6 seconds
 */

import { useState, useEffect } from "react";

interface CurtainIntroProps {
  onComplete: () => void;
}

export default function CurtainIntro({ onComplete }: CurtainIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // Wait 1 second, then start opening the curtain
    const openTimer = setTimeout(() => {
      setIsOpening(true);
    }, 1000);

    // After curtain opens (3s) + pause (2s) = 5s more, then complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6000); // 1s pause + 3s open + 2s pause = 6s total

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Professional Concert Stage Background - Responsive */}
      <div className="absolute inset-0 bg-black">
        {/* Desktop/Landscape Background */}
        <div 
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/9pL43gJi26t4rDUjb9jcAm/sandbox/QT3mVU0o6tTzuQvM7JE7iP-img-1_1770488557000_na1fn_c3RhZ2UtbGFuZHNjYXBl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOXBMNDNnSmkyNnQ0ckRVamI5amNBbS9zYW5kYm94L1FUM21WVTBvNnRUenVRdk03SkU3aVAtaW1nLTFfMTc3MDQ4ODU1NzAwMF9uYTFmbl9jM1JoWjJVdGJHRnVaSE5qWVhCbC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sHx0~eFfadoTskjTY7xMGm0u2AWQGMwIbrbUTvCYcbUlBf~ocWGG5QxuHZAjNAVh7ci-Z0nAXt6QZFCMzHksECpRqLZCqGE1zbPs3SpJZmtJMPj67kKV9M40bAPokZHcaer-Pl0vjNtcFmyACGSC0A7lObxtUu0-T5KASEB0b2Xzf-qTt0OkQxKndpwHrNM9viuMuCyVnwnwdzQE8mWpSl9DJA-z6v8uQLpbc9qCKGO3gbsndOpA-BE5P5cnz3Juf767bI-~PByMc9PTJ9m1AsDX6SIeqL4Qvwl27TUnBsO0469o1m2o4Ah66w4KK7tEfTn5SKmbEp2bJlPWvHpCRw__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Mobile/Portrait Background */}
        <div 
          className="md:hidden absolute inset-0"
          style={{
            backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/9pL43gJi26t4rDUjb9jcAm/sandbox/QT3mVU0o6tTzuQvM7JE7iP-img-2_1770488557000_na1fn_c3RhZ2UtcG9ydHJhaXQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOXBMNDNnSmkyNnQ0ckRVamI5amNBbS9zYW5kYm94L1FUM21WVTBvNnRUenVRdk03SkU3aVAtaW1nLTJfMTc3MDQ4ODU1NzAwMF9uYTFmbl9jM1JoWjJVdGNHOXlkSEpoYVhRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VVJQZ3LZM~rsUuFeceko-P8iH0VowNANQ2umMiCmU-eTmvPGzb0I6ovV2rY4ajdtSe~tDQkRlSumEPb4huaF59zUYaEItZS3L4tGf0p0lhitsO9eq5t4DmOZ3UHl21UlTIh2eGHPfVXZd2x65jL1ASKizOqYTee5MQL3pCLLMaCYR76glTtr7JIJ1aSdj~8GwzuenUiF2~RgXYypovhc4vjjCJYq3cC9BpEOENAVSHMGiN24ZgElvP-ZMWOSLTOnomMR3OoPYI-OQ-qlONzCVFmBW6vjPcXpvspa-Enr9Jfzz9OZwkoGN21ZxeX9Nd2dVMWghCZqyg-zaJky-mkbrw__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Logo Container - Center Stage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            {/* Desktop Logo (Horizontal with Black Background) - 25% larger */}
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663047521100/towgOLpNNVnYWvbc.png"
              alt="Weis Audio Systems"
              className="hidden md:block w-full max-w-[1500px] mx-auto"
            />
            
            {/* Mobile Logo (Vertical with Black Background) - Full width */}
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663047521100/fZMNgXHqhuDgXqLM.png"
              alt="Weis Audio Systems"
              className="md:hidden w-screen mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 transition-transform duration-[3000ms] ${
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
        className={`absolute top-0 right-0 h-full w-1/2 transition-transform duration-[3000ms] ${
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
