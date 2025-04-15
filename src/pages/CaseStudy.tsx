
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projectData = {
  'flayro-bites': {
    title: 'Flayro Bites',
    category: 'South Indian Snack Brand',
    overview: 'A home-based South Indian snack brand offering authentic and addictive savory delights through their online platform. Genosta built their brand identity, designed eye-catching packaging, and developed their digital marketing strategy.',
    contributions: [
      'Brand Identity Development',
      'Packaging Design System',
      'E-commerce Strategy',
      'Visual Content & Product Photos'
    ],
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    ],
    testimonial: {
      quote: "Genosta transformed our traditional business into a modern brand while keeping our authenticity intact.",
      author: "Ravi Kumar, Founder"
    }
  },
  'sparrow-refugee': {
    title: 'Sparrow Refugee',
    category: 'Social Awareness Movement',
    overview: 'A mission-driven project focused on saving house sparrows by building awareness among communities, schools, and organizations. Genosta supported their brand launch with digital strategy and campaign creatives.',
    contributions: [
      'Campaign Branding',
      'Social Media Content',
      'Collaboration Decks',
      'Community Awareness Posters'
    ],
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    ],
    testimonial: {
      quote: "Our message reached thousands thanks to Genosta's strategic approach to digital awareness.",
      author: "Dr. Sarah Chen, Project Lead"
    }
  },
  'time-keeper': {
    title: 'Time Keeper',
    category: 'Productivity Desktop Widget',
    overview: 'A lightweight desktop app that visualizes progress bars for year, month, and day to help users track time and stay motivated. Genosta designed its UI/UX and helped position it as a personal productivity tool.',
    contributions: [
      'UI Design',
      'App Icon & Branding',
      'Positioning & Copywriting',
      'User Experience Research'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1461988091159-192601e72e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80'
    ],
    testimonial: {
      quote: "The intuitive design makes time management feel natural and engaging.",
      author: "Tech Review Weekly"
    }
  }
};

const CaseStudy = () => {
  const { projectId } = useParams();
  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 mb-4">
              {project.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            
            <p className="text-xl text-gray-600 mb-12">
              {project.overview}
            </p>

            <div className="aspect-video rounded-xl overflow-hidden mb-12 bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">What We Did</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-gray-900 mt-2" />
                    <span>{contribution}</span>
                  </div>
                ))}
              </div>
            </div>

            {project.additionalImages && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.additionalImages.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden bg-gray-100 aspect-video">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.testimonial && (
              <div className="bg-gray-50 p-8 rounded-xl">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="text-gray-600 not-italic">— {project.testimonial.author}</cite>
              </div>
            )}

            <div className="mt-12 pt-6 border-t border-gray-200">
              <Button asChild variant="outline">
                <Link to="/#projects" className="inline-flex items-center gap-2">
                  <ArrowLeft size={16} />
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
