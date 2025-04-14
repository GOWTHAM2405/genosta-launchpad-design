
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
          {/* Genosta Logo */}
          <div className="w-10 h-10 relative overflow-hidden animate-blur-in">
            <img 
              src="/lovable-uploads/858b36d2-94bd-4858-9316-3228425166b2.png"
              alt="Genosta Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold font-poppins text-white">
            <span className="text-gradient">Genosta</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </a>
          <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </a>
          <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors">
            Testimonials
          </a>
          <Button asChild>
            <a href="#contact" className="bg-white hover:bg-gray-200 text-black">
              Get Started
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300"
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
            className="text-white hover:text-gray-300 py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-gray-300 py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="text-white hover:text-gray-300 py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#testimonials" 
            className="text-white hover:text-gray-300 py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            asChild 
            className="w-full bg-white hover:bg-gray-200 text-black"
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
