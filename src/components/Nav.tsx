import { Link } from "react-router-dom";

export const Nav = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="absolute top-0 w-full flex justify-around p-4 bg-black z-10">
      {navLinks.map((link, index) => (
        <Link key={index} to={link.to} className="text-lg font-bold text-white">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
