import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Altuvo Logo.png';

const Header = () => {
    return (
        <header className="bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center md:justify-start items-center py-6">
                    <Link to="/" className="flex items-center transition-opacity hover:opacity-90">
                        <img
                            className="h-12 w-auto sm:h-14"
                            src={logo}
                            alt="Altuvo"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
