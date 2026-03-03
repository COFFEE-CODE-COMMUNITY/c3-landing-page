import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiVimeo } from 'react-icons/si';

const imgEllipse18 = "http://localhost:3845/assets/677171de07a748d5dbdea21cde0518e38c4796fd.svg";
const imgB = "http://localhost:3845/assets/d520aaf9891721b90761b9f360789445e9d5833c.svg";

export default function Footer() {
  return (
    <footer className="relative bg-[#00215e] w-full mt-20 pt-16 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8 text-[#f8f8ff]">
      
      {/* Background Decorative Ellipse */}
      <div className="absolute left-[-20%] md:left-[-10%] top-[-50%] w-[80%] md:w-[60%] lg:w-[40%] max-w-[800px] aspect-square pointer-events-none opacity-20 lg:opacity-100 z-0">
        <img src={imgEllipse18} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">
        
        {/* Decorative B shape */}
        <div className="hidden lg:flex w-[200px] xl:w-[300px] flex-shrink-0 justify-center">
          <img src={imgB} alt="B Shape" className="w-full h-auto object-contain drop-shadow-lg" />
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
                <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer underline">(123) 456-7890</p>
                <p className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer underline">ABC@gmail.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-xl relative z-20">
              <a href="#" className="hover:text-c3-yellow transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-c3-yellow transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-c3-yellow transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-c3-yellow transition-colors"><SiVimeo /></a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-32 text-base relative z-20">
            
            {/* Product Links */}
            <div className="flex flex-col gap-4">
              <p className="font-dmsans font-bold text-lg mb-2">Product</p>
              <div className="flex flex-col gap-3 font-dmsans font-medium opacity-60">
                <a href="#" className="hover:opacity-100 transition-opacity">Autocapture</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Data Governance</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Virtual Events</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Virtual Users</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Behavioral Analytics</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Connect</a>
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
