import type { JSX } from "react";
import { useEffect, useRef } from "react";
import workshop from "../../../assets/event/workshop.webp";
import engagement from "../../../assets/event/engagement.webp";
import showcase from "../../../assets/event/showcase.webp";
import { useSlideInRight, useStaggerChildren, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

interface EventCardProps {
  imageSrc: string;
  title: string;
  description: string;
  borderClass: string;
}

function EventCard({
  imageSrc,
  title,
  description,
  borderClass,
}: EventCardProps): JSX.Element {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 0.95, opacity: 0.8 },
      {
        scale: 1.05,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col bg-white shadow-md rounded-[25px] overflow-hidden h-full">
      <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col items-center text-center">
        <div 
          ref={imageRef}
          className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-gray-100"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-urbanist font-bold text-primary text-h4 md:text-h3 lg:text-h3 text-left leading-tight tracking-tight mb-4">
          {title}
        </h3>
        <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 leading-relaxed tracking-tight">
          {description}
        </p>
      </div>
      <div className={`w-full h-1.5 ${borderClass}`}></div>
    </div>
  );
}

export default function EventsSection(): JSX.Element {
  const textContentRef = useSlideInRight(0.8, 100);
  const cardsRef = useStaggerChildren(0.15, 0.8, 60);
  const orangeCircleRef = useParallax(0.3);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f8f8ff] px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Orange Circle (Bottom Left, overlapping to RoutineSection) */}
      <div 
        ref={orangeCircleRef}
        className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-orange pointer-events-none z-0"
      ></div>

      {/* Main Content Container (z-10 ensures it stays above the circle) */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-center">
        
        {/* Left Text */}
        <div 
          ref={textContentRef}
          className="flex flex-col lg:flex-[0.35] w-full text-center lg:text-left items-center lg:items-start"
        >
          <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight mb-6 md:mb-8">
            CThree Event
          </h2>
          <div className="w-32 h-1.5 bg-orange rounded-full mb-6 md:mb-8"></div>
          <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 leading-relaxed tracking-tight max-w-2xl lg:max-w-none">
            Kami menghadirkan berbagai kegiatan yang dirancang untuk mendukung proses belajar dan pengembangan skill di bidang teknologi. Setiap event memberikan pengalaman baru melalui praktik langsung, kolaborasi, dan eksplorasi ide.
          </p>
        </div>

        {/* Right Cards */}
        <div 
          ref={cardsRef}
          className="flex-[0.65] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <EventCard
            imageSrc={workshop}
            title="Workshop"
            description="Workshop adalah kegiatan komunitas kami untuk belajar bareng secara praktikal."
            borderClass="bg-primary"
          />
          <EventCard
            imageSrc={engagement}
            title="Engangement Day"
            description="Workshop adalah kegiatan rutin komunitas kami untuk belajar bareng secara praktikal."
            borderClass="bg-orange"
          />
          <EventCard
            imageSrc={showcase}
            title="Showcase Day"
            description="Showcase Day adalah momen untuk kami menunjukkan sejauh mana perkembangan proyek yang sedang dikerjakan."
            borderClass="bg-yellow"
          />
        </div>
      </div>
    </section>
  );
}