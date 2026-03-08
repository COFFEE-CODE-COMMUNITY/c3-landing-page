import { useState } from "react";
import { GROUPS, TEAM_MEMBERS } from "../../../utils/data";
import MemberCard from "./MemberCard";

const Members = () => {
  const [group, setGroup] = useState("FRONTEND");
  const team = TEAM_MEMBERS.find((groups) => groups.role === group);
  return (
    <div className="h-[85vh] flex flex-col relative px-60 gap-5 items-center gap-10">
      <div className="bg-primary w-45 h-45 rounded-full absolute top-0 -left-25"></div>
      <div className="bg-primary w-45 h-45 rounded-full absolute top-0 -right-25"></div>

      <div className="flex flex-col items-center">
        <h2 className="text-h2 font-bold text-primary">
          Cthree Member Information
        </h2>
        <p className="text-h6 text-wrap w-160 text-center font-light">
          Lorem ipsum dolor sit amet consectetur. Metus id faucibus dolor
          tristique vel ante id at. Pulvinar ornare neque dapibus non. Viverra
          sed elementum ipsum morbi egestas at cursus egestas. Posuere dictumst
          amet sit congue odio vulputate at pellentesque in.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="px-20">
          <ul className="flex gap-6">
            {GROUPS.map((group) => (
              <li className="text-h5">{group}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-4 bg-white gap-y-10">
          {team?.members.map((member) => (
            <MemberCard image={member.photoUrl} name={member.name} />
          ))}
        </div>
      </div>

      <div className="bg-orange w-100 h-100 rounded-full absolute -left-40 -bottom-40"></div>
      <div className="bg-yellow w-50 h-50 rounded-full absolute left-30 -bottom-20"></div>

      <div className="bg-orange w-110 h-110 rounded-full absolute -right-40 -bottom-40"></div>
      <div className="bg-yellow w-90 h-90 rounded-full absolute right-0 -bottom-40"></div>
    </div>
  );
};

export default Members;
