export const CallToAction = () => {
    return (
        <section className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 z-20 -mt-32">
            <div className="bg-primary rounded-[25px] overflow-hidden relative flex flex-col items-center justify-center py-20 px-6 md:py-32 md:px-24 text-center shadow-2xl">
                {/* Background Decorative Elements */}
                {/* Right side darker block */}
                <div className="absolute right-0 top-0 w-[100px] md:w-[150px] h-full bg-[#001a4b]"></div>
                {/* Bottom yellow line */}
                <div className="absolute left-0 bottom-0 w-full h-[5px] bg-yellow"></div>

                {/* Decorative Ellipses (SVG Placeholders) */}
                <div className="absolute -left-20 -top-20 w-[300px] h-[300px] opacity-20 pointer-events-none">
                    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="150" r="150" fill="url(#paint0_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="150" y1="0" x2="150" y2="300" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" stopOpacity="0.5" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="font-urbanist font-bold text-h3 md:text-h2 text-white mb-6">
                        Let’s Work Together
                    </h2>
                    <p className="font-urbanist text-h6 md:text-h4 text-white hover:text-white/90 transition-colors mb-12 max-w-2xl leading-relaxed">
                        We’re on a mission to grow, create, and collaborate.
                        <br className="hidden md:block" />
                        Check out our proposal to learn more about our team, our work, and how you can be part of it.
                    </p>
                    <button className="border-3 border-orange text-orange font-urbanist font-bold text-h5 md:text-h4 rounded-full px-10 py-5 hover:bg-orange hover:text-white transition-all duration-300">
                        Download Proposal
                    </button>
                </div>
            </div>
        </section>
    );
};
