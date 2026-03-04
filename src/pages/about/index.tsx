import type { JSX } from "react";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Members from "./components/Members";

const AboutPage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <VisionMission />
      <Members />
    </div>
  );
};

export default AboutPage;
