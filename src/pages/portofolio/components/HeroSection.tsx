export const HeroSection = () => {
  return (
    // Menghapus overflow-hidden dan bg-[#f8f8ff] agar lingkaran bisa overlap
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-48">

      {/* --- Pure CSS Circles --- */}
      {/* Lingkaran 1: Pojok Kiri Atas */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-orange z-0 pointer-events-none"></div>

      {/* Lingkaran 2: Pojok Kiri Bawah */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[150px] h-[150px] rounded-full bg-primary z-0 pointer-events-none"></div>

      {/* Lingkaran 3: Pojok Kanan Atas */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary z-0 pointer-events-none"></div>

      {/* Lingkaran 4: Pojok Kanan Bawah */}
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-yellow z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-0">
        <h1 className="font-urbanist font-bold text-h2 md:text-h1 tracking-tight mb-8">
          <span className="text-primary leading-tight">Talent Meets Vision. </span>
          <br className="hidden md:block" />
          <span className="text-orange leading-tight">Let’s Build</span>
        </h1>
        <p className="font-urbanist text-h6 md:text-h4 text-gray-500 leading-relaxed max-w-3xl text-center">
          From freelance projects to full-scale platforms. We code, we collaborate, we deliver.
          <br className="hidden md:block" />
          Join our developer community or reach out to start building with us.
        </p>
      </div>
    </section>
  );
};