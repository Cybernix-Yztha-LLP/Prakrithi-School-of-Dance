import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./button";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If not on home page, Link component will handle navigation to "/"
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-[0px_7px_29px_#64646f33] z-50 w-full">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="font-labrada font-medium text-[#636161] text-2xl md:text-[40px] text-center md:text-left no-underline"
            onClick={handleHomeClick}
          >
            Prakrithi school of Dance
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={item.title === "Home" ? handleHomeClick : undefined}
                className="font-labrada font-medium text-black text-xl md:text-2xl hover:text-gray-600 transition-colors no-underline"
              >
                {item.title}
              </Link>
            ))}
            <Button
              onClick={() => navigate("/login")}
              className="font-labrada font-medium bg-[#2c282a] text-white text-xl md:text-2xl px-6 py-2 rounded-full hover:bg-[#1a1818] transition-colors"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
