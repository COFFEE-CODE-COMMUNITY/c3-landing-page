import type { JSX } from "react";
import { useEffect, useRef, useState } from "react";
import workshop from "../../../assets/event/workshop.webp";
import engagement from "../../../assets/event/engagement.webp";
import showcase from "../../../assets/event/showcase.webp";
import { useSlideInRight, useStaggerChildren, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

interface EventCardProps {
  imageSrc: string;
  title: string;
  description: string;
  accentClass: string;
}

function EventCard({
  imageSrc,
  title,
  description,
  accentClass,
}: EventCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleClick = () => {
    // Only toggle on touch devices (mobile), desktop uses CSS hover
    if (window.matchMedia("(hover: none)").matches) {
      setIsTapped((prev) => !prev);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className="group relative w-full aspect-[3/4] rounded-[25px] overflow-hidden shadow-lg cursor-pointer select-none"
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 ${
          isTapped ? "scale-110" : ""
        }`}
      />

      {/* Default overlay: dark gradient at bottom */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-400 group-hover:opacity-0 ${
          isTapped ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Default state: title at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-300 group-hover:opacity-0 ${
          isTapped ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className={`w-10 h-1 ${accentClass} rounded-full mb-3`}></div>
        <h3 className="font-urbanist font-bold text-white text-h4 md:text-h3 leading-tight tracking-tight">
          {title}
        </h3>
      </div>

      {/* Hover/tap overlay: full dark overlay + centered content */}
      <div
        className={`absolute inset-0 bg-black/75 transition-opacity duration-400 flex flex-col items-center justify-center p-8 text-center group-hover:opacity-100 ${
          isTapped ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className={`w-10 h-1 ${accentClass} rounded-full mb-4`}></div>
        <h3 className="font-urbanist font-bold text-white text-h4 md:text-h3 leading-tight tracking-tight mb-4">
          {title}
        </h3>
        <p className="font-urbanist font-normal text-white/80 text-h6 md:text-h5 leading-relaxed tracking-tight">
          {description}
        </p>
        {/* Tap hint — only visible on touch devices */}
        <p className="mt-4 text-white/40 text-xs font-urbanist md:hidden">
          Tap lagi untuk menutup
        </p>
      </div>
    </div>
  );
}

export default function EventsSection(): JSX.Element {
  const textContentRef = useSlideInRight(0.8, 100);
  const cardsRef = useStaggerChildren(0.15, 0.8, 60);
  const orangeCircleRef = useParallax(0.3);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f8f8ff] px-4 sm:px-6 lg:px-8">

      {/* Decorative Orange Circle */}
      <div
        ref={orangeCircleRef}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-orange pointer-events-none z-0"
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col gap-12 lg:gap-16">

        {/* Top Text Section */}
        <div
          ref={textContentRef}
          className="flex flex-col w-full text-center lg:text-left items-center lg:items-start max-w-2xl"
        >
          <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight mb-6 md:mb-8">
            CThree Event
          </h2>
          <div className="w-32 h-1.5 bg-orange rounded-full mb-6 md:mb-8"></div>
          <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 leading-relaxed tracking-tight">
            Kami menghadirkan berbagai kegiatan yang dirancang untuk mendukung proses belajar dan pengembangan skill di bidang teknologi. Setiap event memberikan pengalaman baru melalui praktik langsung, kolaborasi, dan eksplorasi ide.
          </p>
        </div>

        {/* Full-width Cards Grid */}
        <div
          ref={cardsRef}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <EventCard
            imageSrc={workshop}
            title="Workshop"
            description="Workshop adalah kegiatan komunitas kami untuk belajar bareng secara praktikal."
            accentClass="bg-primary"
          />
          <EventCard
            imageSrc={engagement}
            title="Engagement Day"
            description="Workshop adalah kegiatan rutin komunitas kami untuk belajar bareng secara praktikal."
            accentClass="bg-orange"
          />
          <EventCard
            imageSrc={showcase}
            title="Showcase Day"
            description="Showcase Day adalah momen untuk kami menunjukkan sejauh mana perkembangan proyek yang sedang dikerjakan."
            accentClass="bg-yellow"
          />
        </div>
      </div>
    </section>
  );
}
