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
        <div className="font-montserrat text-2xl font-bold sm:text-xl text-purple-700 p-2">
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
          <button className="p-2 font-inter text-sm">btn</button>
        </div>
      </nav>
    </header>
  );
}
