import { type JSX, useEffect, useRef } from "react";
import { useFadeInUp, useFloating, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

const HeroSection = (): JSX.Element => {
  const headingRef = useFadeInUp(1.0, 0.3, 60);
  const textRef = useFadeInUp(1.0, 0.5, 60);
  const btnRef = useFadeInUp(1.0, 0.7, 40);

  const logoCircleFloat = useFloating(4, 15);
  const logoCircleParallax = useParallax(0.1);

  const bgCircleLeft = useFloating(6, 30);
  const bgCircleRight = useFloating(5, 25);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "poxswer2.out" }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Background Circles */}
      <div
        ref={bgCircleLeft}
        className="absolute left-[-20vw] top-[10%] w-[40vw] max-w-[500px] aspect-square rounded-full bg-primary pointer-events-none z-0 opacity-30"
      />
      <div
        ref={bgCircleRight}
        className="absolute right-[-15vw] bottom-[5%] w-[35vw] max-w-[500px] aspect-square rounded-full bg-orange pointer-events-none z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">

        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-5 py-2">
            <div className="w-2 h-2 rounded-full bg-orange animate-pulse"></div>
            <span className="text-h7 font-urbanist font-medium text-primary tracking-wide uppercase">About Us</span>
          </div>

          <h1 ref={headingRef} className="font-urbanist font-bold text-primary text-h2 md:text-h1 tracking-tight leading-tight">
            Coffee Code<br />Community
          </h1>

          <div className="w-20 h-1.5 bg-gradient-to-r from-orange to-yellow rounded-full"></div>

          <p ref={textRef} className="font-urbanist font-normal text-[#666] text-h6 md:text-h5 leading-relaxed max-w-lg">
            Tempat terbaik untuk mulai dan berkembang di dunia teknologi.
            Belajar bareng, bangun proyek nyata, dan tingkatkan skill secara
            konsisten.
          </p>

          <div ref={btnRef}>
            <a
              href="#vision"
              className="mt-2 inline-flex items-center gap-2 bg-primary text-white font-urbanist font-semibold text-h6 px-8 py-3.5 rounded-full hover:bg-dark-primary transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Explore More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l10-10M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Logo Circle */}
        <div className="flex-shrink-0 relative">
          <div
            ref={(el) => {
              if (el) {
                logoCircleFloat.current = el;
                logoCircleParallax.current = el;
              }
            }}
            className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/30 border-[6px] border-white/10"
          >
            <img src="logo-white.png" className="w-28 md:w-36 lg:w-40" alt="CThree Logo" />
          </div>

          {/* Small floating decoration */}
          <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-orange animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-yellow/70 animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

