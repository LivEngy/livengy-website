import heroBg from "@/assets/hero-bg.jpg";

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo mark - SVG inline */}
        <div className="mb-8 flex justify-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
            <path d="M16 48C16 48 16 20 16 16C16 12 20 8 24 8C28 8 30 12 32 16C34 20 36 40 38 44C40 48 42 52 46 52C50 52 52 48 52 44C52 40 52 16 52 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M12 48C12 48 12 20 12 16C12 12 16 8 20 8C24 8 26 12 28 16C30 20 32 40 34 44C36 48 38 52 42 52C46 52 48 48 48 44C48 40 48 16 48 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4"/>
          </svg>
        </div>

        {/* Brand name */}
        <h1 className="text-5xl md:text-7xl font-extralight tracking-[0.35em] mb-4 gradient-text">
          LIVENGY
        </h1>

        <p className="text-muted-foreground text-sm md:text-base tracking-[0.2em] uppercase mb-8">
          Precision Longevity Protocols
        </p>

        <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
          Your biomarkers. Your lifestyle. Your protocol.<br />
          AI-driven. Research-backed. Reverse aging.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 bg-primary/5 glow-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">App Coming Soon</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="animate-bounce">
          <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
