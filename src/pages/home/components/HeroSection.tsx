import type { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section
      id="home"
      className="relative w-full h-screen pt-32 pb-16 lg:pt-48 lg:pb-24"
    >
      {/* Decorative Ellipses */}
      <div className="absolute left-[-20vw] top-10 w-[40vw] max-w-[500px] aspect-square rounded-full bg-[#00215e] pointer-events-none z-0" />
      <div className="absolute right-[-20vw] top-100 w-[40vw] max-w-[500px] aspect-square rounded-full bg-[#ffaa28] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="font-urbanist font-bold text-[#00215e] text-4xl md:text-5xl lg:text-7xl tracking-tight mb-4 md:mb-6">
          Coffee Code Community
        </h1>
        <h2 className="font-urbanist font-bold text-[#ffaa28] text-2xl md:text-3xl lg:text-4xl tracking-tight mb-6 md:mb-10 max-w-3xl">
          Belajar teknologi dengan <br className="hidden sm:block" /> Santai,
          Konsisten, dan Berdaya Saing!
        </h2>
        <p className="font-urbanist font-normal text-[#858585] text-base md:text-lg lg:text-2xl tracking-tight max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Est tortor ullamcorper
          pellentesque cras aliquam dolor in. Lorem laoreet pulvinar a pharetra
          non. Ultricies felis justo eleifend id in phasellus duis quam
          habitasse.
        </p>
      </div>
    </section>
  );
}
