
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Genosta transformed our brand identity and online presence. Their young, energetic team brought fresh ideas that resonated with our target audience.",
      author: "Sarah Johnson",
      position: "Founder, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      quote: "Working with Genosta was a game-changer for our startup. They understood our vision and delivered beyond our expectations.",
      author: "Michael Chen",
      position: "CEO, InnovateCo",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "Their technical expertise combined with creative flair resulted in a website that not only looks great but performs exceptionally well.",
      author: "Aisha Patel",
      position: "Marketing Director, FutureWear",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];
  
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };
  
  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-genosta-purple opacity-20">
              <Quote size={64} />
            </div>
            
            <div className="relative bg-white rounded-xl p-8 shadow-md">
              <div className="min-h-[200px] flex flex-col justify-between">
                <p className="text-lg md:text-xl mb-6 italic text-foreground/80">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonials[current].author}</h4>
                    <p className="text-sm text-foreground/60">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 right-4 flex space-x-2">
              <button 
                onClick={prev}
                className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-genosta-purple-vivid hover:bg-genosta-purple-vivid hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={next}
                className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-genosta-purple-vivid hover:bg-genosta-purple-vivid hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  current === index ? 'bg-genosta-purple-vivid' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
