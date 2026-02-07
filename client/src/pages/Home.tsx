/**
 * Design Philosophy: Brutalist Concert Poster Aesthetic
 * - Raw, bold typography with intentional asymmetry
 * - High-contrast black backgrounds with electric accents
 * - Diagonal cuts and angled sections for dynamic energy
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import CurtainIntro from "@/components/CurtainIntro";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const [showCurtain, setShowCurtain] = useState(true);
  const [, setLocation] = useLocation();
  const { user, loading } = useAuth();

  // Always show curtain on / route - no localStorage check
  // useEffect not needed since showCurtain starts as true

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
