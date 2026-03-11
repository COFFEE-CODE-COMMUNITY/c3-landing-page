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
      <div className="px-5 lg:px-30 h-auto min-h-[105vh] lg:h-[140vh] py-10 lg:py-0 relative flex flex-col gap-10 lg:gap-15 justify-center">
        <div className="hidden lg:block bg-primary absolute w-10 left-0 top-30 bottom-0 h-auto rounded-r-2xl"></div>
        <div className="hidden lg:block bg-primary absolute w-10 right-0 top-30 bottom-0 h-auto rounded-tl-2xl rounded-bl-2xl"></div>

        <div className="text-center lg:text-left z-10 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 z-10 relative">
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
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-100 flex items-center justify-center p-4">
          <div className="bg-white w-full lg:w-300 h-auto lg:h-110 max-h-[90vh] relative flex flex-col-reverse lg:flex-row px-5 lg:px-15 py-7 gap-5 lg:gap-20 rounded-xl overflow-y-auto lg:overflow-hidden">
            <div className="hidden lg:block bg-primary absolute left-0 top-0 h-full w-10 rounded-r-2xl"></div>
            <div className="hidden lg:block bg-primary absolute right-0 top-0 h-full w-10 rounded-l-2xl"></div>

            <div className="flex-1 lg:pl-10 flex flex-col gap-4">
              <button
                className="bg-primary p-1 rounded-full aspect-square w-8 h-8 text-xl flex justify-center items-center text-white self-end lg:self-start lg:absolute top-5 right-5 z-20"
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
              className="object-cover w-full lg:w-100 h-60 lg:h-auto rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Researchs;
