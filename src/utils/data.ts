import nico from "../assets/members/nico.png";
import akbar from "../assets/members/akbar.png";
import dwi from "../assets/members/dwi.png";
import khansa from "../assets/members/khansa.png";
import maudi from "../assets/members/maudi.png";

import AI from "../assets/researchs/AI.png";
import Backend from "../assets/researchs/Backend.png";
import Cyber from "../assets/researchs/CyberSecurity.png";
import DataScience from "../assets/researchs/DataScience.png";
import DevOps from "../assets/researchs/DevOps.png";
import Mobiledev from "../assets/researchs/Mobiledev.png";
import UI from "../assets/researchs/UI.png";
import Webdev from "../assets/researchs/Webdev.png";

interface Member {
  id: number;
  name: string;
  photoUrl: string;
}

interface Group {
  role: string;
  members: Member[];
}

interface Researchs {
  name: string;
  description: string;
  photourl: string;
}

export const GROUPS = [
  "Frontend",
  "Backend",
  "Cyber Security",
  "Mobile Dev",
  "Game Dev",
  "Data Science",
  "Machine Learning",
];

export const TEAM_MEMBERS: Group[] = [
  {
    role: "FRONTEND",
    members: [
      {
        id: 1,
        name: "Nico Aryawizeda",
        photoUrl: nico,
      },
      {
        id: 2,
        name: "Akbar Karunia Putra",
        photoUrl: akbar,
      },
      {
        id: 3,
        name: "Dwi Purnama K.",
        photoUrl: dwi,
      },
      {
        id: 4,
        name: "Akbar Karunia Putra",
        photoUrl: akbar,
      },
      {
        id: 5,
        name: "Maudi Apriliani",
        photoUrl: maudi,
      },
      {
        id: 6,
        name: "Khansa Noor Jeihan K.",
        photoUrl: khansa,
      },
    ],
  },
];

export const RESEARCHS_LIST: Researchs[] = [
  {
    name: "Data Science",
    description:
      "Turning raw numbers into meaningful stories is the core of this field. It supports better decisions through patterns and predictions.",
    photourl: DataScience,
  },
  {
    name: "Cyber Security",
    description:
      "Protecting digital environments from threats is a growing priority. It ensures systems remain safe, stable, and confidential.",
    photourl: Cyber,
  },
  {
    name: "AI",
    description:
      "Machines that mimic human thinking are changing the world. From automation to smart assistants, the impact is massive.",
    photourl: AI,
  },
  {
    name: "DevOps",
    description:
      "Bridging the gap between developers and IT operations improves workflow. It increases efficiency, speed, and product quality.",
    photourl: DevOps,
  },
  {
    name: "Backend",
    description:
      "The hidden engine behind applications powers everything users see. It handles databases, logic, and secure transactions.",
    photourl: Backend,
  },
  {
    name: "Web Dev",
    description:
      "Crafting modern websites requires both creativity and logic. It blends visuals, structure, and code into digital experiences.",
    photourl: Webdev,
  },
  {
    name: "Mobile Dev",
    description:
      "Building apps for phones demands attention to detail. Smooth interfaces and quick performance are essential in this field.",
    photourl: Mobiledev,
  },
  {
    name: "UI/UX",
    description:
      "Designing with users in mind shapes how products feel. It focuses on clarity, beauty, and intuitive interactions.",
    photourl: UI,
  },
];
