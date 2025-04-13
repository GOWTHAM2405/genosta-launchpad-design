
import { 
  Palette, 
  TrendingUp, 
  FileText, 
  Code
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Palette size={36} />,
      title: "Branding",
      description: "Create a distinct identity that resonates with your audience and sets you apart from competitors.",
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Logo Design"]
    },
    {
      icon: <TrendingUp size={36} />,
      title: "Marketing",
      description: "Data-driven campaigns that boost your visibility and drive meaningful engagement.",
      features: ["Digital Strategy", "Social Media", "SEO Optimization", "Content Marketing"]
    },
    {
      icon: <FileText size={36} />,
      title: "Content",
      description: "Compelling narratives and visuals that capture attention and communicate your message.",
      features: ["Copywriting", "Video Production", "Photography", "Animation"]
    },
    {
      icon: <Code size={36} />,
      title: "Creative Tech",
      description: "Innovative digital solutions that solve problems and enhance user experience.",
      features: ["Web Development", "Mobile Apps", "UX/UI Design", "E-commerce"]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-lg text-foreground/80">
            We offer a comprehensive suite of digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] group"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 text-genosta-purple-vivid group-hover:text-genosta-orange transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-poppins mb-3">{service.title}</h3>
                    <p className="text-foreground/70 mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-genosta-purple-vivid rounded-full mr-2"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-genosta-purple-vivid hover:bg-genosta-purple-dark">
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
