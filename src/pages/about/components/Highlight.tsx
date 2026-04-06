import React from "react";

const Highlight = () => {
  return (
    <div className="h-auto min-h-[50vh] lg:h-[50vh] flex justify-center items-center relative py-10 lg:py-0">
      <div className="w-20 h-20 lg:w-60 lg:h-60 bg-orange rounded-full absolute bottom-0 -left-10 lg:-left-30"></div>

      <div className="bg-dark-primary flex flex-col lg:flex-row w-[90%] lg:w-350 rounded-xl gap-10 lg:gap-20 h-auto lg:h-100 overflow-hidden relative z-10">
        <div className="w-full lg:w-200 px-6 lg:px-20 py-10 lg:py-0 bg-primary flex items-center justify-center lg:justify-start relative">
          <div className="w-10 h-10 lg:w-20 lg:h-20 bg-orange rounded-full absolute -top-5 lg:-top-10 -left-5 lg:-left-10"></div>
          <div className="w-20 h-20 lg:w-50 lg:h-50 bg-blue rounded-full absolute -top-10 lg:-top-25 right-0"></div>

          <p className="text-white text-h7 font-light text-center lg:text-left text-wrap w-full lg:w-110">
            Di tengah diskusi hangat dan ide-ide kreatif, terlihat adanya
            semangat bersama untuk belajar teknologi programming secara lebih
            mendalam. Beberapa mahasiswa yang telah memiliki pengalaman dalam
            pengembangan teknologi memunculkan gagasan penting. Tokoh inspiratif
            seperti Aido melontarkan ide untuk membuat wadah belajar, dan Rafi
            memulai langkah konkret dengan membentuk kelompok belajar.{" "}
          </p>
        </div>
        <div className="w-full lg:w-200 bg-primary p-4 lg:p-8 relative h-60 lg:h-auto">
          <div className="w-10 h-10 lg:w-20 lg:h-20 bg-orange rounded-full absolute -top-5 lg:-top-10 -right-5 lg:-right-10"></div>
          <div className="bg-gray-400 h-full w-full rounded-xl lg:rounded-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
