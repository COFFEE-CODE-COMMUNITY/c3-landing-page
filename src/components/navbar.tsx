import type { JSX } from "react";

export default function Navbar(): JSX.Element {
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
          <a
            href="/"
            className="font-urbanist font-medium text-[#00215e] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="font-urbanist font-light text-[#858585] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors"
          >
            About
          </a>
          <a
            href="/portofolio"
            className="font-urbanist font-light text-[#858585] text-base md:text-lg lg:text-xl tracking-tight hover:text-c3-yellow transition-colors"
          >
            Portofolio
          </a>
        </nav>
      </div>
    </div>
  );
}
