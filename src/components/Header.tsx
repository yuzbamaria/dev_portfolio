// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { hamburger, cross } from "../assets/icons/index";

type NavItem = { label: string; link: string };
const navItems: NavItem[] = [
  { label: "About", link: "about" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollFromMobMenu = (id: string) => {
    setIsMenuOpen(!isMenuOpen);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    isMenuOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto" // Cleanup in case component unmounts
    }
  }, [isMenuOpen]);

  return (
    <header className="flex py-3 px-6">
      {/* =======> Mobile menu <======= */}
      {isMenuOpen && (
        // gray overlay
        <div className="fixed top-0 left-0 w-full h-full z-10 bg-gray-400/70 sm:hidden">
          <button
            className="absolute top-8 right-5 z-15 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            {cross}
          </button>
          {/* menu drawer */}
          <div className="flex items-center justify-center bg-white w-3/4 h-full">
            <ul className="flex flex-col items-center font-montserrat font-light gap-8 p-5">
              {navItems.map((item) => (
                <li key={item.label} className="text-2xl" onClick={() => handleScrollFromMobMenu(item.link)}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* =======> Mobile container: visible up to 640px <======= */}
      <div className="sm:hidden flex items-center">
        <button
          className="cursor-pointer mt-4 bg-white rounded-full p-2 shadow"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {hamburger}
        </button>
      </div>

      {/* =======> Larger screens' container: visible from sm (640px) and up <======= */}
      <nav className="hidden sm:flex items-center rounded-full gap-12 mx-auto bg-white py-2 px-6">
        <div className="font-montserrat text-xl font-bold sm:text-2xl text-purple-700 p-2">
          MY
        </div>
        <ul className="flex list-none gap-6">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="group relative font-inter font-light text-sm"
              onClick={() => handleScroll(item.link)}
            >
              <span className="relative inline-flex overflow-hidden">
                <div className="cursor-pointer translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  {item.label}
                </div>
                <div className="cursor-pointer absolute translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  {item.label}
                </div>
              </span>
            </li>
          ))}
        </ul>
        {/* <div>
          <button className="cursor-pointer bg-white text-base h-9 w-9 hover:ring-2 hover:ring-purple-700 hover:ring-offset-2 hover:ring-offset-background rounded-full p-1 shadow sm:shadow-none">
            <div className="">
              <FontAwesomeIcon icon={farMoon} />
            </div>
          </button>
        </div> */}
      </nav>
    </header>
  );
}
