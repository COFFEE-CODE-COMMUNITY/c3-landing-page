// import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CollaborationSection from './components/CollaborationSection';
import FoundersSection from './components/FoundersSection';
import EventsSection from './components/EventsSection';
import RoutineSection from './components/RoutineSection';
import Footer from './components/Footer';

import type { JSX } from "react";

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f8f8ff] text-[#00215e] font-urbanist w-full overflow-x-hidden pt-24">
      <Navbar />
      <HeroSection />
      <CollaborationSection />
      <FoundersSection />
      <EventsSection />
      <RoutineSection />
      <Footer />
    </div>
  );
}

export default App;
