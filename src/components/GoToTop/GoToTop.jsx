import { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to top
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 h-[50px] w-[50px] rounded-[50%] bg-gradient-to-r from-[#da7c25] to-[#b923e1] text-white text-center flex items-center justify-center hover:bg-gradient-to-r hover:to-[#da7c25] hover:from-[#b923e1] transition-colors duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default GoToTop;
