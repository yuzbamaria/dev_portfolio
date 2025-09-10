import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

type NavItem = { label: string; link: string };
const navItems: NavItem[] = [
  { label: "About", link: "about" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export default function Header() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex py-3 px-6">
      <nav className="flex items-center rounded-full gap-12 mx-auto bg-white py-2 px-6">
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
        <div>
          <button className="cursor-pointer bg-white text-base h-9 w-9 hover:ring-2 hover:ring-purple-700 hover:ring-offset-2 hover:ring-offset-background rounded-full p-1 shadow sm:shadow-none">
            {/* inline-flex cursor-pointer bg-white items-center justify-center whitespace-nowrap 
            text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 
            focus-visible:ring-highlight-primary focus-visible:ring-offset-2 disabled:pointer-events-none 
            disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-11 w-11 relative 
            rounded-full border border-bg-700 bg-backdrop text-text-primary shadow backdrop-blur-md 
            transition-all active:scale-90 sm:h-10 sm:w-10 border-none sm:bg-transparent 
            sm:shadow-none sm:backdrop-blur-none */}
            <div className="">
              {/* absolute inset-0 flex items-center justify-center */}
              <FontAwesomeIcon icon={farMoon} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
