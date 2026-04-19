import { type JSX, useState, useEffect } from "react";
import { useFadeInUp, useFloating, useParallax } from "../../../utils/animations";

// ─── Countdown Logic ────────────────────────────────────────────────────────────
const TARGET_DATE = new Date("2026-04-25T00:00:00+07:00");

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// ─── Countdown Unit ─────────────────────────────────────────────────────────────
function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex items-center justify-center rounded-2xl overflow-hidden bg-primary shadow-xl shadow-primary/35">
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
        <div className="absolute left-3 right-3 top-1/2 h-px bg-black/10" />
        <span className="relative z-10 font-urbanist font-bold text-[2.2rem] sm:text-[2.6rem] leading-none text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-urbanist font-semibold text-[10px] uppercase tracking-[0.14em] text-[#999]">
        {label}
      </span>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
const HeroSection = (): JSX.Element => {
  const badgeRef = useFadeInUp(0.8, 0.08, 20);
  const headingRef = useFadeInUp(1.0, 0.22, 50);
  const subRef = useFadeInUp(1.0, 0.34, 35);
  const btnRef = useFadeInUp(1.0, 0.46, 25);
  const countRef = useFadeInUp(1.0, 0.3, 40);

  const bgL = useFloating(6, 25);
  const bgR = useFloating(5, 20);
  const pxL = useParallax(0.08);
  const pxR = useParallax(0.12);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const isExpired = Object.values(timeLeft).every((v) => v === 0);

  return (
    <section
      id="join-hero"
      className="relative w-full h-screen flex items-center justify-center mt-24 md:-mt-20"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F8FF] via-white to-[#eef0ff] z-0 pointer-events-none" />

      {/* blobs */}
      <div
        ref={(el) => { if (el) { bgL.current = el; pxL.current = el; } }}
        className="absolute -left-[14vw] top-[5%] w-[38vw] max-w-[500px] aspect-square rounded-full bg-primary/8 pointer-events-none z-0"
      />
      <div
        ref={(el) => { if (el) { bgR.current = el; pxR.current = el; } }}
        className="absolute -right-[12vw] bottom-[8%] w-[34vw] max-w-[440px] aspect-square rounded-full bg-orange/10 pointer-events-none z-0"
      />

      {/* dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #00215e 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: Text + CTA ── */}
        <div className="flex flex-col items-start gap-5">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-primary/6 border border-primary/15 rounded-full px-4 py-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            <span className="font-urbanist font-semibold text-[11px] text-primary tracking-[0.18em] uppercase">
              Open Recruitment 2026
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="font-urbanist font-bold text-primary text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] tracking-tight leading-[1.08]"
          >
            Jadilah Bagian<br />
            dari <span className="text-orange">Komunitas</span>{" "}
            Kami
          </h1>

          {/* Subheading */}
          <p
            ref={subRef}
            className="font-urbanist text-[#666] text-[15px] sm:text-[16px] leading-relaxed max-w-md"
          >
            Tumbuh bersama, belajar lebih cepat, dan wujudkan impian teknologimu bersama ratusan anggota aktif.
          </p>

          {/* CTA buttons */}
          <div
            ref={btnRef}
            className="flex flex-col sm:flex-row items-start gap-3 mt-2"
          >
            <a
              href="#join-form"
              id="join-cta-primary"
              className="inline-flex items-center gap-2.5 bg-primary text-white font-urbanist font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-dark-primary transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 group"
            >
              Daftar Sekarang
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#benefits"
              id="join-learn-more"
              className="inline-flex items-center gap-2 font-urbanist font-semibold text-[15px] text-primary border-2 border-primary/20 px-7 py-3.5 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* ── Right: Countdown ── */}
        <div
          ref={countRef}
          className="flex flex-col items-center lg:items-end gap-5"
        >
          {/* Card wrapper */}
          <div className="w-full max-w-sm lg:max-w-none md:bg-white/70 md:backdrop-blur-sm md:border border-white md:shadow-xl md:shadow-primary/8 rounded-3xl px-8 py-9 flex flex-col items-center gap-6">
            {/* top label */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="inline-flex items-center gap-1.5 bg-orange/10 border border-orange/20 rounded-full px-3.5 py-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-urbanist font-semibold text-[10px] uppercase tracking-[0.16em] text-orange">
                  {isExpired ? "Pendaftaran Ditutup" : "Pendaftaran Ditutup Dalam"}
                </span>
              </div>
            </div>

            {/* digits */}
            {!isExpired ? (
              <div className="flex items-end gap-2.5 sm:gap-3">
                <CountUnit value={timeLeft.days} label="Hari" />
                <span className="font-urbanist font-bold text-3xl text-primary/20 pb-6 select-none">:</span>
                <CountUnit value={timeLeft.hours} label="Jam" />
                <span className="font-urbanist font-bold text-3xl text-primary/20 pb-6 select-none">:</span>
                <CountUnit value={timeLeft.minutes} label="Menit" />
                <span className="font-urbanist font-bold text-3xl text-primary/20 pb-6 select-none">:</span>
                <CountUnit value={timeLeft.seconds} label="Detik" />
              </div>
            ) : (
              <p className="font-urbanist font-semibold text-[#888] text-sm text-center">
                Pendaftaran telah berakhir.<br />Pantau terus untuk batch berikutnya!
              </p>
            )}

            {/* date */}
            <div className="w-full border-t border-primary/8 pt-4 flex items-center justify-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-urbanist text-[12px] text-[#bbb]">
                Batas akhir:{" "}
                <span className="font-semibold text-primary/60">25 April 2026</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave Divider ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F8F8FF" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
