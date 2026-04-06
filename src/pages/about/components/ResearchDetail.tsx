import React from "react";

interface ResearchDetailProps {
  tittle: string;
  desc: string;
  photo: string;
}

const ResearchDetail = ({ tittle, desc, photo }: ResearchDetailProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-amber-200 z-100 flex items-center justify-center">
      <div className="bg-white w-300 h-110 relative flex px-15 py-7 gap-20 rounded-xl overflow-hidden overflow-auto">
        <div className="bg-primary absolute left-0 top-0 h-full w-10 rounded-r-2xl"></div>
        <div className="bg-primary absolute right-0 top-0 h-full w-10 rounded-l-2xl"></div>

        <div className="flex-1 pl-10 flex-col">
          <button className="bg-primary p-1 rounded-full aspect-square w-8 h-8 text-xl flex justify-center items-center text-white cursor-pointer">
            X
          </button>
          <h2 className="text-h2 font-semibold text-primary">{tittle}</h2>
          <p>{desc}</p>
        </div>

        <img src={photo} className="object-cover w-100 rounded-2xl" />
      </div>
    </div>
  );
};

export default ResearchDetail;
