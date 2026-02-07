/**
 * Design Philosophy: Brutalist Concert Poster Aesthetic
 * - Raw, bold typography with intentional asymmetry
 * - High-contrast black backgrounds with electric accents
 * - Diagonal cuts and angled sections for dynamic energy
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import CurtainIntro from "@/components/CurtainIntro";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const [showCurtain, setShowCurtain] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Only show curtain on the / route, not on /home
    const seen = localStorage.getItem("weis-curtain-seen");
    if (seen) {
      setShowCurtain(false);
    }
  }, []);

  const handleCurtainComplete = () => {
    localStorage.setItem("weis-curtain-seen", "true");
    setShowCurtain(false);
    // Redirect to /home after curtain completes
    setLocation("/home");
  };

  if (showCurtain) {
    return <CurtainIntro onComplete={handleCurtainComplete} />;
  }

  return <HomeContent />;
}
