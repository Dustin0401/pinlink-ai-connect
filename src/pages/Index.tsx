import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import NetworkSection from "@/components/NetworkSection";
import BenefitsSection from "@/components/BenefitsSection";
import VisionSection from "@/components/VisionSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import InvestmentSection from "@/components/InvestmentSection";
import TeamSection from "@/components/TeamSection";
import RoadmapSection from "@/components/RoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <NetworkSection />
      <BenefitsSection />
      <VisionSection />
      <TokenomicsSection />
      <InvestmentSection />
      <TeamSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
