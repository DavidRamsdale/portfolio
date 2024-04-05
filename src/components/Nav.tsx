export const Nav = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="absolute top-0 w-full flex justify-around p-4 bg-black z-10">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-lg font-bold text-white"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
