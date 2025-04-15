
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projectData = {
  'flayro-bites': {
    title: 'Flayro Bites',
    category: 'South Indian Snack Brand',
    overview: 'Flayro Bites brings authentic South Indian snacks to food lovers through their online platform, offering traditional flavors with modern convenience.',
    contributions: [
      'Brand Identity Development',
      'Packaging Design System',
      'E-commerce Website',
      'Digital Marketing Strategy',
      'Social Media Management'
    ],
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    testimonial: {
      quote: "Genosta transformed our traditional business into a modern brand while keeping our authenticity intact.",
      author: "Ravi Kumar, Founder"
    }
  },
  'sparrow-refugee': {
    title: 'Sparrow Refugee',
    category: 'Social Awareness Movement',
    overview: 'A noble initiative focused on protecting house sparrows through community engagement and educational programs.',
    contributions: [
      'Campaign Strategy',
      'Educational Content Creation',
      'School Outreach Programs',
      'Digital Presence Development',
      'Community Building'
    ],
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    testimonial: {
      quote: "Our message reached thousands thanks to Genosta's strategic approach to digital awareness.",
      author: "Dr. Sarah Chen, Project Lead"
    }
  },
  'time-keeper': {
    title: 'Time Keeper',
    category: 'Productivity Desktop Widget',
    overview: 'An innovative Windows desktop application helping users visualize and manage their time more effectively.',
    contributions: [
      'UX/UI Design',
      'Product Strategy',
      'Visual Design System',
      'User Research',
      'Marketing Planning'
    ],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
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
    return <div>Project not found</div>;
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

            {project.testimonial && (
              <div className="bg-gray-50 p-8 rounded-xl">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="text-gray-600 not-italic">— {project.testimonial.author}</cite>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
