interface Member {
  id: number;
  name: string;
  photoUrl: string;
}

interface Group {
  role: string;
  members: Member[];
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
        photoUrl: "/images/andi.jpg",
      },
      {
        id: 2,
        name: "Akbar Karunia Putra",
        photoUrl: "/images/siti.jpg",
      },
      {
        id: 3,
        name: "Dwi Purnama K.",
        photoUrl: "/images/siti.jpg",
      },
      {
        id: 4,
        name: "Akbar Karunia Putra",
        photoUrl: "/images/siti.jpg",
      },
      {
        id: 5,
        name: "Maudi Apriliani",
        photoUrl: "/images/siti.jpg",
      },
      {
        id: 6,
        name: "Khansa Noor Jeihan K.",
        photoUrl: "/images/siti.jpg",
      },
    ],
  },
];
