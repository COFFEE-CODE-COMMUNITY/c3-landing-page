import React, { useState } from "react";
import { RESEARCHS_LIST } from "../../../utils/data";
import ResearchCard from "./ResearchCard";
import ResearchDetail from "./ResearchDetail";

interface ResearchDetail {
  desc: string;
  image: string;
  tittle: string;
}

const Researchs = () => {
  const [research, setResearch] = useState<ResearchDetail | null>(null);
  console.log(research);
  return (
    <>
      <div className="px-90 h-[85vh] relative flex flex-col gap-15 overflow-hidden">
        <div className="bg-primary absolute w-10 left-0 top-30 bottom-0 h-full rounded-r-2xl"></div>
        <div className="bg-primary absolute w-10 right-0 top-30 bottom-0 h-full rounded-l-2xl"></div>

        <div>
          <h2 className="text-h2 text-primary font-bold">
            Technology Research
          </h2>
          <p className="font-light text-h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            illum repellendus odit praesentium aliquid laborum fugit sapiente
            suscipit, culpa officiis! Non, quod impedit expedita vel id aliquid?
            Delectus, molestiae quisquam?
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {RESEARCHS_LIST.map((research) => (
            <ResearchCard
              desc={research.description}
              image={research.photourl}
              tittle={research.name}
              onClick={() =>
                setResearch({
                  desc: research.description,
                  image: research.photourl,
                  tittle: research.name,
                })
              }
            />
          ))}
        </div>
      </div>

      {research && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-100 flex items-center justify-center">
          <div className="bg-white w-300 h-110 relative flex px-15 py-7 gap-20 rounded-xl overflow-hidden">
            <div className="bg-primary absolute left-0 top-0 h-full w-10 rounded-r-2xl"></div>
            <div className="bg-primary absolute right-0 top-0 h-full w-10 rounded-l-2xl"></div>

            <div className="flex-1 pl-10 flex-col">
              <button
                className="bg-primary p-1 rounded-full aspect-square w-8 h-8 text-xl flex justify-center items-center text-white"
                onClick={() => setResearch(null)}
              >
                X
              </button>
              <h2 className="text-h2 font-semibold text-primary">
                {research?.tittle}
              </h2>
              <p>{research?.desc}</p>
            </div>

            <img
              src={research?.image}
              className="object-cover w-100 rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Researchs;
