import type { JSX } from "react";
import { useRef, useState } from "react";

const imgEllipse103 = "http://localhost:3845/assets/58266a59c19b8b90557ff45a3facc0e8f6b59a9a.svg";
const imgEllipse104 = "http://localhost:3845/assets/6219f908adc633726ac4d5181a7014748d7a0620.svg";
const imgEllipse7 = "http://localhost:3845/assets/975e69ba23c01c645641158dfa1e14738986a29d.png";
const imgEllipse8 = "http://localhost:3845/assets/44cbd0cf4d89b8d5bf9b0657b5aa564d8acb4129.png";
const imgEllipse105 = "http://localhost:3845/assets/da575ce4ebe34e6303f34bdc7914b99ee879459e.svg";


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
      <p className="font-urbanist font-bold text-[#00215e] text-xl md:text-2xl tracking-tight text-center mb-1">
        {name}
      </p>
      <p className="font-urbanist font-semibold text-[#858585] text-lg tracking-tight text-center">
        {role1}
      </p>
    </div>
  );
}

export default function FoundersSection(): JSX.Element {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#f8f8ff] overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* Decorative Left Elements - Hidden on smaller screens */}
        <div className="hidden lg:block absolute left-[-15%] top-0 w-64 h-64 z-0 pointer-events-none">
          <img src="Ellipse 102.png" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Left Side: Text Content */}
        <div className="flex-1 relative z-10 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <h2 className="font-urbanist font-bold text-[#00215e] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Meet Our Community Founder
          </h2>

          <div className="bg-[#ececec] rounded-[25px] p-8 md:p-10 relative flex flex-col w-full shadow-sm">
            <div className="absolute top-0 left-8 md:left-10 w-24 h-1.5 bg-[#ffaa28] rounded-full transform -translate-y-1/2"></div>

            <p className="font-urbanist font-normal text-[#858585] text-base md:text-lg leading-relaxed tracking-tight mb-8">
              Lorem ipsum dolor sit amet consectetur. Ipsum quis eu mattis odio nulla mi sed. Quis massa quis in cras nisl viverra nunc ultrices. Ac ullamcorper malesuada integer feugiat malesuada. Cursus elit in nisi sagittis vivamus hendrerit consectetur ante pellentesque. Sed est mauris mauris phasellus.
            </p>

            <div className="self-center lg:self-start">
              <button className="bg-[#00215e] text-[#f8f8ff] font-urbanist font-bold text-lg md:text-xl px-8 py-3 rounded-full hover:bg-[#001a4b] transition-colors shadow-md">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Founder Cards */}
        <div className="flex-1 relative z-10 w-full flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
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
        <div className="hidden lg:block absolute right-[-20%] bottom-0 w-[400px] h-[400px] z-0 pointer-events-none">
          <img src="Ellipse 98.png" alt="" className="w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
}
