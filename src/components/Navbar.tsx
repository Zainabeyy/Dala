import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="cont-px bg-white">
      <div className="cont-px py-7 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="logo.svg"
            alt="Dala logo"
            className="h-auto max-w-16 sm:max-w-18"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden w-full min-[30rem]:flex justify-center font-bold uppercase text-xs sm:text-sm gap-x-8 xl:gap-x-14">
          <Link to="/subsidiaries">Subsidiaries</Link>
          <Link to="/about" className="whitespace-nowrap">
            About Us
          </Link>
          <Link to="/contact" className="whitespace-nowrap">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="xs:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <img
              src="./icons/chevron.webp"
              alt="chevron icon"
              className={`size-6 ${
                open ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-md xs:hidden">
            <div className="flex flex-col items-center font-bold uppercase text-sm py-6 gap-y-6">
              <Link to="/subsidiaries" onClick={() => setOpen(false)}>
                Subsidiaries
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                About Us
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
