import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.pageYOffset > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-11 h-11 rounded-full bg-foreground text-background shadow-md hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-10 flex items-center justify-center">
          <p className="text-caption text-muted-foreground">
            &copy; {new Date().getFullYear()} Sai Nithin.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
