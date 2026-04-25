import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-slate-900/70 border-b border-slate-700/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-semibold tracking-wide text-white hover:text-sky-400 transition"
        >
          Arijeet<span className="text-sky-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-slate-300 font-medium transition group"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-slate-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-4 rounded-xl border border-slate-700/40 bg-slate-900/80 backdrop-blur-md p-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="p-2 rounded text-slate-300 hover:bg-slate-800/60 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;