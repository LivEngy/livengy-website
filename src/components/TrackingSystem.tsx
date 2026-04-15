export function TrackingSystem() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
          <path d="M7 8h2m2 0h2"/>
          <path d="M7 12h8"/>
        </svg>
      ),
      title: "Wearable Sync",
      description: "Connect Apple Watch, WHOOP, Oura, Garmin and more. All your biometric data flows in automatically.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      ),
      title: "Snap-to-Track Meals",
      description: "Photograph your plate. Our AI identifies every ingredient and breaks down macros, micros, and anti-nutrients in seconds.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10"/>
          <path d="M18 20V4"/>
          <path d="M6 20v-4"/>
        </svg>
      ),
      title: "Unified Dashboard",
      description: "Sleep, HRV, glucose, workouts, supplements, treatments — everything in one beautifully intuitive view.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
        </svg>
      ),
      title: "Adaptive Protocol",
      description: "Your data continuously refines your protocol. As your biology evolves, your plan evolves with it — in real time.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase text-center mb-3">Continuous Optimization</p>
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 tracking-tight">
          Track Everything. Adapt Automatically.
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Your protocol is only the beginning. A unified tracking system connects your wearables, meals, and daily actions — then feeds it all back to refine your plan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-11 h-11 rounded-lg border border-border bg-card/50 flex items-center justify-center text-primary group-hover:glow-border transition-all">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-base font-medium mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
