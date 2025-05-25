import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-labrada text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Prakrithi School of Dance
            </h3>
            <p className="text-xs sm:text-sm">
              Embracing the art of classical Indian dance.
              <br />
              Prakrithi School of Dance<br/> Kannetuvila, Kattayikonam P O <br/>
              Thiruvananthapuram - 695584
            </p>
          </div>
          <div>
            <h3 className="font-labrada text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="hover:text-white">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-labrada text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-700 text-center text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Prakrithi School of Dance. All
            Rights Reserved.
          </p>
        </div>
        <div className="mt-2 text-center">
          <p className="font-labrada text-xs text-gray-500 sm:text-sm">
            Website designed and developed by Cybernix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
