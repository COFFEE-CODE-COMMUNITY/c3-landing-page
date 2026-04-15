import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useScrollFadeInUp, useStaggerChildren } from '../utils/animations';

export default function Footer() {
  const footerRef = useScrollFadeInUp(0.8, 60);
  const socialRef = useStaggerChildren(0.1, 0.6, 30);
  const linksRef = useStaggerChildren(0.1, 0.6, 30);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#00215e] w-full pt-16 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8 text-[#f8f8ff]"
    >

      {/* Background Decorative Ellipse (CSS Only) */}
      <div className="absolute top-1/2 left-0 -translate-x-[40%] -translate-y-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] rounded-full bg-[#001A4B] pointer-events-none z-0"></div>

      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">

        {/* Decorative B shape */}
        <div className="hidden lg:flex w-[200px] xl:w-[300px] flex-shrink-0 justify-center">
          <img src="/footer-logo.png" alt="B Shape" className="w-full h-50 object-contain drop-shadow-lg" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col md:flex-row justify-between gap-12 lg:gap-20">

          {/* Info & Socials */}
          <div className="flex flex-col gap-8 md:gap-12 w-full md:max-w-[320px]">
            <div className="flex flex-col gap-6 font-dmsans font-normal text-base md:text-lg">
              <p className="opacity-80 leading-relaxed">
                Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just insight
              </p>
              <div className="flex flex-col gap-2">
                <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer underline">coffeecodecommunity@gmail.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div
              ref={socialRef}
              className="flex items-center gap-6 text-xl relative z-20"
            >
              <a href="#" className="hover:text-c3-yellow transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-c3-yellow transition-colors"><FaLinkedin /></a>
            </div>
          </div>

          {/* Links Section */}
          <div
            ref={linksRef}
            className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-32 text-base relative z-20"
          >

            {/* Product Links */}
            <div className="flex flex-col gap-4">
              <p className="font-dmsans font-bold text-lg mb-2">Project</p>
              <div className="flex flex-col gap-3 font-dmsans font-medium opacity-60">
                <a href="#" className="hover:opacity-100 transition-opacity">Panggilaja</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Healthy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Finansaku</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Virtual Users</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Salingtau</a>
              </div>
            </div>

            {/* Explore Links */}
            <div className="flex flex-col gap-4">
              <p className="font-dmsans font-bold text-lg mb-2">Explore</p>
              <div className="flex flex-col gap-3 font-dmsans font-medium opacity-60">
                <a href="#" className="hover:opacity-100 transition-opacity">Resources</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Blog</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Documents</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}