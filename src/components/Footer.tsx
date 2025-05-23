import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-labrada text-xl font-semibold text-white mb-4">Prakrithi School of Dance</h3>
                        <p className="text-sm">
                            Embracing the art of classical Indian dance.
                            <br />
                            123 Dance Street, Art City, AC 54321
                        </p>
                    </div>
                    <div>
                        <h3 className="font-labrada text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link to="/classes" className="hover:text-white">Classes</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-labrada text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <FaYoutube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-700 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Prakrithi School of Dance. All Rights Reserved.</p>
                </div>
                <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="font-labrada text-sm text-gray-600">
            Website designed and developed by Cybernix
          </p>
        </div>
            </div>
        </footer>
    );
};

export default Footer;
