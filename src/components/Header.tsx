type HeaderProps = { navItems: string[] };

export default function Header({ navItems }: HeaderProps) {
    return (
        <header className="flex justify-center">
            <nav className="flex max-w-sm rounded-full mx-auto bg-gray-200 p-2">
                <ul className="flex list-none gap-6">
                    {navItems.map((item, index) => (
                        <li 
                            key={index}
                            className="cursor-pointer hover:text-blue-500" 
                        >{item}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};