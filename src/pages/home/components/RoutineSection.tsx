import type { JSX } from "react";
import { useEffect, useRef } from "react";
import collaborative from "../../../assets/routine/collaborative.webp";
import project from "../../../assets/routine/project-base.webp";
import selfpace from "../../../assets/routine/self-pace.webp";
import { useSlideInLeft, useStaggerChildren, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

interface RoutineCardProps {
  imageSrc: string;
  title: string;
  description: string;
  borderClass: string;
}

function RoutineCard({ imageSrc, title, description, borderClass }: RoutineCardProps): JSX.Element {
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!borderRef.current) return;

    gsap.fromTo(
      borderRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
        transformOrigin: 'left',
        scrollTrigger: {
          trigger: borderRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col bg-white shadow-md rounded-[25px] overflow-hidden h-full">
      <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col items-center text-center">
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-gray-100">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-urbanist text-left font-bold text-primary text-h4 md:text-h3 lg:text-h3 leading-tight tracking-tight mb-4">
          {title}
        </h3>
        <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 leading-relaxed tracking-tight whitespace-pre-wrap">
          {description}
        </p>
      </div>
      <div 
        ref={borderRef}
        className={`w-full h-1.5 ${borderClass}`}
      ></div>
    </div>
  );
}

export default function RoutineSection(): JSX.Element {
  const textContentRef = useSlideInLeft(0.8, 100);
  const cardsRef = useStaggerChildren(0.15, 0.8, 60);
  const yellowCircleRef = useParallax(0.25);

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Decorative Yellow Circle (Bottom Right) */}
      <div 
        ref={yellowCircleRef}
        className="absolute -bottom-30 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow pointer-events-none z-0"
      ></div>

      {/* Main Content Container (z-10 ensures it stays above the circle) */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center lg:items-center">
        
        {/* Left Cards */}
        <div className="flex-[0.65] w-full relative pt-6 md:pt-10">
          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <RoutineCard
              imageSrc={selfpace}
              title="Self Learning"
              description="Kami menyediakan akses ke kelas online dari camp ternama untuk belajar mandiri."
              borderClass="bg-primary"
            />
            <RoutineCard
              imageSrc={project}
              title="Project Base"
              description={`Kami mengutamakan belajar lewat proyek nyata yang bisa langsung dipraktikkan.`}
              borderClass="bg-orange"
            />
            <RoutineCard
              imageSrc={collaborative}
              title="Collaborative"
              description="Kami membangun kemitraan dengan berbagai pihak untuk membuka lebih banyak peluang."
              borderClass="bg-yellow"
            />
          </div>
        </div>

        {/* Right Text */}
        <div 
          ref={textContentRef}
          className="flex flex-col lg:flex-[0.35] w-full text-center lg:text-left items-center lg:items-start"
        >
          <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight mb-6 md:mb-8">
            CThree Routine
          </h2>
          <div className="w-32 h-1.5 bg-orange rounded-full mb-6 md:mb-8"></div>

          {/* Top orange line decorator for mobile/tablet */}
          <div className="block lg:hidden w-32 h-1.5 bg-orange rounded-full mb-6 md:mb-8"></div>
          <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 leading-relaxed tracking-tight max-w-2xl lg:max-w-none">
            Kami memiliki kebiasaan belajar yang konsisten, terarah, dan berkelanjutan. Dengan pendekatan yang menggabungkan pembelajaran mandiri, praktik berbasis proyek, serta kolaborasi aktif, kami membantu peserta mengembangkan keterampilan nyata yang siap diterapkan di dunia kerja. Setiap proses difokuskan pada peningkatan kompetensi secara bertahap dan terukur.
          </p>
        </div>
      </div>
    </section>
  );
}