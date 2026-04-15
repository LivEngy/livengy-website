export function ScienceCredibility() {
  const stats = [
    { value: "12,000+", label: "Research Papers Curated" },
    { value: "PhDs", label: "In Longevity & Molecular Biology" },
    { value: "MIT · Stanford · Harvard", label: "Team Backgrounds" },
    { value: "Continuous", label: "Reinforcement Learning from Outcomes" },
  ];

  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase text-center mb-3">Built on Science</p>
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4 tracking-tight">
          Engineered by Longevity Researchers
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Our team of PhDs and longevity scientists from top research institutions curate and distill thousands of peer-reviewed papers into actionable, personalized protocols — then our AI learns from every user outcome to get smarter over time.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-xl border border-border bg-card/30">
              <p className="text-xl md:text-2xl font-light gradient-text mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-xs tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
