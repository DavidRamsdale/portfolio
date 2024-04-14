export const Nav = () => {
  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#experience", label: "Experience" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-around p-4 bg-black z-10">
      {navLinks.map((link, index) => (
        <a key={index} href={link.to} className="text-lg font-bold text-white">
          {link.label}
        </a>
      ))}
    </nav>
  );
};
