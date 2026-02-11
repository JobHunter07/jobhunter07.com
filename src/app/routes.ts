import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import JobTrackerPage from "./pages/JobTrackerPage";
import CompanyScoutPage from "./pages/CompanyScoutPage";
import ResumePage from "./pages/ResumePage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/job/tracker",
    Component: JobTrackerPage,
  },
  {
    path: "/company/scout",
    Component: CompanyScoutPage,
  },
  {
    path: "/resume",
    Component: ResumePage,
  },
  {
    path: "/pricing",
    Component: PricingPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);
