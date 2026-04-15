import { useState } from "react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/contact@livengy.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "New Livengy waitlist signup",
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Early Access</p>
        <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
          Join the Waitlist
        </h2>
        <p className="text-muted-foreground mb-10">
          Be among the first to reverse your biological clock. Limited early access spots available.
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 glow-border">
            <p className="text-primary font-medium">You're on the list.</p>
            <p className="text-muted-foreground text-sm mt-1">We'll reach out when it's your turn.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={submitting}
              className="flex-1 px-5 py-3.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3.5 rounded-lg gradient-glow text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Get Early Access"}
            </button>
          </form>
        )}
        {error && (
          <p className="mt-4 text-sm text-destructive">{error}</p>
        )}
      </div>
    </section>
  );
}
