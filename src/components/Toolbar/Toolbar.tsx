'use client'
import { ChevronUp } from 'lucide-react';
import useScrollPosition from './Hook';


const ScrollToTopButton = () => {
  const isVisible = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none transition-transform hover:scale-110"
      aria-label="Volver arriba"
    >
      <ChevronUp size={24} />
    </button>
  ) : null;
};

export default ScrollToTopButton;

