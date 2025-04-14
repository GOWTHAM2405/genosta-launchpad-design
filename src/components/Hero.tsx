
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
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
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-blur-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full animate-float -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gray-400/10 rounded-full animate-float -z-10" style={{ animationDelay: '2s' }} />
              
              {/* Main image with animated border */}
              <div className="p-1 rounded-2xl bg-gradient-to-br from-white via-gray-500 to-black animate-spin-slow bg-size-200 relative">
                <div className="rounded-xl overflow-hidden bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Digital Agency Team Working" 
                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
