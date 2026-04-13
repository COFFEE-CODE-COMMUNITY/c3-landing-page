import type { JSX } from "react";
import { useFadeIn } from "../../utils/animations";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Members from "./components/Members";
import Researchs from "./components/Researchs";
import Highlight from "./components/Highlight";

const AboutPage = (): JSX.Element => {
  const containerRef = useFadeIn(1.0, 0.1);

  return (
    <div ref={containerRef} className="bg-[#F8F8FF] flex flex-col overflow-hidden">
      <HeroSection />
      <VisionMission />
      <Highlight />
      <Researchs />
      <Members />
    </div>
  );
};

export default AboutPage;
