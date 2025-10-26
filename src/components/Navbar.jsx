import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-80 shadow ${
        scrolled ? "py-3" : "py-5"
      } transition-all`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Arijeet Kumar Das
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-200 hover:text-blue-400 font-medium transition"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-3xl text-blue-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col bg-gray-900 bg-opacity-95 gap-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="p-2 rounded text-gray-200 hover:bg-blue-700/40"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
