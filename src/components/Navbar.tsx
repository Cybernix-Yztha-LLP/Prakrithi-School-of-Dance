import React, { useState } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If not on home page, Link component will handle navigation to "/"
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-[0px_7px_29px_#64646f33] z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-labrada font-medium text-[#636161] text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-center md:text-left no-underline"
            onClick={handleHomeClick}
          >
            Prakrithi school of Dance
          </Link>

          {/* Hamburger Menu Button - visible on small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-wrap justify-center md:flex-row items-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-8 mt-2 md:mt-0">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={(e) => {
                  if (item.title === "Home") handleHomeClick(e);
                  handleNavLinkClick();
                }}
                className="font-labrada font-medium text-black text-base sm:text-lg md:text-xl lg:text-2xl hover:text-gray-600 transition-colors no-underline"
              >
                {item.title}
              </Link>
            ))}
            <Button
              onClick={() => {
                navigate("/login");
                handleNavLinkClick();
              }}
              className="font-labrada font-medium bg-[#2c282a] text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 rounded-full hover:bg-[#1a1818] transition-colors"
            >
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Links - shown when isMobileMenuOpen is true */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col items-center gap-y-3 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={(e) => {
                    if (item.title === "Home") handleHomeClick(e);
                    handleNavLinkClick();
                  }}
                  className="block w-full text-center font-labrada font-medium text-black text-lg hover:text-gray-600 transition-colors no-underline py-2"
                >
                  {item.title}
                </Link>
              ))}
              <Button
                onClick={() => {
                  navigate("/login");
                  handleNavLinkClick();
                }}
                className="w-full font-labrada font-medium bg-[#2c282a] text-white text-lg px-6 py-2 rounded-full hover:bg-[#1a1818] transition-colors mt-2"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
