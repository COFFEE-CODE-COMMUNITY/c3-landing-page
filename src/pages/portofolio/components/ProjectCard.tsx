import React from 'react';

export interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    comingSoon?: boolean;
    visit?: boolean;
    link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, comingSoon, visit, link }) => {
    if (comingSoon) {
        return (
            <div className="w-full h-[300px] md:h-[400px] bg-[#ececec] rounded-[25px] flex items-center justify-center shadow-sm">
                <p className="font-urbanist font-bold text-h3 md:text-h1 text-gray-400">
                    COMING SOON!
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-[120px] w-full min-h-[400px]">
            <div className="flex-1 flex flex-col items-start text-left w-full">
                <h3 className="font-urbanist font-bold text-h3 md:text-[40px] text-primary mb-6">
                    {title}
                </h3>
                <p className="font-urbanist text-h6 md:text-h4 text-gray-500 mb-10 leading-relaxed max-w-3xl">
                    {description}
                </p>
                {visit !== false && (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-primary text-white font-urbanist font-bold text-h5 rounded-full px-8 py-4 hover:bg-[#001a4b] transition-colors shadow-md text-center"
                    >
                        Visit Website
                    </a>
                )}
            </div>
            <div className="w-full lg:w-[687px] h-[300px] lg:h-[400px] rounded-[25px] overflow-hidden shadow-xl flex-shrink-0">
                <img src={imageSrc} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
        </div>
    );
};