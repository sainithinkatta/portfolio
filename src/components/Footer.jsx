import { Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {/* Sticky Floating Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      <footer className="relative bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/10 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          {/* Copyright - Centered */}
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground text-center">
              &copy; 2025 Sai Nithin. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;