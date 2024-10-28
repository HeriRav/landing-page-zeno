import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/global.css'
import './index.css'

interface HeaderProps {
  siteTitle: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  const offset = 80;
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    event.preventDefault();
    scrollToSection(id);
  };

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
      <div className="container fixed bg-white/80 py-3 max-w-full flex items-center">
        <div className="flex items-left text-left ml-8 mr-8 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20">
          <Link to="/">
            <StaticImage
              className="w-[120px] h-auto"
              src={"../../images/logo-zeno.png"}
              alt={"Logo Zeno"}
              placeholder='none'
            />
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none lg:hidden ml-auto mr-8 md:ml-auto md:mr-16 lg:ml-auto lg:mr-20"
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
          <div className="fixed inset-0 bg-black bg-opacity-80 z-40 flex items-center justify-center" onClick={closeMenu}>
            <div className="animate-popIn bg-white w-4/5 h-auto p-5 rounded-xl shadow-lg relative" onClick={(e) => e.stopPropagation()}>
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
                  <Link to="#about" onClick={closeMenu} onClickCapture={(e) => handleScroll(e, 'about')}>À propos</Link>
                </a>
                <a className="block text-black py-2">
                  <Link to="#service" onClick={closeMenu} onClickCapture={(e) => handleScroll(e, 'service')}>Nos services</Link>
                </a>
                <a className="block text-black py-2">
                  <Link to="#testimony" onClick={closeMenu} onClickCapture={(e) => handleScroll(e, 'testimony')}>Témoignages</Link>
                </a>
                <a href='#contact' onClick={closeMenu} onClickCapture={(e) => handleScroll(e, 'contact')} className="block text-white bg-purple-600 px-4 py-2 rounded-full">
                  <Link to="#contact" onClick={closeMenu} onClickCapture={(e) => handleScroll(e, 'contact')}>Contactez nous</Link>
                </a>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center w-full">
          <div className="flex space-x-8">
            <a className="text-sm text-black">
              <Link to="#about" onClick={(e) => handleScroll(e, 'about')}>À propos</Link>
            </a>
            <a className="text-sm text-black">
              <Link to="#service" onClick={(e) => handleScroll(e, 'service')}>Nos services</Link>
            </a>
            <a className="text-sm text-black">
              <Link to="#testimony" onClick={(e) => handleScroll(e, 'testimony')}>Témoignages</Link>
            </a>
          </div>
          <div className="ml-auto mr-20">
            <a href='#contact' onClick={(e) => handleScroll(e, 'contact')} className="text-sm text-white cursor-pointer bg-primary px-4 py-3 rounded-full hover:bg-purple-600 transition-all duration-200 ease-linear">
              <Link to="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contactez nous</Link>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
