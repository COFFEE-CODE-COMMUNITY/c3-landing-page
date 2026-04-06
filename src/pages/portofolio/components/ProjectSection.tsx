import React from 'react';

interface ProjectSectionProps {
    category: string;
    children: React.ReactNode;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ category, children }) => {
    return (
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mb-16 md:mb-24 flex flex-col items-start">
                <h2 className="font-urbanist font-bold text-h3 md:text-h1 text-primary mb-4 leading-tight">
                    {category}
                </h2>
                <div className="h-[5px] w-[287px] bg-orange rounded-[25px]"></div>
            </div>
            <div className="flex flex-col gap-16 md:gap-32 w-full">
                {children}
            </div>
        </section>
    );
};
