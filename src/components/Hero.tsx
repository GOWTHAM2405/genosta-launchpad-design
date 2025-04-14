
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from 'react';

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const logoElement = logoRef.current;
    if (!logoElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = logoElement.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate mouse position relative to center
      const deltaX = (e.clientX - centerX) / 25;
      const deltaY = (e.clientY - centerY) / 25;
      
      // Apply the transform (limited range of movement)
      logoElement.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
    };
    
    const handleMouseLeave = () => {
      // Reset to original position with smooth transition
      logoElement.style.transition = 'transform 0.5s ease-out';
      logoElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    const handleMouseEnter = () => {
      logoElement.style.transition = 'transform 0.1s ease-out';
    };
    
    // Add event listeners to document because we want to track mouse anywhere
    document.addEventListener('mousemove', handleMouseMove);
    logoElement.addEventListener('mouseleave', handleMouseLeave);
    logoElement.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      logoElement?.removeEventListener('mouseleave', handleMouseLeave);
      logoElement?.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gray-500/5 blur-3xl animate-pulse-subtle" />
      <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-white/50 animate-wave" />
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 rounded-full bg-gray-400/50 animate-wave" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-blur-in" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6 text-white">
              <span className="block">We Build</span>
              <span className="text-gradient">Digital Experiences</span>
              <span className="block">That Matter</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              A next-gen digital agency founded by engineering students, 
              crafting brand strategies and digital solutions for tomorrow's innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 group">
                <a href="#contact" className="flex items-center gap-2">
                  Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-blur-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative flex justify-center">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/5 rounded-full animate-float -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-400/5 rounded-full animate-float -z-10" style={{ animationDelay: '2s' }} />
              
              {/* Genosta Logo with cursor follow effect */}
              <div 
                ref={logoRef}
                className="logo-follow p-6 rounded-2xl bg-black border border-white/10 animate-logo-glow w-[280px] h-[280px] flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/5c7e3842-0e6a-48b0-9399-40b5ff7ca409.png" 
                  alt="Genosta Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
