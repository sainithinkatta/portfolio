import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false); // Use boolean

  const GITHUB_URL = "https://github.com/sainithinkatta";
  const LINKEDIN_URL = "https://www.linkedin.com/in/sainithinkatta/";

  // On mount, check localStorage for theme
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  // Update dark class and localStorage when isDark changes
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
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
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center">
          {/* Logo */}
          <div>
            <a className="text-xl font-bold text-primary" href="/portfolio/">
              SN
            </a>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
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
          
          {/* Dark Mode Toggle + Social Links */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
            </button>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary text-foreground rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Visit my LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary text-foreground rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Visit my GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center">
          <a className="text-xl font-bold text-primary" href="/portfolio/">
            SN
          </a>
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-foreground"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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