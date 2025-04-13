
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-genosta-dark-purple text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-poppins text-white">
                Genosta
              </span>
            </a>
            <p className="text-white/70 mb-6 max-w-md">
              A next-gen digital agency founded by engineering students. 
              Focused on branding, marketing, content, and creative tech services 
              for startups and small businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-genosta-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-genosta-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-genosta-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-genosta-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-genosta-purple transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Branding</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Marketing</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Content</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Creative Tech</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Genosta. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
