import ClientSection from "@/components/ClientSection";
import CostAndQualitySection from "@/components/CostAndQualitySection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import FormSection from "@/components/FormSection";
import HeroSection from "@/components/HeroSection";
import HireExpertsSection from "@/components/HireExpertsSection";
import HiringStepsSection from "@/components/HiringStepsSection";
import PlatformSection from "@/components/PlatformSection";
import PricingSection from "@/components/PricingSection";
import TalentSection from "@/components/TalentSection";
import TestimonialSection from "@/components/TestimonialSection";
import TrustedSection from "@/components/TrustedSection";
import WhyUseSection from "@/components/WhyUseSection";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] font-raleway bg-primary">
      <HeroSection />
      <TrustedSection />
      <HireExpertsSection />
      <PlatformSection />
      <WhyUseSection />
      <HiringStepsSection />
      <PricingSection />
      <FormSection />
      <ClientSection />
      <TalentSection />
      <CostAndQualitySection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <span className="opacity-0">
        Hire Expert Software Developers Supported by AI
      </span>
    </div>
  );
}
