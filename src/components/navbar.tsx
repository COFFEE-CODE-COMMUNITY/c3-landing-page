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

  // Initial fade-in + scroll shrink
  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
      );
    }

    const scrollTrigger = ScrollTrigger.create({
      start: 100,
      end: 99999,
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

<<<<<<< Updated upstream
=======
  // Animate mobile full-screen menu open
  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" },
      );
    }
  }, [menuOpen]);

>>>>>>> Stashed changes
  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.includes(path);
  };

  const linkClass = (path: string) =>
    `font-urbanist text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors ${
      isActive(path) ? "text-[#00215e] font-medium" : "text-[#858585] font-light"
    }`;

  const mobileLinkClass = (path: string) =>
<<<<<<< Updated upstream
    `font-urbanist text-2xl font-semibold tracking-tight transition-colors py-2 ${isActive(path) ? "text-primary" : "text-[#555]"
=======
    `font-urbanist text-2xl font-semibold tracking-tight transition-colors py-2 ${
      isActive(path) ? "text-primary" : "text-[#555]"
>>>>>>> Stashed changes
    }`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portofolio", label: "Portofolio" },
  ];

  return (
    <>
<<<<<<< Updated upstream
      {/* ── Desktop / Collapsed Navbar ── */}
=======
      {/* ── Navbar bar ── */}
>>>>>>> Stashed changes
      <div
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 px-4 sm:px-6 lg:px-8"
      >
        <div
          ref={navbarInnerRef}
          className={`relative bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 mx-auto rounded-[50px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-between px-6 py-3 md:px-10 pointer-events-auto transition-[max-width] duration-[400ms] ease-out ${
            isScrolled ? "max-w-[1088px]" : "max-w-screen-xl"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center relative z-10">
            <img src="cthree-nav.svg" alt="CThree Logo" className="h-10 w-auto md:h-12" />
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6 md:gap-12 relative z-10">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/join-us"
              className="bg-primary text-white font-semibold py-2 px-8 rounded-3xl hover:bg-dark-primary transition-colors duration-200"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            id="mobile-menu-open"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/8 transition-colors duration-200"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00215e" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

<<<<<<< Updated upstream
      {/* ── Mobile Full-screen Menu ── */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-white transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#f0f0f0]">
          <img src="cthree-nav.svg" alt="CThree Logo" className="h-10 w-auto" />
          <button
            id="mobile-menu-close"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/8 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00215e" strokeWidth="2.2" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-8 pt-8 gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={mobileLinkClass(link.to)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="px-8 pb-12">
          <Link
            to="/join-us"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-primary text-white font-urbanist font-bold text-[16px] py-4 rounded-2xl hover:bg-dark-primary transition-colors duration-200 shadow-lg shadow-primary/25"
          >
            Join Us
          </Link>
        </div>
      </div>
=======
      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-[60] flex flex-col bg-white"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#f0f0f0]">
            <img src="cthree-nav.svg" alt="CThree Logo" className="h-10 w-auto" />
            <button
              id="mobile-menu-close"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/8 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00215e" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-8 pt-8 gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={mobileLinkClass(link.to)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-8 pb-12">
            <Link
              to="/join-us"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-primary text-white font-urbanist font-bold text-[16px] py-4 rounded-2xl hover:bg-dark-primary transition-colors duration-200 shadow-lg shadow-primary/25"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
>>>>>>> Stashed changes
    </>
  );
}
