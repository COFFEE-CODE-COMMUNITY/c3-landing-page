import { type JSX } from "react";

const HeroSection = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[85vh] lg:h-[85vh] justify-between pb-10 lg:pb-0">
      <div className="w-full lg:w-1/2 bg-primary lg:rounded-r-full rounded-b-3xl lg:rounded-b-none text-white flex items-center justify-center lg:justify-start p-6 lg:p-10 mb-10 lg:mb-0">
        <div className="flex flex-col gap-6 xxl:gap-10 text-center lg:text-left items-center lg:items-start">
          <h1 className="text-h2 xxl:text-h1">Coffe Code Community</h1>
          <p className="text-h6 text-wrap w-full lg:w-80 font-light px-4 lg:px-0">
            Lorem ipsum dolor sit amet consectetur. Lectus at in arcu dapibus
            ornare quis ante. Morbi nam nulla ornare tempus. Diam porttitor quam
            non pretium tristique. Commodo quisque integer laoreet nam feugiat
            est posuere.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <div className="w-50 h-50 lg:w-70 lg:h-70 rounded-full bg-primary flex items-center justify-center">
          <img src="logo-white.png" className="w-30 lg:w-40" alt="" />
        </div>
      </div>
      <div className="hidden lg:block bg-primary w-15 rounded-l-3xl"></div>
    </div>
  );
};

export default HeroSection;
