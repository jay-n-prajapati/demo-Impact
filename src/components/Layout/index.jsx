import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";
import Footer from "./Footer";
import { GoArrowUp } from "react-icons/go";
import { cn, scrollToTop } from "../../utils";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <button
        className={cn(
          "fixed bottom-[35px] right-[35px] bg-accentColor text-white rounded-full p-4 z-[100000]"
        )}
        onClick={scrollToTop}
      >
        <GoArrowUp className="text-2xl" />
      </button>

      <div className="sticky top-0 left-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
