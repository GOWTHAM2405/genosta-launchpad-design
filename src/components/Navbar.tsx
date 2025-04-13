
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 shadow-md backdrop-blur-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          {/* Logo placeholder */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-genosta-purple to-genosta-orange animate-pulse-subtle"></div>
          </div>
          <span className="text-2xl font-bold font-poppins text-white">
            <span className="text-gradient">Genosta</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-genosta-orange transition-colors">
            About
          </a>
          <a href="#services" className="text-white hover:text-genosta-orange transition-colors">
            Services
          </a>
          <a href="#projects" className="text-white hover:text-genosta-orange transition-colors">
            Projects
          </a>
          <a href="#testimonials" className="text-white hover:text-genosta-orange transition-colors">
            Testimonials
          </a>
          <Button asChild>
            <a href="#contact" className="bg-genosta-orange hover:bg-genosta-orange/90 text-white">
              Get Started
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-genosta-orange"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm shadow-md transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#about" 
            className="text-white hover:text-genosta-orange py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-genosta-orange py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="text-white hover:text-genosta-orange py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#testimonials" 
            className="text-white hover:text-genosta-orange py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            asChild 
            className="w-full bg-genosta-orange hover:bg-genosta-orange/90 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="#contact">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
