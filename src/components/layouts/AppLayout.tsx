import { type JSX } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";

const AppLayout = (): JSX.Element => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    // Snap to top instantly, then fade in
    window.scrollTo({ top: 0, behavior: "instant" });
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";

    const raf = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <div className="h-svh">
      <Navbar />
      <div className="pt-24 overflow-hidden" ref={pageRef}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
