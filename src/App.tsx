import { LandingHero } from "@/components/LandingHero";
import { ProtocolDomains } from "@/components/ProtocolDomains";
import { ScienceCredibility } from "@/components/ScienceCredibility";
import { HowItWorks } from "@/components/HowItWorks";
import { TrackingSystem } from "@/components/TrackingSystem";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHero />
      <ProtocolDomains />
      <ScienceCredibility />
      <HowItWorks />
      <TrackingSystem />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
