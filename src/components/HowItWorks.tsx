const steps = [
  {
    number: "01",
    title: "Share Your Health Data",
    description: "Start with a quick health questionnaire and lifestyle profile. For the most precise protocol, upload your bloodwork and lab results.",
  },
  {
    number: "02",
    title: "Research-Driven AI Analysis",
    description: "Our AI cross-references your data with thousands of peer-reviewed longevity papers — and continuously improves through reinforcement learning from real user outcomes and follow-up labs.",
  },
  {
    number: "03",
    title: "Get Your Protocol",
    description: "Receive a personalized, actionable protocol across all five domains — updated as you evolve.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-xs tracking-[0.3em] uppercase text-center mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16 tracking-tight">
          From Data to Protocol in Minutes
        </h2>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary text-sm font-light">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
