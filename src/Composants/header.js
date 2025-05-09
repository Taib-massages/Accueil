import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'; // Import des icônes

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { path: '/', label: 'Accueil' },
        { path: '/prestations', label: 'Prestations' },
        { path: '/pilates', label: 'Pilates Mat' },
        { path: '/cadeaux', label: 'Bons cadeaux' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-neutral-100">
            {/* Version Desktop */}
            <nav className="hidden md:block container mx-auto px-6 py-4">
                <div className="flex items-center justify-center space-x-8">
                    {/* Logo sans soulignage */}
                    {/* <Link to="/" className="relative">
                        <img 
                            src={`${process.env.REACT_APP_PUBLIC_URL}/images/logoheader.webp`} 
                            alt="Taib-massages" 
                            className="h-10 w-10 rounded-full object-cover hover:opacity-80 transition-opacity"
                        />
                    </Link> */}

                    {/* Autres liens du menu avec soulignage */}
                    {menuItems.map((item) => (
                        <Link 
                            key={item.path}
                            to={item.path} 
                            className="relative text-black hover:text-gray-600 transition-colors"
                        >
                            {item.label}
                            {location.pathname === item.path && (
                                <span className="absolute left-0 right-0 bottom-0 border-b-2 border-gray-700 mt-1" />
                            )}
                        </Link>
                    ))}

                    {/* Icônes des réseaux sociaux */}
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/taib_massages/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Version Mobile */}
            <nav className="md:hidden">
                <div className="px-4 py-3 flex justify-between items-center">
                    {/* Logo en version mobile */}
                    <Link to="/">
                        <img 
                            src={`${process.env.REACT_APP_PUBLIC_URL}/images/logoheader.webp`}  
                            alt="Taib-massages" 
                            className="h-10 w-10 rounded-full object-cover"
                        />
                    </Link>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/taib_massages/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-600 focus:outline-none"
                    >
                        <svg 
                            className="w-8 h-8" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu mobile déroulant */}
                {isMenuOpen && (
                    <div className="bg-white border-t border-gray-200">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 text-gray-800 hover:bg-gray-150 ${
                                    location.pathname === item.path ? 'font-bold bg-gray-50' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;