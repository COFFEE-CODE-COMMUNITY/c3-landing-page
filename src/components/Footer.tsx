import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Footer() {


  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#00215e] w-full overflow-hidden text-[#f8f8ff]"
    >
      {/* Background Decorative Ellipse */}
      <div className="absolute top-1/2 left-0 -translate-x-[40%] -translate-y-1/2 w-[300px] h-[300px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#001A4B] pointer-events-none z-0" />

      {/* Decorative top right glow */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#0a3280]/30 blur-3xl pointer-events-none z-0 translate-x-1/3 -translate-y-1/3" />

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/footer-logo.png"
                alt="Coffee Code Community"
                className="h-12 w-auto object-contain drop-shadow-md"
              />
            </div>

            {/* Tagline */}
            <p className="font-dmsans font-normal text-sm md:text-base opacity-70 leading-relaxed max-w-sm">
              We are Coffee Code Community — a student-driven tech community. Connecting talented people, brewing brilliant ideas, and building impactful products together.
            </p>

            {/* Email */}
            <a
              href="mailto:coffeecodecommunity@gmail.com"
              className="font-dmsans text-sm opacity-60 hover:opacity-100 hover:text-c3-yellow transition-all underline underline-offset-4 w-fit"
            >
              coffeecodecommunity@gmail.com
            </a>

            {/* Social Icons */}
            <div
              className="flex items-center gap-5 mt-2"
            >
              {[
                { href: 'https://www.instagram.com/coffeecodecommunity.id/', icon: <FaInstagram />, label: 'Instagram' },
                { href: 'https://www.linkedin.com/company/coffeecodecommunity', icon: <FaLinkedin />, label: 'LinkedIn' },
                { href: 'https://github.com/orgs/COFFEE-CODE-COMMUNITY', icon: <FaGithub />, label: 'GitHub' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target='_blank'
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-c3-yellow hover:border-c3-yellow hover:bg-c3-yellow/10 transition-all duration-300 text-base"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 col-span-1 md:col-span-1 lg:col-span-2 gap-8">

            {/* Project Links */}
            <div className="flex flex-col gap-4">
              <p className="font-dmsans font-bold text-sm uppercase tracking-widest text-c3-yellow/80">
                Project
              </p>
              <div className="flex flex-col gap-3 font-dmsans font-normal text-sm opacity-60">
                {['Panggilaja', 'Healthy', 'Finansaku', 'Virtual Users', 'Salingtau'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:opacity-100 hover:text-c3-yellow hover:translate-x-1 transition-all duration-200 w-fit"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Explore Links */}
            <div className="flex flex-col gap-4">
              <p className="font-dmsans font-bold text-sm uppercase tracking-widest text-c3-yellow/80">
                Explore
              </p>
              <div className="flex flex-col gap-3 font-dmsans font-normal text-sm opacity-60">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About', to: '/about' },
                  { label: 'Portofolio', to: '/portofolio' }
                ].map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="hover:opacity-100 hover:text-c3-yellow hover:translate-x-1 transition-all duration-200 w-fit"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dmsans text-xs opacity-40 text-center sm:text-left">
            © {currentYear} Coffee Code Community. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-dmsans text-xs opacity-40">
            <a href="#" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}