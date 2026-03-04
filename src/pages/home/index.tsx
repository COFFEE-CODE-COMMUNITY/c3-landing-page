import type { JSX } from "react";
import HeroSection from "./components/HeroSection";
import CollaborationSection from "./components/CollaborationSection";
import EventsSection from "./components/EventsSection";
import FoundersSection from "./components/FoundersSection";
import RoutineSection from "./components/RoutineSection";

const AboutPage = (): JSX.Element => {
  return (
    <div className="-mt-24 bg-[#F8F8FF]">
      <HeroSection />
      <CollaborationSection />
      <FoundersSection />
      <EventsSection />
      <RoutineSection />
    </div>
  );
};

export default AboutPage;
