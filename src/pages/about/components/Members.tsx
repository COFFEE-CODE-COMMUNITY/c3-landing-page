import { useEffect, useRef, useState } from "react";
import { GROUPS, TEAM_MEMBERS } from "../../../utils/data";
import MemberCard from "./MemberCard";
import { useScrollFadeInUp, useFloating, useParallax } from "../../../utils/animations";
import { gsap } from "gsap";

const Members = () => {
  const [groupName, setGroupName] = useState("Game Development");
  const team = TEAM_MEMBERS.find((groups) => groups.role === groupName);

  const headingRef = useScrollFadeInUp(0.8, 50);

  const circleTopLeft = useFloating(4, 20);
  const circleTopLeftParallax = useParallax(0.1);
  const circleBottomRight = useFloating(5, 25);
  const circleBottomRightParallax = useParallax(0.2);

  // Member grid ref for stagger animation on group change
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const children = gridRef.current.children;
      gsap.fromTo(
        children,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
        }
      );
    }
  }, [groupName]);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative circles */}
      <div
        ref={(el) => { if (el) { circleTopLeft.current = el; circleTopLeftParallax.current = el; } }}
        className="absolute -left-16 top-20 w-40 h-40 lg:w-64 lg:h-64 rounded-full bg-primary opacity-[0.06] pointer-events-none"
      />
      <div
        ref={(el) => { if (el) { circleBottomRight.current = el; circleBottomRightParallax.current = el; } }}
        className="absolute -right-20 bottom-10 w-56 h-56 lg:w-96 lg:h-96 rounded-full bg-orange opacity-[0.06] pointer-events-none"
      />

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-urbanist font-bold text-primary text-h3 md:text-h2 lg:text-h1 tracking-tight">
            Our Members
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange to-yellow rounded-full mx-auto mt-4 mb-6"></div>
          <p className="font-urbanist font-normal text-[#666] text-h6 md:text-h5 max-w-2xl mx-auto leading-relaxed">
            Temui para talenta luar biasa di Coffee Code Community yang terbagi dalam beberapa divisi khusus.
          </p>
        </div>

        {/* Group Tabs */}
        <div className="flex justify-center mb-14">
          <div className="flex flex-wrap justify-center gap-2 bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-1.5 shadow-sm max-w-full">
            {GROUPS.map((group) => (
              <button
                key={group}
                className={`font-urbanist font-semibold text-h7 md:text-h6 px-5 md:px-7 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  groupName === group
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-[#888] hover:text-primary"
                }`}
                onClick={() => setGroupName(group)}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* Member Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10"
        >
          {team?.members.map((member) => (
            <MemberCard key={member.id} image={member.photoUrl} name={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
