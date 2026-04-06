import type { JSX } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const location = useLocation()
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none pt-4 px-4 sm:px-6 lg:px-8">
      <div className="bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 w-full max-w-screen-xl mx-auto rounded-[50px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-between px-6 py-3 md:px-10 pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="cthree-nav.svg"
            alt="CThree Logo"
            className="h-10 w-auto md:h-12"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 md:gap-12">
          <Link
            to="/"
            className={`${location.pathname.includes("/") ? "font-medium" : "font-light"} font-urbanist  text-[#00215e] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${location.pathname.includes("/about") ? "font-medium" : "font-light"} font-urbanist text-[#858585] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors`}
          >
            About
          </Link>
          <Link
            to="/portofolio"
            className={`${location.pathname.includes("/portofolio") ? "font-medium" : "font-light"} font-urbanist text-[#858585] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors`}
          >
            Portofolio
          </Link>
        </nav>
      </div>
    </div>
  );
}
