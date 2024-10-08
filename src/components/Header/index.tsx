import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/global.css'
import './index.css'

interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container max-w-full flex items-center">
        <div className="flex items-center text-center">
          <Link to="/">
            <StaticImage
              className="w-1/2 h-auto"
              src={"../../images/logo-zeno.png"}
              alt={"Logo Zeno"}
              placeholder='none'
            />
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none md:hidden ml-auto mr-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
            />
          </svg>
        </button>

        {/* Modal for mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
            <div className="bg-white w-4/5 h-4/5 p-5 rounded-lg shadow-lg relative">
              {/* Close button */}
              <button
                onClick={closeMenu}
                className="absolute top-2 right-2 text-black"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-4">
                <a className="block text-black py-2">
                  <Link to="/">À propos</Link>
                </a>
                <a className="block text-black py-2">
                  <Link to="/">Nos services</Link>
                </a>
                <a className="block text-black py-2">
                  <Link to="/">Témoignages</Link>
                </a>
                <a className="block text-white bg-purple-600 px-4 py-2 rounded-full">
                  <Link to="/">Contactez nous</Link>
                </a>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center w-full">
          <div className="flex space-x-8">
            <a className="text-sm text-black">
              <Link to="/">À propos</Link>
            </a>
            <a className="text-sm text-black">
              <Link to="/">Nos services</Link>
            </a>
            <a className="text-sm text-black">
              <Link to="/">Témoignages</Link>
            </a>
          </div>
          <div className="ml-auto mr-20">
            <a className="text-sm text-white cursor-pointer bg-primary px-4 py-3 rounded-full hover:bg-purple-600 transition delay-50 duration-200">
              <Link to="/">Contactez nous</Link>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
