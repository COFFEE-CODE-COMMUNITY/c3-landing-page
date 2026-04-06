import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import App from "../pages/home";
import AboutPage from "../pages/about";
import PortofolioPage from "../pages/portofolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "portofolio",
        element: <PortofolioPage />,
      },
    ],
  },
]);
