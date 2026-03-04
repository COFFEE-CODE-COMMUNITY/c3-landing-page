import { useState } from "react";
import { GROUPS, TEAM_MEMBERS } from "../../../utils/data";

const Members = () => {
  const [group, setGroup] = useState("FRONTEND");
  const team = TEAM_MEMBERS.find((groups) => groups.role === group);
  return (
    <div className="h-[85vh] flex flex-col relative px-60 gap-5">
      <div className="bg-primary w-45 h-45 rounded-full absolute top-0 -left-25"></div>
      <div className="bg-primary w-45 h-45 rounded-full absolute top-0 -right-25"></div>

      <div className="flex flex-col items-center">
        <h3 className="text-h3 font-bold text-primary">
          Cthree Member Information
        </h3>
        <p className="text-h6 text-wrap w-160 text-center">
          Lorem ipsum dolor sit amet consectetur. Metus id faucibus dolor
          tristique vel ante id at. Pulvinar ornare neque dapibus non. Viverra
          sed elementum ipsum morbi egestas at cursus egestas. Posuere dictumst
          amet sit congue odio vulputate at pellentesque in.
        </p>
      </div>
      <div>
        <div>
          <ul className="flex gap-5">
            {GROUPS.map((group) => (
              <li className="text-h5">{group}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-4">
          {team?.members.map((member) => (
            <div className="bg-amber-200">a</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
