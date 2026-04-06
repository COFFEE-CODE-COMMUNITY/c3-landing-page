import type { JSX } from "react";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Members from "./components/Members";
import Researchs from "./components/Researchs";
import Highlight from "./components/Highlight";

const AboutPage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <VisionMission />
      <Highlight />
      <Researchs />
      <Members />
    </div>
  );
};

export default AboutPage;
