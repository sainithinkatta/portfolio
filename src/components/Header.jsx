import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a className="text-xl font-bold text-primary" href="/portfolio/">
              SN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fixed positioning with proper z-index */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-background md:hidden">
          <nav className="flex flex-col items-center space-y-6 py-8 px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="text-lg text-foreground hover:text-primary transition-colors w-full text-center"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;