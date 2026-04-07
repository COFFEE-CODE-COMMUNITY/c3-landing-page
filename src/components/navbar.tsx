import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar(): JSX.Element {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial fade in animation
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' }
      );
    }

    // Setup scroll trigger for width shrink effect
    const scrollTrigger = ScrollTrigger.create({
      start: 100,
      end: 99999,
      onEnter: () => {
        setIsScrolled(true);
      },
      onLeaveBack: () => {
        setIsScrolled(false);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div 
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 px-4 sm:px-6 lg:px-8"
    >
      <div 
        ref={navbarInnerRef}
        className={`relative bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 mx-auto rounded-[50px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-between px-6 py-3 md:px-10 pointer-events-auto transition-[max-width] duration-[400ms] ease-out ${
          isScrolled ? 'max-w-[1088px]' : 'max-w-screen-xl'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center relative z-10">
          <img
            src="cthree-nav.svg"
            alt="CThree Logo"
            className="h-10 w-auto md:h-12"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-12 relative z-10">
          <Link
            to="/"
            className={`font-urbanist text-[#00215e] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors ${
              location.pathname === "/" ? "font-medium" : "font-light"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-urbanist text-[#858585] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors ${
              location.pathname.includes("/about") ? "font-medium" : "font-light"
            }`}
          >
            About
          </Link>
          <Link
            to="/portofolio"
            className={`font-urbanist text-[#858585] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors ${
              location.pathname.includes("/portofolio") ? "font-medium" : "font-light"
            }`}
          >
            Portofolio
          </Link>
        </nav>
      </div>

    </div>
  );
}
