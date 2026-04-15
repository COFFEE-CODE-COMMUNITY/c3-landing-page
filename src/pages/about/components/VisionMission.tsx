import { useState, type JSX } from "react";
import { useScrollFadeInUp, useSlideInLeft, useSlideInRight, useFloating, useParallax } from "../../../utils/animations";

const VisionMission = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const headingRef = useScrollFadeInUp(0.8, 50);
  const leftRef = useSlideInLeft(0.8, 80);
  const rightRef = useSlideInRight(0.8, 80);

  const circleTopLeft = useFloating(4.5, 20);
  const circleBottomRight = useFloating(3.8, 18);
  const circleTopLeftParallax = useParallax(0.1);
  const circleBottomRightParallax = useParallax(0.15);

  const missions = [
    { num: "01", title: "Continuous Learning", desc: "Menyelenggarakan ruang belajar berkelanjutan untuk mendalami teknologi terbaru." },
    { num: "02", title: "Interdisciplinary Collaboration", desc: "Membangun budaya kolaborasi antar berbagai disiplin ilmu." },
    { num: "03", title: "Healthy Competition", desc: "Mendorong semangat kompetisi yang sehat melalui proyek nyata." },
    { num: "04", title: "Professional Readiness", desc: "Mempersiapkan anggota dengan hard skill dan soft skill relevan." },
  ];

  return (
    <section id="vision" className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Circles */}
      <div
        ref={(el) => { if (el) { circleTopLeft.current = el; circleTopLeftParallax.current = el; } }}
        className="absolute -left-20 top-10 w-40 h-40 lg:w-72 lg:h-72 rounded-full bg-yellow pointer-events-none"
      />
      <div
        ref={(el) => { if (el) { circleBottomRight.current = el; circleBottomRightParallax.current = el; } }}
        className="absolute -right-20 bottom-10 w-48 h-48 lg:w-80 lg:h-80 rounded-full bg-primary pointer-events-none"
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight">
            Vision & Mission
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange to-yellow rounded-full mx-auto mt-4"></div>
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-4 mb-14">
          <button
            onClick={() => setActiveTab("vision")}
            className={`font-urbanist font-semibold text-h5 px-8 py-3 rounded-full transition-all duration-400 cursor-pointer ${activeTab === "vision"
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "bg-white text-[#888] border border-gray-200 hover:border-primary/30 hover:text-primary"
              }`}
          >
            Vision
          </button>
          <button
            onClick={() => setActiveTab("mission")}
            className={`font-urbanist font-semibold text-h5 px-8 py-3 rounded-full transition-all duration-400 cursor-pointer ${activeTab === "mission"
              ? "bg-primary text-white shadow-lg shadow-primary/20"
              : "bg-white text-[#888] border border-gray-200 hover:border-primary/30 hover:text-primary"
              }`}
          >
            Mission
          </button>
        </div>

        {/* Content */}
        {activeTab === "vision" ? (
          <div ref={leftRef} className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-10 md:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.04)] text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00215e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="font-urbanist font-bold text-primary text-h3 md:text-h2 tracking-tight mb-6">
                CThree Vision
              </h3>
              <p className="font-urbanist text-[#555] text-h5 md:text-h4 leading-relaxed max-w-2xl mx-auto">
                "Menjadi ekosistem kolaboratif yang melahirkan inovator teknologi
                unggul, adaptif, dan siap memimpin transformasi digital di
                industri global."
              </p>
            </div>
          </div>
        ) : (
          <div ref={rightRef} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((item) => (
              <div
                key={item.num}
                className="group bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,33,94,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="font-urbanist font-bold text-orange text-h3 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  {item.num}
                </span>
                <h4 className="font-urbanist font-bold text-primary text-h5 mt-2 mb-3">
                  {item.title}
                </h4>
                <p className="font-urbanist text-[#666] text-h6 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VisionMission;
