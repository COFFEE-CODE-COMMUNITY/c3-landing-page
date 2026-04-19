import type { JSX } from "react";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";

const JoinPage = (): JSX.Element => {
  return (
    <div className="bg-[#F8F8FF]">
      <HeroSection />
      <BenefitsSection />
    </div>
  );
};

export default JoinPage;
