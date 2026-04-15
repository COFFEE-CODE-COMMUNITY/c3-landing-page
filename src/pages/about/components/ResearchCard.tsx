import React, { useRef } from "react";
import { gsap } from "gsap";

interface ResearchCardProps {
  image: string;
  tittle: string;
  desc: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ResearchCard = ({ image, tittle, desc, onClick }: ResearchCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -8,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,33,94,0.1)] transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={tittle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h4 className="font-urbanist font-bold text-primary text-h5 tracking-tight">
          {tittle}
        </h4>
        <p className="font-urbanist text-[#666] text-h7 leading-relaxed line-clamp-3">
          {desc}
        </p>
        <button
          className="self-start mt-2 inline-flex items-center gap-2 bg-primary text-white font-urbanist font-semibold text-h7 px-5 py-2.5 rounded-full hover:bg-dark-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
          onClick={onClick}
        >
          Learn More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResearchCard;
