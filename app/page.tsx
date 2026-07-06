import type { Metadata } from "next";
import { BriefCard } from "./_components/BriefCard";
import { StartProjectBar } from "./_components/StartProjectBar";
import { FramerBadges } from "./_components/FramerBadges";

export const metadata: Metadata = {
  title: "Aureum & Co — Creative studio",
  description:
    "We break down big ideas into simple, powerful, effective outcomes.",
};

// Red seam connector between two stacked panels (the blueprint-style rail).
function Seam({ height }: { height: string }) {
  return (
    <div className={`relative ${height}`}>
      <span className="absolute left-0 top-0 h-full w-px bg-[#e01228]" />
      <span className="absolute right-0 top-0 h-full w-px bg-[#e01228]" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-16"
      style={{
        // Approximation of the red motion-blur hero photo.
        // Swap this for a real asset: backgroundImage: "url('/hero.jpg')" with cover/center.
        backgroundColor: "#0a0304",
        backgroundImage: [
          "radial-gradient(38% 55% at 46% 55%, rgba(255,120,70,0.22), transparent 70%)",
          "radial-gradient(55% 75% at 66% 44%, rgba(224,30,45,0.45), transparent 62%)",
          "radial-gradient(85% 80% at 90% 32%, rgba(190,24,38,0.55), transparent 58%)",
          "radial-gradient(70% 95% at 18% 52%, rgba(45,6,10,0.92), transparent 62%)",
          "radial-gradient(80% 80% at 74% 96%, rgba(0,0,0,0.9), transparent 55%)",
          "linear-gradient(115deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 38%)",
        ].join(", "),
      }}
    >
      {/* The AUREUM & CO header is global (see components/layout/SiteHeader). */}
      <div className="relative z-10 w-full max-w-160">
        <BriefCard />
        <Seam height="h-6" />
        <StartProjectBar />
      </div>

      <FramerBadges />
    </section>
  );
}
