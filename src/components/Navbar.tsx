import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navData = [
    {
      title: "Subsidiaries",
      link: "/subsidiaries",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <nav className="cont-px bg-white">
      <div className="cont-px py-7 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="logo-with-arabic.svg"
            alt="Dala logo"
            className="h-auto max-w-16 sm:max-w-19 hover:scale-104 transition-all duration-200"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden w-full xs:flex justify-center font-bold uppercase text-xs sm:text-sm gap-x-8 xl:gap-x-14">
          {navData.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className={({ isActive }) =>
                `navLink ${
                  isActive ? "navLinkActive" : ""
                } whitespace-nowrap group`
              }
            >
              {item.title}
              <div className="h-0.5 blueGradient w-0 group-hover:w-full transition-all duration-300" />
            </NavLink>
          ))}
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
          <div
            className={`absolute top-14 left-0 w-full bg-white shadow-xl xs:hidden z-100 transition-all duration-300 ${
              open ? "max-h-39" : "max-h-0"
            }`}
          >
            <div className="flex flex-col items-center font-bold uppercase text-sm py-6 gap-y-6">
              {navData.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.link}
                  className={({ isActive }) =>
                    `navLink ${
                      isActive ? "textGradient" : "text-blue-dark"
                    } whitespace-nowrap group`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
