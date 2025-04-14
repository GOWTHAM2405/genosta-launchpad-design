
import { Code, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            About <span className="text-gradient">Genosta</span>
          </h2>
          <p className="text-xl text-black/80">
            We're a next-generation digital agency bridging the gap between tech and creativity,
            founded by engineering students with a passion for building the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black text-white rounded-xl p-6 shadow-lg card-hover group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Founder-Led</h3>
            <p className="text-white/70">
              Created by engineering students who understand both the technical and creative aspects of digital solutions.
            </p>
          </div>

          <div className="bg-black text-white rounded-xl p-6 shadow-lg card-hover group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Innovation-First</h3>
            <p className="text-white/70">
              We bring fresh perspectives and cutting-edge approaches to every project, staying ahead of digital trends.
            </p>
          </div>

          <div className="bg-black text-white rounded-xl p-6 shadow-lg card-hover group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Tech-Driven</h3>
            <p className="text-white/70">
              Our technical background ensures we deliver solutions that not only look good but perform exceptionally well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
