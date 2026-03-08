import React from "react";

interface ResearchCardProps {
  image: string;
  tittle: string;
  desc: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ResearchCard = ({ image, tittle, desc, onClick }: ResearchCardProps) => {
  return (
    <div className="border-2 border-black rounded-2xl p-2 flex flex-col relative overflow-hidden">
      <img src={image} alt="" className="w-full h-30" />
      <h4 className="text-h4 text-primary font-semibold">{tittle}</h4>
      <p className="text-h6 font-light">{desc}</p>
      <div className="flex justify-end">
        <button
          className="text-white bg-primary rounded-2xl px-3 py-1 text-h6"
          onClick={onClick}
        >
          Learn More
        </button>
      </div>

      <div className="w-10 h-10 rounded-full bg-orange absolute -bottom-5 left-3"></div>
      <div className="w-12 h-12 rounded-full bg-yellow absolute -bottom-5 left-7"></div>
    </div>
  );
};

export default ResearchCard;
