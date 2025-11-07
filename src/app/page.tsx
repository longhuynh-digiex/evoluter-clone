import HeroSection from "@/components/HeroSection";
import HireExpertsSection from "@/components/HireExpertsSection";
import HiringStepsSection from "@/components/HiringStepsSection";
import Navbar from "@/components/Navbar";
import PlatformSection from "@/components/PlatformSection";
import PricingSection from "@/components/PricingSection";
import TrustedSection from "@/components/TrustedSection";
import WhyUseSection from "@/components/WhyUseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-raleway bg-primary">
      <Navbar />
      <HeroSection />
      <TrustedSection />
      <HireExpertsSection />
      <PlatformSection />
      <WhyUseSection />
      <HiringStepsSection />
      <PricingSection />
    </div>
  );
}
