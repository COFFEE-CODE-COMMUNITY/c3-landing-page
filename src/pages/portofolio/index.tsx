import React from 'react';
import { HeroSection } from './components/HeroSection';
// import { CallToAction } from './components/CallToAction';
import { ProjectSection } from './components/ProjectSection';
import { ProjectCard } from './components/ProjectCard';
import panggilaja from "../../assets/projects/panggilaja.png"
import finansaku from "../../assets/projects/finansaku.png"
import helthy from "../../assets/projects/heylth.png"
import salingtau from "../../assets/projects/salingtau.png"
import cthreeBot from "../../assets/projects/cthree-bot-1.png"
import cakraBelajar from "../../assets/projects/cakra-belajar.png"

const projects = {
    productInternal: [
        {
            title: "Discord bot",
            description: "Bot Discord pintar yang dirancang untuk membuat pengelolaan server jadi lebih mudah dan interaktif. Mulai dari otomatisasi hingga meningkatkan keterlibatan pengguna, semuanya hadir dalam satu solusi yang praktis.",
            imageSrc: cthreeBot,
        }
    ],
    internal: [
                {
            title: "Panggilaja",
            description: "PanggilAja adalah solusi digital yang membuat keahlian Anda ditemukan, membangun reputasi, dan memberi Anda kendali penuh atas usaha Anda.",
            imageSrc: panggilaja,
        },
        {
            title: "Helthy",
            description: "Pantau pola hidupmu dengan Heylth, aplikasi yang membantu kamu menjaga kesehatan, mencatat aktivitas harian, dan memberikan rekomendasi gaya hidup yang lebih baik.",
            imageSrc: helthy,
        },
        {
            title: "Finansaku",
            description: "Kelola uangmu hidup lebih terencana Dengan finansaku, budgeting jadi cepat dan praktis. Atur uangmu agar setiap rupiah digunakan dengan bijak.",
            imageSrc: finansaku,
        },
        {
            title: "Salingtau",
            description: "Selamat datang di salingtau, ekosistem pembelajaran kolaboratif di mana setiap pertanyaan, jawaban, dan konten yang Anda bagikan akan dihargai.",
            imageSrc: salingtau,
        },
        {
            title: "Cakra Belajar",
            description: "Platform pembelajaran berbasis AI yang membantu siswa memahami materi secara mendalam melalui pendekatan berpikir bertahap, mulai dari memahami hingga menciptakan.",
            imageSrc: cakraBelajar,
        }
    ],
    external: [
        {
            title: "Coming Soon",
            description: "",
            imageSrc: "",
            comingSoon: true,
        }
    ]
};

const PortofolioPage = () => {
    return (
        <div className="bg-[#f8f8ff] min-h-screen w-full flex flex-col overflow-x-hidden font-urbanist -mt-24">
            <main className="flex-grow w-full relative">
                <HeroSection />

                <div className="relative z-20">
                    {/* <CallToAction /> */}
                </div>

                <div className="w-full pt-16 pb-24 md:pb-40 mt-12 bg-white/30 backdrop-blur-sm">
                    <ProjectSection category="Product Internal">
                        {projects.productInternal.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </ProjectSection>

                    <ProjectSection category="Internal Project">
                        {projects.internal.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </ProjectSection>

                    <ProjectSection category="External Project">
                        {projects.external.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </ProjectSection>
                </div>
            </main>
        </div>
    );
};

export default PortofolioPage;
