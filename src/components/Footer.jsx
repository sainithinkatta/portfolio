import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-purple-50/30 dark:to-purple-950/10 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
         <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sai Nithin. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;