
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' 
        : 'bg-white py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative overflow-hidden animate-blur-in">
            <img 
              src="/lovable-uploads/f02bea32-788d-4446-bb47-3b484a6d12a4.png"
              alt="Genosta Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold font-poppins text-gray-900">
            Genosta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#services" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
            Services
          </a>
          <a href="/#projects" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
            Projects
          </a>
          <a href="/#why-us" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
            Why Us
          </a>
          <a href="/#about" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
            About
          </a>
          <a href="/#testimonials" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
            Testimonials
          </a>
          <Button asChild variant="default" className="bg-gray-900 text-white hover:bg-gray-800">
            <a href="#contact">
              Get Started
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 hover:text-gray-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-md transform transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="/#services" 
            className="text-gray-800 hover:text-gray-600 py-2 transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="/#projects" 
            className="text-gray-800 hover:text-gray-600 py-2 transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="/#why-us" 
            className="text-gray-800 hover:text-gray-600 py-2 transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Us
          </a>
          <a 
            href="/#about" 
            className="text-gray-800 hover:text-gray-600 py-2 transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="/#testimonials" 
            className="text-gray-800 hover:text-gray-600 py-2 transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            asChild 
            variant="default"
            className="w-full bg-gray-900 text-white hover:bg-gray-800"
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
