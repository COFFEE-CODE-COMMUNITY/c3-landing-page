import { useState } from "react";
import { GROUPS, TEAM_MEMBERS } from "../../../utils/data";
import MemberCard from "./MemberCard";

const Members = () => {
  const [group, setGroup] = useState("FRONTEND");
  const team = TEAM_MEMBERS.find((groups) => groups.role === group);
  return (
    <div className="h-auto min-h-[85vh] lg:h-[85vh] overflow-hidden lg:overflow-visible flex flex-col relative px-5 lg:px-60 py-10 lg:py-0 items-center gap-10">
      <div className="bg-primary w-20 h-20 lg:w-45 lg:h-45 rounded-full absolute top-0 -left-10 lg:-left-25 hidden lg:block"></div>
      <div className="bg-primary w-20 h-20 lg:w-45 lg:h-45 rounded-full absolute top-0 -right-10 lg:-right-25 hidden lg:block"></div>

      <div className="flex flex-col items-center">
        <h2 className="text-h3 lg:text-h2 font-bold text-primary text-center">
          Cthree Member Information
        </h2>
        <p className="text-h6 text-wrap w-full lg:w-160 text-center font-light mt-4">
          Lorem ipsum dolor sit amet consectetur. Metus id faucibus dolor
          tristique vel ante id at. Pulvinar ornare neque dapibus non. Viverra
          sed elementum ipsum morbi egestas at cursus egestas. Posuere dictumst
          amet sit congue odio vulputate at pellentesque in.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="px-5 lg:px-20 overflow-x-auto w-full max-w-[90vw] lg:max-w-none pb-4 lg:pb-0">
          <ul className="flex gap-6 w-max mx-auto">
            {GROUPS.map((group) => (
              <li className="text-h6 lg:text-h5 whitespace-nowrap">{group}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-transparent lg:bg-white gap-x-2 lg:gap-x-0 gap-y-10 z-10 relative w-full lg:w-auto">
          {team?.members.map((member) => (
            <MemberCard image={member.photoUrl} name={member.name} />
          ))}
        </div>
      </div>

      <div className="bg-orange w-100 h-100 rounded-full absolute -left-40 -bottom-40 hidden lg:block"></div>
      <div className="bg-yellow w-50 h-50 rounded-full absolute left-30 -bottom-20 hidden lg:block"></div>

      <div className="bg-orange w-110 h-110 rounded-full absolute -right-40 -bottom-40 hidden lg:block"></div>
      <div className="bg-yellow w-90 h-90 rounded-full absolute right-0 -bottom-40 hidden lg:block"></div>
    </div>
  );
};

export default Members;
