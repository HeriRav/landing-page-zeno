import React from 'react';
import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-1 right-1 xl:bottom-5 xl:right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="md:p-4 bg-[#A855F7] max-md:w-10 max-md:h-10 text-black rounded-full shadow-2xl hover:bg-[#A855F7]/80 transition-all duration-300 ease-linear"
        >
          <ArrowUpwardIcon />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;