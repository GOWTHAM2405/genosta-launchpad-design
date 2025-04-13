
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Digital Retail",
      description: "A cutting-edge e-commerce platform with seamless user experience and advanced product filtering.",
      image: "https://images.unsplash.com/photo-1610852951725-3f7b0c1e470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Custom CMS", "Payment Integration", "Inventory Management", "Analytics Dashboard"]
    },
    {
      title: "Snack Subscription",
      category: "FMCG Startup",
      description: "A monthly subscription service delivering curated artisanal snacks directly to customers' doors.",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Subscription Management", "Customer Portal", "Logistics Integration", "Preference Learning"]
    },
    {
      title: "Gifting Platform",
      category: "Experiential Commerce",
      description: "A digital gifting solution that combines physical products with personalized digital experiences.",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: ["Gift Customization", "Scheduled Delivery", "AR Experiences", "Recipient Experience"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-genosta-dark-purple/95 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-genosta-purple to-genosta-orange">Projects</span>
          </h2>
          <p className="text-lg text-white/80">
            Explore our in-house startups and client projects that showcase our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="flex border-b border-white/10">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    className={`py-3 px-4 text-sm font-medium transition-colors ${
                      activeProject === index 
                        ? 'bg-genosta-purple-vivid text-white' 
                        : 'text-white/70 hover:text-white'
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-white/70 mb-3">
                  {projects[activeProject].category}
                </span>
                <h3 className="text-2xl font-bold font-poppins mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-white/70 mb-4">
                  {projects[activeProject].description}
                </p>
                
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {projects[activeProject].features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-genosta-orange rounded-full mr-2"></span>
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-genosta-orange hover:bg-genosta-orange/90">
                  <a href="#contact" className="flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-genosta-purple/20 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-genosta-orange/20 rounded-full -z-10" />
              
              {/* Project image with overlay */}
              <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative aspect-video">
                  <img 
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-genosta-dark-purple/80 flex items-end">
                    <div className="p-4 md:p-6">
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-white hover:text-genosta-orange transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="font-medium">View Case Study</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
