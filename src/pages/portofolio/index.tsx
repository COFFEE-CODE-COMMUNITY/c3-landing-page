import React from 'react';
import { HeroSection } from './components/HeroSection';
import { CallToAction } from './components/CallToAction';
import { ProjectSection } from './components/ProjectSection';
import { ProjectCard } from './components/ProjectCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const imgRectangle95 = "http://localhost:3845/assets/40ba6e7cd70c4106790000e32af040a54d40d29b.png";

const projects = {
    productInternal: [
        {
            title: "Cakra Belajar",
            description: "Lorem ipsum dolor sit amet consectetur. Facilisis risus quam habitasse cras suspendisse eleifend feugiat arcu nec. Et id id euismod id amet elit enim. Ornare faucibus vel ut nullam quis semper viverra pharetra. Mattis lectus a non dui blandit aliquam penatibus diam. Egestas id rhoncus id suspendisse aliquam facilisis amet senectus in.",
            imageSrc: imgRectangle95,
        },
        {
            title: "Coming Soon",
            description: "",
            imageSrc: "",
            comingSoon: true,
        }
    ],
    internal: [
        {
            title: "Cakra Belajar",
            description: "Lorem ipsum dolor sit amet consectetur. Facilisis risus quam habitasse cras suspendisse eleifend feugiat arcu nec. Et id id euismod id amet elit enim. Ornare faucibus vel ut nullam quis semper viverra pharetra. Mattis lectus a non dui blandit aliquam penatibus diam. Egestas id rhoncus id suspendisse aliquam facilisis amet senectus in.",
            imageSrc: imgRectangle95,
        }
    ],
    external: [
        {
            title: "Cakra Belajar",
            description: "Lorem ipsum dolor sit amet consectetur. Facilisis risus quam habitasse cras suspendisse eleifend feugiat arcu nec. Et id id euismod id amet elit enim. Ornare faucibus vel ut nullam quis semper viverra pharetra. Mattis lectus a non dui blandit aliquam penatibus diam. Egestas id rhoncus id suspendisse aliquam facilisis amet senectus in.",
            imageSrc: imgRectangle95,
        }
    ]
};

const PortofolioPage = () => {
    return (
        <div className="bg-[#f8f8ff] min-h-screen w-full flex flex-col overflow-x-hidden font-urbanist -mt-24">
            <main className="flex-grow w-full relative">
                <HeroSection />

                <div className="relative z-20">
                    <CallToAction />
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
