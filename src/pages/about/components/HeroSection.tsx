import { type JSX } from "react";

const HeroSection = (): JSX.Element => {
  return (
    <div className="flex h-[85vh] justify-between">
      <div className="w-1/2 bg-primary rounded-r-full text-white flex items-center p-10">
        <div className="flex flex-col gap-6 xxl:gap-10">
          <h1 className="text-h2 xxl:text-h1">Coffe Code Community</h1>
          <p className="text-h6 text-wrap w-80 font-light">
            Lorem ipsum dolor sit amet consectetur. Lectus at in arcu dapibus
            ornare quis ante. Morbi nam nulla ornare tempus. Diam porttitor quam
            non pretium tristique. Commodo quisque integer laoreet nam feugiat
            est posuere.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-70 h-70 rounded-full bg-primary flex items-center justify-center">
          <img src="logo-white.png" className="w-40" alt="" />
        </div>
      </div>
      <div className="bg-primary w-15 rounded-l-3xl"></div>
    </div>
  );
};

export default HeroSection;
