import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-8 mt-12">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <p className="text-gray-500 text-sm mb-4">
                    &copy; {new Date().getFullYear()} Altuvo
                </p>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    This website is not part of the YouTube, Google, or Facebook website; Google Inc or Facebook Inc. Also, this website is NOT endorsed by YouTube, Google or Facebook in any way. FACEBOOK is a trademark of FACEBOOK Inc. YOUTUBE is a trademark of GOOGLE Inc.
                </p>
                <div className="flex justify-center space-x-4 text-gray-400 text-xs">
                    <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    <span>-</span>
                    <Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link>
                    <span>-</span>
                    <Link to="/offer-disclaimer" className="hover:underline">Offer Disclaimer</Link>
                    <span>-</span>
                    <Link to="/data-protection" className="hover:underline">Data Protection</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
