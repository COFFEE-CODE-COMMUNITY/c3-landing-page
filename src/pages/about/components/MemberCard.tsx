import { useRef } from "react";
import { gsap } from "gsap";

interface MemberCardProps {
  image: string;
  name: string;
}

const MemberCard = ({ image, name }: MemberCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -6,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="group flex flex-col items-center gap-4 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:shadow-primary/15 transition-shadow duration-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {/* Small status dot */}
        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="font-urbanist font-semibold text-primary text-h6 text-center group-hover:text-orange transition-colors duration-300 leading-tight max-w-[140px]">
        {name}
      </h3>
    </div>
  );
};

export default MemberCard;
