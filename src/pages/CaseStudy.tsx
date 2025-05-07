import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Instagram, ExternalLink, Linkedin ,Youtube} from 'lucide-react';
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
    image: '/project-images/fb_thattai1.png',
    additionalImages: [
      '/project-images/fb_thattai2.png',
      '/project-images/flayro_bites.png'
    ],
    testimonial: {
      quote: "Genosta transformed our traditional business into a modern brand while keeping our authenticity intact.",
      author: "Ravi Kumar, Founder"
    },
    social: {
      instagram: 'https://www.instagram.com/flayro_bites/',
      facebook: 'https://www.facebook.com/flayro.bites/',
      Linkedin: 'https://www.linkedin.com/company/sparrow-refugee',
      youtube: 'https://www.youtube.com/channel/example',
      website: 'https://flayro-bites.com/'
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
    image: '/project-images/sr1.jpeg',
    additionalImages: [
      '/project-images/sparrow_refuge_nest.jpg',
      '/project-images/sr2.png'
    ],
    testimonial: {
      quote: "Our message reached thousands thanks to Genosta's strategic approach to digital awareness.",
      author: "Dr. Sarah Chen, Project Lead"
    },
    social: {
      instagram: 'https://www.instagram.com/sparrowrefugee?igsh=NHByanYyMWpqOXhm',
      facebook: 'https://www.facebook.com/sparrowrefugee/',
      Linkedin: 'https://www.linkedin.com/company/sparrow-refugee',
      youtube: 'https://www.youtube.com/channel/example',
      website: 'https://sparrow-refugee.com/'
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
    },
    social: {
      instagram: 'https://www.instagram.com/timekeeperapp/',
      facebook: 'https://www.facebook.com/timekeeperapp/',
      Linkedin: 'https://www.linkedin.com/company/sparrow-refugee',
      youtube: 'https://www.youtube.com/channel/example',
      website: 'https://timekeeperapp.com/'
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
                className="w-full h-full object-cover hover:scale-105 transition-transform"
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
              <div className="bg-gray-50 p-8 rounded-xl mb-8">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="text-gray-600 not-italic">— {project.testimonial.author}</cite>
              </div>
            )}

            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold mb-6">Connect with {project.title}</h2>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <a href={project.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={project.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={project.social.Linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.social.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Visit Website
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={project.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a2.99 2.99 0 0 0-2.106-2.116C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.392.57a2.99 2.99 0 0 0-2.106 2.116C0 8.07 0 12 0 12s0 3.93.502 5.814a2.99 2.99 0 0 0 2.106 2.116C4.5 20.5 12 20.5 12 20.5s7.5 0 9.392-.57a2.99 2.99 0 0 0 2.106-2.116C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>

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
