import type { JSX } from "react";
import { useStaggerChildren, useFadeInUp } from "../../../utils/animations";

const benefits = [
  {
    icon: "☕",
    title: "Coffee Chat Rutin",
    desc: "Ngobrol santai bareng member lain soal teknologi, karier, dan kehidupan—sambil ngopi, tentu saja.",
    color: "from-primary/10 to-primary/5",
    border: "border-primary/10",
    iconBg: "bg-primary/10",
  },
  {
    icon: "💡",
    title: "Study Group & Mentoring",
    desc: "Belajar lebih cepat dengan sistem belajar berkelompok dan mentor berpengalaman dari industri.",
    color: "from-orange/10 to-orange/5",
    border: "border-orange/15",
    iconBg: "bg-orange/10",
  },
  {
    icon: "🚀",
    title: "Proyek Kolaboratif",
    desc: "Bangun portofolio nyata lewat proyek tim yang langsung berdampak dan bisa dibanggakan.",
    color: "from-yellow/20 to-yellow/5",
    border: "border-yellow/20",
    iconBg: "bg-yellow/20",
  },
  {
    icon: "🌐",
    title: "Jaringan yang Luas",
    desc: "Terhubung dengan ratusan member dari berbagai latar belakang dan kota di seluruh Indonesia.",
    color: "from-blue/10 to-blue/5",
    border: "border-blue/15",
    iconBg: "bg-blue/10",
  },
  {
    icon: "🎉",
    title: "Event & Workshop",
    desc: "Ikuti workshop, hackathon, dan tech talk eksklusif yang dirancang untuk mempercepat pertumbuhanmu.",
    color: "from-primary/10 to-primary/5",
    border: "border-primary/10",
    iconBg: "bg-primary/10",
  },
  {
    icon: "📈",
    title: "Akses Konten & Resource",
    desc: "Dapatkan akses ke materi belajar, template, dan resource eksklusif dari komunitas kami.",
    color: "from-orange/10 to-orange/5",
    border: "border-orange/15",
    iconBg: "bg-orange/10",
  },
];

const BenefitsSection = (): JSX.Element => {
  const titleRef = useFadeInUp(1.0, 0, 50);
  const subtitleRef = useFadeInUp(1.0, 0.15, 40);
  const cardsRef = useStaggerChildren(0.12, 0.8, 50);

  return (
    <section
      id="benefits"
      className="relative w-full bg-[#F8F8FF] py-24 px-6 sm:px-10 lg:px-8 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div
            ref={titleRef}
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-5 py-2 mb-2"
          >
            <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            <span className="font-urbanist font-semibold text-h7 text-primary tracking-widest uppercase">
              Kenapa Bergabung?
            </span>
          </div>
          <h2
            ref={titleRef}
            className="font-urbanist font-bold text-primary text-h3 md:text-h2 tracking-tight leading-tight"
          >
            Manfaat Menjadi Member C3
          </h2>
          <p
            ref={subtitleRef}
            className="font-urbanist font-normal text-[#666] text-h6 md:text-h5 max-w-2xl mx-auto leading-relaxed"
          >
            Lebih dari sekadar komunitas—kami adalah ekosistem pertumbuhan bagi setiap orang yang ingin
            berkembang di dunia teknologi.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`group relative bg-gradient-to-br ${benefit.color} border ${benefit.border} rounded-3xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${benefit.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Text */}
              <h3 className="font-urbanist font-bold text-primary text-h5 mb-2 tracking-tight">
                {benefit.title}
              </h3>
              <p className="font-urbanist font-normal text-[#666] text-h7 leading-relaxed">
                {benefit.desc}
              </p>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00215e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l10-10M7 7h10v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[900px] h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" />
    </section>
  );
};

export default BenefitsSection;
