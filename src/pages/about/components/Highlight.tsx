import { useEffect, useRef, useState } from "react";
import { HIGHLIGHT } from "../../../utils/data";
import { useScrollFadeInUp, useFloating, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

const Highlight = () => {
  const [number, setNumber] = useState(0);
  const PHOTO = HIGHLIGHT;

  const cardRef = useScrollFadeInUp(0.9, 60);
  const imageRef = useRef<HTMLDivElement>(null);

  const circleLeft = useFloating(4, 20);
  const circleLeftParallax = useParallax(0.15);
  const circleSmall1 = useFloating(3, 10);
  const circleSmall2 = useFloating(3.5, 12);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            setNumber((prev) => (prev === PHOTO.length - 1 ? 0 : prev + 1));
            gsap.fromTo(
              imageRef.current,
              { opacity: 0, scale: 0.95 },
              { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }
            );
          },
        });
      } else {
        setNumber((prev) => (prev === PHOTO.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Circles */}
      <div
        ref={(el) => { if (el) { circleLeft.current = el; circleLeftParallax.current = el; } }}
        className="absolute -left-16 bottom-0 w-40 h-40 lg:w-64 lg:h-64 rounded-full bg-orange pointer-events-none"
      />

      <div ref={cardRef} className="max-w-screen-xl mx-auto relative z-10">
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 flex flex-col lg:flex-row min-h-[400px] relative">
          {/* Floating decorative circles on the card */}
          <div ref={circleSmall1} className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-orange opacity-70 pointer-events-none" />
          <div ref={circleSmall2} className="absolute -top-10 right-1/3 w-24 h-24 rounded-full bg-blue opacity-40 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-orange opacity-60 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }} />

          {/* Left: Text Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-orange rounded-full"></div>
              <span className="font-urbanist font-semibold text-orange text-h7 uppercase tracking-widest">Our Story</span>
            </div>
            <p className="font-urbanist text-white/90 text-h6 md:text-h5 leading-relaxed max-w-lg">
              Di tengah diskusi hangat dan ide-ide kreatif, terlihat adanya
              semangat bersama untuk belajar teknologi programming secara lebih
              mendalam. Beberapa mahasiswa yang telah memiliki pengalaman dalam
              pengembangan teknologi memunculkan gagasan penting. Tokoh inspiratif
              seperti Aido melontarkan ide untuk membuat wadah belajar, dan Rafi
              memulai langkah konkret dengan membentuk kelompok belajar.
            </p>
          </div>

          {/* Right: Image Carousel */}
          <div className="flex-1 relative min-h-[280px] lg:min-h-0">
            <div
              ref={imageRef}
              className="absolute inset-0 bg-gray-400"
              style={{
                backgroundImage: `url(${PHOTO[number].photourl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent lg:from-primary/30 pointer-events-none" />

            {/* Dots indicator */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              {PHOTO.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === number ? "bg-white w-6" : "bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
