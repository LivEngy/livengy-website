const domains = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2Z"/>
        <path d="M10 8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2Z"/>
        <path d="M5 12h14"/>
      </svg>
    ),
    title: "Exercise",
    description: "Strength, cardio, zone 2 training and mobility protocols calibrated to your biological age.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 11h.01"/>
        <path d="M11 15h.01"/>
        <path d="M16 16c1-1.3 1.6-2.7 1.8-4.3.2-1.5-.1-3-.9-4.3C15.1 5.1 12.6 4 10 4c-4.4 0-8 3.6-8 8s3.6 8 8 8c1.4 0 2.8-.4 4-1"/>
        <path d="M22 12c0 1.1-.4 2.1-1 3l-1.5 2"/>
      </svg>
    ),
    title: "Diet",
    description: "Nutrient timing, macros, and anti-inflammatory nutrition plans based on your metabolic markers.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v2"/>
        <circle cx="18" cy="16" r="4"/>
        <path d="M18 14v4"/>
        <path d="M16 16h4"/>
      </svg>
    ),
    title: "Supplements",
    description: "Evidence-based supplement stacks — NMN, resveratrol, omega-3s and more, dosed for your profile.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"/>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
        <path d="M2 17h20"/>
        <path d="M6 8v9"/>
      </svg>
    ),
    title: "Recovery",
    description: "Sleep architecture optimization, HRV-guided recovery, and circadian rhythm alignment.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4"/>
        <path d="M12 18v4"/>
        <path d="m4.93 4.93 2.83 2.83"/>
        <path d="m16.24 16.24 2.83 2.83"/>
        <path d="M2 12h4"/>
        <path d="M18 12h4"/>
        <path d="m4.93 19.07 2.83-2.83"/>
        <path d="m16.24 4.93 2.83-2.83"/>
      </svg>
    ),
    title: "Biohacking",
    description: "Hyperbaric oxygen, infrared therapy, cold plunge and sauna — scheduled and personalized.",
  },
];

export function ProtocolDomains() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase text-center mb-3">The Five Pillars</p>
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 tracking-tight">
          Your Complete Longevity Protocol
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Every protocol is tailored to your unique biology across five essential domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 hover:glow-border"
            >
              <div className="text-primary mb-4 group-hover:text-glow transition-all">{domain.icon}</div>
              <h3 className="text-lg font-medium mb-2 tracking-wide">{domain.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
