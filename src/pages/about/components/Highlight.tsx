import React from "react";

const Highlight = () => {
  return (
    <div className="h-[50vh] flex justify-center items-center relative">
      <div className="w-60 h-60 bg-orange rounded-full absolute bottom-0 -left-30"></div>

      <div className="bg-dark-primary flex w-350 rounded-xl gap-20 h-100 overflow-hidden">
        <div className="w-200 px-20 bg-primary flex items-center relative">
          <div className="w-20 h-20 bg-orange rounded-full absolute -top-10 -left-10"></div>
          <div className="w-50 h-50 bg-blue rounded-full absolute -top-25 right-0"></div>

          <p className="text-white text-h7 font-light text-wrap w-110">
            Di tengah diskusi hangat dan ide-ide kreatif, terlihat adanya
            semangat bersama untuk belajar teknologi programming secara lebih
            mendalam. Beberapa mahasiswa yang telah memiliki pengalaman dalam
            pengembangan teknologi memunculkan gagasan penting. Tokoh inspiratif
            seperti Aido melontarkan ide untuk membuat wadah belajar, dan Rafi
            memulai langkah konkret dengan membentuk kelompok belajar.{" "}
          </p>
        </div>
        <div className="w-200 bg-primary p-8 relative">
          <div className="w-20 h-20 bg-orange rounded-full absolute -top-10 -right-10"></div>
          <div className="bg-gray-400 h-full w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
