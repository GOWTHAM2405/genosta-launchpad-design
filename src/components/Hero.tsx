
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-genosta-purple/10 to-transparent rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-genosta-orange/10 to-transparent rounded-tr-full -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6">
              <span className="block">We Build</span>
              <span className="text-gradient">Digital Experiences</span>
              <span className="block">That Matter</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
              A next-gen digital agency founded by engineering students, 
              crafting brand strategies and digital solutions for tomorrow's innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-genosta-purple-vivid hover:bg-genosta-purple-dark">
                <a href="#contact" className="flex items-center gap-2">
                  Get Started <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-genosta-orange/10 rounded-full animate-pulse-subtle -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-genosta-purple/10 rounded-full animate-pulse-subtle -z-10" />
              
              {/* Main image */}
              <div className="bg-gradient-to-br from-genosta-purple/20 to-genosta-orange/20 p-4 rounded-2xl shadow-lg">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Digital Agency Team Working" 
                    className="w-full h-auto object-cover"
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
