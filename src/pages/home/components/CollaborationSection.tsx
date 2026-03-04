import React from 'react';

function CollabCard() {
  return (
    <div className="flex flex-col sm:flex-row w-full rounded-[25px] overflow-hidden shadow-lg bg-[#00215e]">

      {/* Text Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center z-10 w-full sm:w-1/2">
        <p className="font-urbanist font-bold text-[#ffe028] text-xl md:text-2xl tracking-tight">
          BrandonKun
        </p>
        <p className="font-urbanist font-semibold text-[#255abc] text-lg md:text-xl tracking-tight mt-1">
          Work at Fisallia Pharmacy
        </p>
        <p className="font-urbanist font-normal text-white text-base tracking-tight mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. In nulla phasellus eu in tincidunt pharetra risus. Nam turpis pretium dolor laoreet egestas urna est.
        </p>
      </div>

      {/* Image & Decorative */}
      <div className="flex-1 sm:w-1/2 relative bg-[#001a4b] min-h-[250px] sm:min-h-0 overflow-hidden flex items-end justify-center rounded-bl-[50px] sm:rounded-bl-none sm:rounded-tr-[50px]">
        {/* Decorative ellipses */}
        <div className="absolute right-0 top-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#1e44a0] opacity-75 transform translate-x-1/4 -translate-y-1/4 pointer-events-none z-0" />
        <div className="absolute right-0 top-0 w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#255abc] transform translate-x-1/2 translate-y-1/4 pointer-events-none z-0" />

        {/* Person image */}
        <div className="relative w-2/3 max-w-[250px] sm:max-w-full sm:w-5/6 h-auto flex flex-col justify-end z-10 bottom-0 pt-6">
          <img
            alt="Satisfied Client"
            className="w-full h-auto object-contain block drop-shadow-md"
            src="/person.png"
          />
        </div>
      </div>
    </div>
  );
}

export default function CollaborationSection() {
  return (
    <section className="relative w-full -mt-20 z-10 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative yellow circle — bridges into the section below */}
      {/* <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#ffaa28] pointer-events-none z-0" /> */}

      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col items-center">
        <h2 className="font-urbanist font-bold text-[#00215e] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-10 text-center">
          Collaboration With
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
          <CollabCard />
          <CollabCard />
          <CollabCard />
          <CollabCard />
        </div>
      </div>
    </section>
  );
}
