import { useEffect, useRef } from 'react';
import { useScrollFadeInUp, useStaggerChildren } from '../../../utils/animations';
import { gsap } from 'gsap';

function CollabCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current.querySelector('img'),
      { y: 50, opacity: 0 },
      {
        y: 0,
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
    <div 
      ref={cardRef}
      className="flex flex-col sm:flex-row w-full rounded-[25px] overflow-hidden shadow-lg bg-primary transition-transform duration-300 hover:scale-[1.02]"
    >

      {/* Text Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center z-10 w-full sm:w-1/2">
        <p className="font-urbanist font-bold text-yellow text-h5 md:text-h4 tracking-tight">
          BrandonKun
        </p>
        <p className="font-urbanist font-semibold text-primary text-h6 md:text-h5 tracking-tight mt-1">
          Work at Fisallia Pharmacy
        </p>
        <p className="font-urbanist font-normal text-white text-h6 tracking-tight mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. In nulla phasellus eu in tincidunt pharetra risus. Nam turpis pretium dolor laoreet egestas urna est.
        </p>
      </div>

      {/* Image & Decorative */}
      <div 
        ref={imageRef}
        className="flex-1 sm:w-1/2 relative bg-[#001a4b] min-h-[250px] sm:min-h-0 overflow-hidden flex items-end justify-center rounded-bl-[50px] sm:rounded-bl-none sm:rounded-tr-[50px]"
      >
        {/* Decorative ellipses */}
        <div className="absolute right-0 top-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#1e44a0] opacity-75 transform translate-x-1/4 -translate-y-1/4 pointer-events-none z-0" />
        <div className="absolute right-0 top-0 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#255abc] transform translate-x-1/2 translate-y-1/4 pointer-events-none z-0" />

        {/* Person image */}
        <div className="relative w-2/3 max-w-[250px] sm:max-w-full sm:w-5/6 h-auto flex flex-col justify-end z-10 bottom-0 pt-6">
          <img
            alt="Satisfied Client"
            className="w-full h-auto object-contain block drop-shadow-md"
            src="/person.png"
          />
        </div>
      </div>
    </div>
  );
}

export default function CollaborationSection() {
  const headingRef = useScrollFadeInUp(0.8, 60);
  const cardsRef = useStaggerChildren(0.15, 0.8, 60);

  return (
    <section className="relative w-full -mt-20 z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative yellow circle — bridges into the section below */}
      {/* <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-orange pointer-events-none z-0" /> */}

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center">
        <h2 
          ref={headingRef}
          className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight mb-10 text-center"
        >
          Collaboration With
        </h2>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full"
        >
          <CollabCard />
          <CollabCard />
          {/* <CollabCard />
          <CollabCard /> */}
        </div>
      </div>
    </section>
  );
}
