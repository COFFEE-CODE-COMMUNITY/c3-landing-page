import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar(): JSX.Element {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarInnerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Animate mobile menu open/close
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [menuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.includes(path);
  };

  const linkClass = (path: string) =>
    `font-urbanist text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors ${
      isActive(path)
        ? "text-[#00215e] font-medium"
        : "text-[#858585] font-light"
    }`;

  const mobileLinkClass = (path: string) =>
    `font-urbanist text-lg tracking-tight hover:text-c3-yellow transition-colors py-2 ${
      isActive(path)
        ? "text-[#00215e] font-medium"
        : "text-[#858585] font-light"
    }`;

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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 md:gap-12 relative z-10">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/portofolio" className={linkClass("/portofolio")}>
            Portofolio
          </Link>
        </nav>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative z-10 flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none pointer-events-auto"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-[#00215e] rounded-full transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#00215e] rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#00215e] rounded-full transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden mx-auto mt-2 pointer-events-auto"
          style={{ maxWidth: isScrolled ? '1088px' : undefined }}
        >
          <nav className="bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-6 py-4 flex flex-col gap-1">
            <Link to="/" className={mobileLinkClass("/")}>
              Home
            </Link>
            <div className="h-px bg-gray-100/60" />
            <Link to="/about" className={mobileLinkClass("/about")}>
              About
            </Link>
            <div className="h-px bg-gray-100/60" />
            <Link to="/portofolio" className={mobileLinkClass("/portofolio")}>
              Portofolio
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
