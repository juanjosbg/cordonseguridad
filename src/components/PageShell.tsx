import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
      <div
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <div className="absolute inset-y-0 left-0 w-2 bg-brand-red" />
      <div className="container-page relative z-10 text-white">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
