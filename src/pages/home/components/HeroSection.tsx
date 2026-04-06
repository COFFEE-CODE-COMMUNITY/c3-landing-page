import type { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section
      id="home"
      className="relative w-full h-screen pt-32 pb-16 lg:pt-48 lg:pb-24"
    >
      {/* Decorative Ellipses */}
      <div className="absolute left-[-20vw] top-10 w-[40vw] max-w-[500px] aspect-square rounded-full bg-primary pointer-events-none z-0" />
      <div className="absolute right-[-20vw] top-100 w-[40vw] max-w-[500px] aspect-square rounded-full bg-orange pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight mb-4 md:mb-6">
          Coffee Code Community
        </h1>
        <h2 className="font-urbanist font-bold text-orange text-h4 md:text-h3 lg:text-h3 tracking-tight mb-6 md:mb-10 max-w-3xl">
          Belajar teknologi dengan <br className="hidden sm:block" /> Santai,
          Konsisten, dan Berdaya Saing!
        </h2>
        <p className="font-urbanist font-normal text-[#858585] text-h6 md:text-h5 lg:text-h4 tracking-tight max-w-4xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Est tortor ullamcorper
          pellentesque cras aliquam dolor in. Lorem laoreet pulvinar a pharetra
          non. Ultricies felis justo eleifend id in phasellus duis quam
          habitasse.
        </p>
      </div>
    </section>
  );
}