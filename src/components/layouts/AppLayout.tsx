import { type JSX } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const AppLayout = (): JSX.Element => {
  return (
    <div className="h-svh">
      <Navbar />
      <div className="pt-24 overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
