import { useState, type JSX } from "react";

const VisionMission = (): JSX.Element => {
  const [vission, setVission] = useState(true);
  return (
    <div className="h-[85vh] relative px-90 py-20">
      <div className="bg-yellow w-45 h-45 rounded-full absolute top-0 -left-25"></div>

      <div className="flex h-full">
        <div className="border-gray-600 border-r-1 pr-10">
          <ul className="text-h4 space-y-2 w-20">
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
        <div className="flex-1 flex flex-col gap-3 px-20">
          <h3 className="text-h3 text-primary font-semibold">CThree Vision</h3>
          <p className="text-h6">
            Coffee Code Community is an independent technology non-profit
            community focused on continuous learning, interdisciplinary
            collaboration, and healthy competition to shape innovators who are
            ready to compete and collaborate with professionals and companies in
            the tech industry.
          </p>
        </div>
      </div>

      <div className="bg-primary w-45 h-45 rounded-full absolute bottom-0 -right-25"></div>
    </div>
  );
};

export default VisionMission;
