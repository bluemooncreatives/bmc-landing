import type { Metadata } from "next";
import { BriefCard } from "./_components/BriefCard";
import { StartProjectBar } from "./_components/StartProjectBar";

export const metadata: Metadata = {
  title: "Blue Moon Creatives — Creative studio",
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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0304] px-6 py-16">
      {/* Video background; bg color above acts as the fallback while it loads. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover blur-sm"
      >
        <source src="/0_Abstract_Ink_3840x2160.mp4" type="video/mp4" />
      </video>
      {/* Soft dark scrim to keep the floating cards legible over the video */}
      <div aria-hidden className="absolute inset-0 bg-black/25" />

      {/* The Blue Moon Creatives header is global (see components/layout/SiteHeader). */}
      <div className="relative z-10 w-full max-w-160">
        <BriefCard />
        <Seam height="h-6" />
        <StartProjectBar />
      </div>
    </section>
  );
}
