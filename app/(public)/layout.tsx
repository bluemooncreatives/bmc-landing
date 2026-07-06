import type { ReactNode } from "react";
import { Footer } from "./_components/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top padding clears the fixed global SiteHeader. */}
      <main className="flex-1 pt-32">{children}</main>
      <Footer />
    </div>
  );
}
