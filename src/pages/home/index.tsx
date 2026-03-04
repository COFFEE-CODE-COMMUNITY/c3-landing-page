import type { JSX } from "react";
import HeroSection from "./components/HeroSection";
import CollaborationSection from "./components/CollaborationSection";
import EventsSection from "./components/EventsSection";
import FoundersSection from "./components/FoundersSection";
import RoutineSection from "./components/RoutineSection";

const AboutPage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <CollaborationSection />
      <EventsSection />
      <FoundersSection />
      <RoutineSection />
    </div>
  );
};

export default AboutPage;
