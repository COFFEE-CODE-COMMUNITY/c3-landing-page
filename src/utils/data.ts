import nico from "../assets/members/nico.webp";
import akbar from "../assets/members/akbar.webp";
import dwi from "../assets/members/dwi.webp";
import khansa from "../assets/members/khansa.webp";
import maudi from "../assets/members/maudi.webp";
import noProfile from "../assets/members/no-profile.webp";
import fauzi from "../assets/members/Fauzi.webp"
import hanna from "../assets/members/Hanna.webp"
import ryan from "../assets/members/Ryan.webp"
import serena from "../assets/members/Serena.webp"
import taufik from "../assets/members/Taufik.webp"
import aido from "../assets/members/aido.webp"
import ulfi from "../assets/members/Ulfi.webp"
import rafi from "../assets/members/Rafi.webp"


import AI from "../assets/researchs/AI.png";
import Cyber from "../assets/researchs/CyberSecurity.png";
import Webdev from "../assets/researchs/Webdev.png";
import H1 from "../assets/highlights/1.jpg";
import H2 from "../assets/highlights/2.jpg";

interface Member {
  id: number;
  name: string;
  photoUrl: string;
}

interface Highlight {
  id: number;
  photourl: string;
}

interface Group {
  role: string;
  members: Member[];
}

interface Researchs {
  name: string;
  description: string;
  detail: string;
  photourl: string;
}

export const GROUPS = [
  "Game Development",
  "AI & Data Science",
  "Software Engineering",
];

export const TEAM_MEMBERS: Group[] = [
  {
    role: "Game Development",
    members: [
      {
        id: 1,
        name: "Serena Luthfiana Wachyu",
        photoUrl: serena,
      },
      {
        id: 2,
        name: "Dwi Purnama K.",
        photoUrl: dwi,
      },
      {
        id: 3,
        name: "Akbar Karunia Putra",
        photoUrl: akbar,
      },
      {
        id: 4,
        name: "Urbania Rabih Zikri ",
        photoUrl: noProfile,
      },
      {
        id: 5,
        name: "Khansa Noor Jeihan K.",
        photoUrl: khansa,
      },
    ],
  },
  {
    role: "AI & Data Science",
    members: [
      {
        id: 1,
        name: "Aido Nayaka",
        photoUrl: aido,
      },
      {
        id: 2,
        name: "Muhammad Rifky Saputra",
        photoUrl: noProfile,
      },
      {
        id: 3,
        name: "Ulfiah Rohadatul Aisyi",
        photoUrl: ulfi,
      },
      {
        id: 4,
        name: "Adyarafa Almefty",
        photoUrl: noProfile,
      },
      {
        id: 5,
        name: "Muhammad Taufiqurrahman",
        photoUrl: taufik,
      },
      {
        id: 6,
        name: "Muhammad Ryan Handhika S",
        photoUrl: ryan,
      },
      {
        id: 7,
        name: "Muhammad Fauzi",
        photoUrl: fauzi,
      },
      {
        id: 8,
        name: "Hanna Hanifa Maulidina",
        photoUrl: hanna,
      },
    ],
  },
  {
    role: "Software Engineering",
    members: [
      {
        id: 1,
        name: "Maudina Apriliani",
        photoUrl: maudi,
      },
      {
        id: 2,
        name: "Rifky Al Mukmin Rachmat",
        photoUrl: noProfile,
      },
      {
        id: 3,
        name: "Nico Aryawizeda",
        photoUrl: nico,
      },
      {
        id: 4,
        name: "Sauki Putra Raffita",
        photoUrl: noProfile,
      },
      {
        id: 5,
        name: "Farhan Nawwafal Pramudia",
        photoUrl: noProfile,
      },
      {
        id: 6,
        name: "Rafi Asshiddiqie Tanujaya",
        photoUrl: rafi,
      },
    ],
  },
];

export const RESEARCHS_LIST: Researchs[] = [
  {
    name: "Game Development",
    description:
      "Menciptakan pengalaman interaktif melalui perpaduan mekanik permainan, narasi, dan teknologi grafis modern.",
    detail:
      "Bidang ini mengeksplorasi proses kreatif dan teknis dalam membangun dunia digital yang imersif. Mulai dari perancangan gameplay, pengembangan logika menggunakan game engine, hingga optimasi performa perangkat keras. Riset ini bertujuan untuk menghadirkan interaksi yang mulus dan visual yang menarik guna menciptakan pengalaman bermain yang berkesan bagi pengguna di berbagai platform.",
    photourl: Cyber,
  },
  {
    name: "AI & Data Science",
    description:
      "Mengintegrasikan kecerdasan buatan dan analisis data untuk menghasilkan solusi prediktif yang cerdas.",
    detail:
      "Fokus utama riset ini adalah mengolah aset data yang besar menjadi informasi berharga melalui algoritma pembelajaran mesin dan statistika tingkat lanjut. Dengan memanfaatkan kecerdasan buatan, sistem dikembangkan untuk mampu mengenali pola, melakukan klasifikasi secara otomatis, dan memberikan prediksi akurat yang dapat mendukung efisiensi kerja maupun inovasi teknologi di masa depan.",
    photourl: AI,
  },
  {
    name: "Software Engineering",
    description:
      "Penerapan prinsip rekayasa yang sistematis dalam membangun perangkat lunak yang skalabel dan berkualitas tinggi.",
    detail:
      "Mencakup seluruh siklus hidup pengembangan perangkat lunak, mulai dari arsitektur backend, pengembangan antarmuka frontend, hingga pengelolaan infrastruktur cloud. Bidang ini menitikberatkan pada penulisan kode yang bersih, manajemen basis data yang aman, serta penerapan metodologi modern untuk memastikan aplikasi dapat berkembang sesuai kebutuhan pengguna dengan stabilitas yang terjaga.",
    photourl: Webdev,
  },
];

export const HIGHLIGHT: Highlight[] = [
  {
    id: 1,
    photourl: H1,
  },
  {
    id: 2,
    photourl: H2,
  },
];
