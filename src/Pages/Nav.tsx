import  { useState } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../Pages/theme";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = () => {
    navigate("/contact");
  };

  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return theme === "light" ? "text-blue-600" : "text-white";
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 ">
        <h1
          className={`font-semibold text-2xl ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Dawt
          <span
            className={`${
              theme === "light" ? "text-blue-600" : "text-blue-500"
            }`}
          >
            .T
          </span>
        </h1>

        {/* Desktop Navigation */}
        <div className="space-x-12 hidden md:block lg:block text-nav_text_color">
          <Link to="/" className={`px-3 py-2 ${getLinkStyle("/")}`}>
            Home
          </Link>
          <Link to="/about" className={`px-3 py-2 ${getLinkStyle("/about")}`}>
            About
          </Link>
          <Link to="/works" className={`px-3 py-2 ${getLinkStyle("/works")}`}>
            Works
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 ${getLinkStyle("/contact")}`}
          >
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex space-x-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            {theme === "dark" ? <HiMoon /> : <HiSun />}
          </button>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden md:hidden sm:block" onClick={toggleMenu}>
            {isOpen ? (
              <HiX
                size={32}
                className={` ${
                  theme === "light" ? "text-black" : "text-white"
                } `}
              />
            ) : (
              <HiMenu
                className={` ${
                  theme === "light" ? "text-black" : "text-white"
                } `}
              />
            )}
          </button>

          {/* Contact Button */}
          <button
            className={`hidden lg:block md:block text-white rounded-3xl w-28 h-8 bg-[#323232] ${
              theme === "light"
                ? "hover:bg-blue-500"
                : "hover:bg-white hover:text-[#323232]"
            }`}
            onClick={handleNavigation}
          >
            Let's Talk
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`bg-black h-auto fixed w-full z-20 ${
            theme === "light" ? "bg-slate-100" : "bg-slate-900"
          } `}
        >
          <div
            className={`py-3 space-y-4 text-center grid ${
              theme === "light" ? "text-black" : "text-white"
            } `}
          >
            <Link to="/" className={`${getLinkStyle("/")}`}>
              Home
            </Link>
            <Link to="/about" className={`${getLinkStyle("/about")}`}>
              About
            </Link>
            <Link to="/works" className={`${getLinkStyle("/works")}`}>
              Works
            </Link>
            <Link to="/contact" className={`${getLinkStyle("/contact")}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
