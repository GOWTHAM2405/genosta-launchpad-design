import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Flayro Bites",
      id: "flayro-bites",
      category: "South Indian Snack Brand",
      description: "A traditional South Indian snack brand offering authentic homemade savory delights through their online platform. We crafted their brand identity, designed eye-catching packaging, and developed their digital marketing strategy.",
      image: "project-images/flayro_bites.png",
      features: ["Brand Identity", "Packaging Design", "Digital Marketing", "E-commerce Strategy"],
      color: "from-genosta-orange to-genosta-purple-vivid",
      social: {
        instagram: "https://instagram.com/flayrobites",
        facebook: "https://facebook.com/flayrobites",
        youtube: 'https://www.youtube.com/channel/example',
        Linkedin: 'https://www.linkedin.com/company/example/',
        website: "https://flayrobites.com"
      }
    },
    {
      title: "Sparrow Refugee",
      id: "sparrow-refugee",
      category: "Social Initiative",
      description: "A noble initiative focused on protecting house sparrows through community engagement. We developed comprehensive digital strategies, created impactful branding, and managed outreach campaigns with schools and organizations.",
      image: "project-images/sparrow_refugee_logo.png",
      features: ["Digital Strategy", "Community Outreach", "Educational Content", "Brand Development"],
      color: "from-genosta-purple-vivid to-genosta-blue",
      social: {
        instagram: "https://instagram.com/sparrowrefuge",
        facebook: "https://facebook.com/sparrowrefuge",
        youtube: 'https://www.youtube.com/channel/example',
        Linkedin: 'https://www.linkedin.com/company/example/',
        website: "https://sparrowrefuge.org"
      }
    },
    {
      title: "Time Keeper",
      id: "time-keeper",
      category: "Desktop Application",
      description: "An innovative Windows desktop widget that helps users visualize their time progress throughout the year, month, and day. Our team handled the product design, user experience, and marketing strategy development.",
      image: "project-images/Time_keeper_logo.png",
      features: ["UI/UX Design", "Product Strategy", "Visual Design", "Marketing Planning"],
      color: "from-genosta-blue to-genosta-sky-blue",
      social: {
        instagram: "https://instagram.com/timekeeperapp",
        facebook: "https://facebook.com/timekeeperapp",
        youtube: 'https://www.youtube.com/channel/example',
        Linkedin: 'https://www.linkedin.com/company/example/',
        website: "https://timekeeper.app"
      }
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding bg-white text-black relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-genosta-orange/10 blur-xl animate-float"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-genosta-purple-vivid animate-float"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-black/80">
            Explore our in-house startups and client projects that showcase our capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="border border-black/10 rounded-xl overflow-hidden bg-black/5 backdrop-blur-sm">
              <div className="flex border-b border-black/10 justify-between">
                <div className="flex overflow-x-auto hide-scrollbar">
                  {projects.map((project, index) => (
                    <button
                      key={index}
                      className={`py-3 px-4 text-sm font-medium transition-colors whitespace-nowrap ${
                        activeProject === index 
                          ? 'bg-black text-white' 
                          : 'text-black/70 hover:text-black'
                      }`}
                      onClick={() => setActiveProject(index)}
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
                <div className="flex">
                  <button 
                    onClick={prevProject} 
                    className="px-3 py-3 text-black/70 hover:text-black transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={nextProject} 
                    className="px-3 py-3 text-black/70 hover:text-black transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-xs rounded-full bg-gradient-to-r ${projects[activeProject].color} text-white mb-3 animate-fade-in`}>
                  {projects[activeProject].category}
                </span>
                <h3 className="text-2xl font-bold font-poppins mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-black/70 mb-4">
                  {projects[activeProject].description}
                </p>
                
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {projects[activeProject].features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className={`w-2 h-2 bg-gradient-to-r ${projects[activeProject].color} rounded-full mr-2`}></span>
                      <span className="text-sm text-black/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-black hover:bg-black/90 text-white group">
                  <a href="#contact" className="flex items-center gap-2">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-genosta-purple/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-genosta-orange/10 rounded-full -z-10" />
              
              <div className={`p-1 rounded-lg overflow-hidden bg-gradient-to-r ${projects[activeProject].color} shadow-2xl transition-all duration-500`}>
                <div className="relative aspect-video bg-white group overflow-hidden rounded-lg">
                  <img 
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Button always visible */}
                  <div className="absolute inset-0 flex items-end justify-center p-4">
                    <Link 
                      to={`/projects/${projects[activeProject].id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="bg-white/20 backdrop-blur-md text-black px-5 py-2 rounded-full flex items-center gap-2 font-semibold
                                 hover:bg-white/30 hover:text-genosta-orange transition-all duration-500 ease-out"
                    >
                      <ExternalLink size={16} />
                      <span>View Case Study</span>
                    </Link>
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
