import { useEffect, useRef } from 'react';
import { useScrollFadeInUp, useStaggerChildren } from '../../../utils/animations';
import { gsap } from 'gsap';
import jessica from "../../../assets/collabs/jessica.jpg";
import taufik from "../../../assets/collabs/taufik.jpg";

const collabs = [
  {
    name: "Jessica Cecilia Budianto",
    image: jessica,
    role: "Google Developer Experts",
    description: "A passionate software engineer focused on continuous learning and empowering others through technology."
  },
  {
    name: "Taufik Mulyawan",
    image: taufik,
    role: "Software Engineer",
    description: "A Lead Software Engineer with over 4 years of experience in building and scaling reliable systems. Taufik currently leads engineering initiatives, focusing on delivering high-quality and impactful solutions."
  }
];

// ✅ FIX: gunakan destructuring props
function CollabCard({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) {
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
          {name}
        </p>
        <p className="font-urbanist font-semibold text-white text-h6 md:text-h5 tracking-tight mt-1">
          {role}
        </p>
        <p className="font-urbanist font-normal text-white text-h6 tracking-tight mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className="flex items-center justify-center sm:w-1/2 relative bg-[#001a4b] min-h-[250px] sm:min-h-0 overflow-hidden rounded-bl-[50px] sm:rounded-bl-none sm:rounded-tr-[50px] p-8"
      >
        {/* Decorative */}
        <div className="absolute right-0 top-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#1e44a0] opacity-75 transform translate-x-1/4 -translate-y-1/4 z-0" />
        <div className="absolute right-0 top-0 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#255abc] transform translate-x-1/2 translate-y-1/4 z-0" />

        {/* Image */}
        <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
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
          {collabs.map((collab, index) => (
            <CollabCard
              key={index}
              name={collab.name}
              role={collab.role}
              image={collab.image}
              description={collab.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}