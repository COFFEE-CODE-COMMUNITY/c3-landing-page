import type { JSX } from "react";
import { useRef, useState, useEffect } from "react";
import { useSlideInLeft, useSlideInRight, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

interface FounderCardProps {
  imageSrc: string;
  name: string;
  role1: string;
  isHighlighted?: boolean;
}

function FounderCard({
  imageSrc,
  name,
  role1,
  isHighlighted = false,
}: FounderCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setCursorPos({ x: xPercent, y: yPercent });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered
          ? {
              background: `
                radial-gradient(
                  circle at ${cursorPos.x}% ${cursorPos.y}%, 
                  rgba(0, 33, 94, 0.15) 0%, 
                  rgba(236, 236, 236, 0.4) 50%
                )
              `,
            }
          : undefined
      }
      className={`flex flex-col border border-white/50 backdrop-blur-2xl backdrop-saturate-150 rounded-[25px] p-6 md:p-8 items-center w-full max-w-[320px] mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out group ${
        isHovered ? 'shadow-[0_12px_40px_rgba(0,33,94,0.08)]' : ''
      } ${
        isHighlighted ? "lg:-translate-y-4" : ""
      }`}
    >
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 flex-shrink-0 bg-gray-200/50">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="font-urbanist font-bold text-primary text-h5 md:text-h4 tracking-tight text-center mb-1">
        {name}
      </p>
      <p className="font-urbanist font-semibold text-[#858585] text-h5 tracking-tight text-center">
        {role1}
      </p>
    </div>
  );
}

export default function FoundersSection(): JSX.Element {
  const textContentRef = useSlideInLeft(0.8, 100);
  const cardsContentRef = useSlideInRight(0.8, 100);
  const leftCircleRef = useParallax(0.2);
  const rightCircleRef = useParallax(0.25);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1.03,
      duration: 2.5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f8f8ff] px-4 sm:px-6 lg:px-8">
      
      {/* NEW: Lingkaran Oranye Kiri Bawah (Overlap ke section bawahnya) */}

      <div className="max-w-screen-xl mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Decorative Left Elements - Hidden on smaller screens */}
        <div 
          ref={leftCircleRef}
          className="hidden lg:block absolute left-[-15%] top-0 w-64 h-64 rounded-full bg-yellow pointer-events-none z-1" 
        />

        {/* Left Side: Text Content */}
        <div 
          ref={textContentRef}
          className="flex-1 relative z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-8"
        >
          
          {/* Wrapper khusus untuk h2 + garis oranye */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight leading-tight">
              Meet Our Community Founder
            </h2>
            <div className="w-32 h-1.5 bg-orange rounded-full"></div>
          </div>

          <div className="bg-[#ececec] rounded-[25px] p-8 md:p-10 relative flex flex-col w-full shadow-sm">
            <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 leading-relaxed tracking-tight mb-8">
              Berawal dari semangat berbagi dan belajar bersama, komunitas ini hadir untuk membantu siapa saja berkembang di dunia teknologi. Founder kami percaya bahwa setiap orang memiliki potensi untuk sukses dengan dukungan dan lingkungan yang tepat.
            </p>

            <div className="self-center lg:self-start">
              <button 
                ref={buttonRef}
                className="bg-primary text-[#f8f8ff] font-urbanist font-bold text-h5 md:text-h5 px-8 py-3 rounded-full hover:bg-[#001a4b] transition-colors shadow-md"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Founder Cards */}
        <div 
          ref={cardsContentRef}
          className="flex-1 relative z-10 w-full flex flex-col sm:flex-row gap-6 justify-center lg:justify-end"
        >
          <FounderCard
            imageSrc="profile1.png"
            name="Rafi Asshiddiqie T."
            role1="Founder"
          />
          <FounderCard
            imageSrc="profile2.png"
            name="Aido Nayaka"
            role1="Co-Founder"
            isHighlighted={true}
          />
        </div>

        {/* Right Decor */}
        <div 
          ref={rightCircleRef}
          className="hidden lg:block absolute right-[-20%] bottom-0 w-[400px] h-[400px] rounded-full bg-primary pointer-events-none z-0" 
        />

      </div>
    </section>
  );
}