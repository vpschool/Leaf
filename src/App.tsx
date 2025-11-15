import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { SupportedDocuments } from "./components/SupportedDocuments";
import { PartnerBadges } from "./components/PartnerBadges";
import { DocumentAnalyzer } from "./components/DocumentAnalyzer";
import { Footer } from "./components/Footer";

export default function App() {
  const [view, setView] = useState<"landing" | "app">("landing");

  if (view === "app") {
    return <DocumentAnalyzer onBack={() => setView("landing")} />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={() => setView("app")} />
      <BenefitsSection />
      <SupportedDocuments />
      <PartnerBadges />
      <Footer />
    </div>
  );
}
