import { useState, useEffect, useRef } from "react";
import { RESEARCHS_LIST } from "../../../utils/data";
import ResearchCard from "./ResearchCard";
import { useScrollFadeInUp, useStaggerChildren, useFloating, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

interface ResearchDetail {
  desc: string;
  image: string;
  tittle: string;
}

const Researchs = () => {
  const [research, setResearch] = useState<ResearchDetail | null>(null);

  const titleRef = useScrollFadeInUp(0.8, 50);
  const cardsRef = useStaggerChildren(0.15, 0.8, 60);

  const circleLeft = useFloating(5, 25);
  const circleRight = useFloating(4, 20);

  // Modal animation
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (research && modalContentRef.current) {
      gsap.fromTo(
        modalContentRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [research]);

  return (
    <>
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative circles */}
        <div ref={circleLeft} className="hidden md:block absolute -left-16 top-20 w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-primary pointer-events-none" />
        <div ref={circleRight} className="hidden md:block absolute -right-12 bottom-20 w-40 h-40 lg:w-60 lg:h-60 rounded-full bg-orange pointer-events-none" />

        <div className="max-w-screen-xl mx-auto relative z-10">
          {/* Heading */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight">
              Technology Research
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-orange to-yellow rounded-full mx-auto mt-4 mb-6"></div>
            <p className="font-urbanist font-normal text-[#666] text-h6 md:text-h5 max-w-2xl mx-auto leading-relaxed">
              Mendedikasikan kreativitas dan keahlian teknis dalam meriset serta
              mengembangkan perangkat lunak cerdas, mulai dari mekanik permainan
              hingga arsitektur sistem yang skalabel.
            </p>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {RESEARCHS_LIST.map((r, i) => (
              <ResearchCard
                key={i}
                desc={r.description}
                image={r.photourl}
                tittle={r.name}
                onClick={() =>
                  setResearch({
                    desc: r.description,
                    image: r.photourl,
                    tittle: r.name,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {research && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === modalRef.current) setResearch(null);
          }}
        >
          <div
            ref={modalContentRef}
            className="bg-white w-full max-w-4xl max-h-[90vh] relative flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Image */}
            <div className="lg:w-2/5 min-h-[200px] lg:min-h-0 relative">
              <img
                src={research.image}
                alt={research.tittle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col gap-4 overflow-y-auto">
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-urbanist font-semibold text-orange text-h7 uppercase tracking-widest">Research</span>
                  <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 tracking-tight mt-1">
                    {research.tittle}
                  </h2>
                </div>
                <button
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setResearch(null)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange to-yellow rounded-full"></div>
              <p className="font-urbanist text-[#555] text-h6 leading-relaxed">
                {research.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Researchs;
