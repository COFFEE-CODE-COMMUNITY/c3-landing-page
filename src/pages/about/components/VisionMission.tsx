import { useState, type JSX } from "react";

const VisionMission = (): JSX.Element => {
  const [vission, setVission] = useState(true);
  return (
    <div className="min-h-[85vh] lg:h-[85vh] relative px-5 lg:px-50 py-10 lg:py-20 flex flex-col justify-center">
      <div className="bg-yellow w-20 h-20 lg:w-45 lg:h-45 rounded-full absolute top-0 -left-10 lg:-left-25"></div>

      <div className="flex flex-col lg:flex-row h-full gap-10 lg:gap-0 mt-10 lg:mt-0 relative z-10">
        <div className="border-gray-600 border-b-2 lg:border-b-0 lg:border-r-1 pb-5 lg:pb-0 lg:pr-10 w-full lg:w-auto flex justify-center lg:justify-start">
          <ul className="text-h4 space-y-0 lg:space-y-2 w-full lg:w-20 flex lg:flex-col justify-around lg:justify-start">
            <li
              className={`${vission ? "font-bold text-primary" : "font-light"} cursor-pointer`}
              onClick={() => (vission ? null : setVission(true))}
            >
              Vision
            </li>
            <li
              className={`${!vission ? "font-bold text-primary" : "font-light"} cursor-pointer`}
              onClick={() => (vission ? setVission(false) : null)}
            >
              Mission
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-3 px-5 lg:px-20 text-center lg:text-left items-center lg:items-start">
          {vission ? (
            <h3 className="text-h3 text-primary font-semibold">
              CThree Vision
            </h3>
          ) : (
            <h3 className="text-h3 text-primary font-semibold">
              CThree Mission
            </h3>
          )}
          {vission ? (
            <p className="text-h6">
              Menjadi ekosistem kolaboratif yang melahirkan inovator teknologi
              unggul, adaptif, dan siap memimpin transformasi digital di
              industri global."
            </p>
          ) : (
            <p className="text-h6">
              1. Continuous Learning: Menyelenggarakan ruang belajar yang
              berkelanjutan untuk mendalami teknologi terbaru guna memperkecil
              celah antara kurikulum akademis dan kebutuhan industri.
              2.Interdisciplinary Collaboration: Membangun budaya kolaborasi
              antar berbagai disiplin ilmu untuk menciptakan solusi teknologi
              yang inklusif dan inovatif. 3. Healthy Competition: Mendorong
              semangat kompetisi yang sehat melalui proyek nyata dan perlombaan
              guna mengasah ketajaman teknis dan mentalitas profesional. 4.
              Professional Readiness: Mempersiapkan setiap anggota dengan hard
              skill dan soft skill yang relevan agar mampu bersaing serta
              berkolaborasi langsung dengan para profesional dan perusahaan
              teknologi.
            </p>
          )}
        </div>
      </div>

      <div className="bg-primary w-20 h-20 lg:w-45 lg:h-45 rounded-full absolute bottom-0 -right-10 lg:-right-25"></div>
    </div>
  );
};

export default VisionMission;
