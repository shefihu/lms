import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const activeLink = "text-[#1a73e8] font-bold ";
  const normalLink = "   ";
  return (
    <div>
      {/* <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      /> */}
      <header
        className={`w-full h-[6rem]  flex  fixed top-0 z-50 transition-all  ${
          isScrolled &&
          "border-b border-b-gray-500 bg-white/80 backdrop-blur-sm "
        }`}
      >
        <div className="w-full xl:max-w-[80%] px-6 lg:px-4 mx-auto flex  justify-between items-center">
          <div>
            <a
              href="/"
              className="md:w-[15%] text-red-500 text-[30px] font-bold"
            >
              L
            </a>
            <a
              href="/"
              className="md:w-[15%] text-blue-500 text-[30px] font-bold"
            >
              M
            </a>
            <a
              href="/"
              className="md:w-[15%] text-yellow-500 text-[30px] font-bold"
            >
              S
            </a>
          </div>
          <div className="w-[80%] h-20  ">
            <ul className="md:flex hidden lg:space-x-16 md:space-x-10 text-lg items-center justify-end w-full h-full">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/"
                >
                  About LMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/c"
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  to="/e"
                >
                  Visit LMS
                </NavLink>
              </li>
              <li className="flex space-x-6">
                <button className="bg-[#1a1a2a] text-white w-[160px] py-3 text-[15px] font-bold rounded-lg">
                  Get Started
                </button>
                <button className="border-2 w-[160px] py-3 font-bold rounded-lg text-[15px] border-gray-200">
                  Sign in to LMS
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden  flex"
          >
            <RxHamburgerMenu className="w-7 h-7" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
