import { Link } from "wouter";

interface LegalPageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function LegalPageHeader({ title, subtitle }: LegalPageHeaderProps) {
  const handleBackHome = () => {
    // Mark curtain as seen so it doesn't show again when returning home
    localStorage.setItem("weis-curtain-seen", "true");
  };

  return (
    <section className="relative py-20 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
      <div className="container relative z-10">
        <Link href="/" onClick={handleBackHome} className="inline-flex items-center gap-2 text-[#00ffff] hover:text-white transition-colors mb-6">
          <span>←</span>
          <span>Back to Home</span>
        </Link>
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] font-bold tracking-wider mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-xl text-white/60">{subtitle}</p>}
      </div>
    </section>
  );
}
