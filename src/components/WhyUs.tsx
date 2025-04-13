
import { Check, Clock, Users, ShieldCheck } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
            Why Choose <span className="text-gradient">Genosta</span>
          </h2>
          <p className="text-lg text-foreground/80">
            We combine technical expertise with creative vision to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-genosta-purple/5 rounded-xl p-6 border border-genosta-purple/10 card-hover">
            <div className="w-12 h-12 bg-genosta-purple-vivid rounded-full flex items-center justify-center mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Youth-Driven</h3>
            <p className="text-foreground/70">
              Our team brings fresh perspectives and innovative approaches to every project.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-genosta-purple-vivid mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Latest digital trends</span>
              </li>
              <li className="flex items-start">
                <Check className="text-genosta-purple-vivid mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Modern aesthetic sensibilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-genosta-purple/5 rounded-xl p-6 border border-genosta-purple/10 card-hover">
            <div className="w-12 h-12 bg-genosta-orange rounded-full flex items-center justify-center mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Faster Delivery</h3>
            <p className="text-foreground/70">
              We work efficiently to bring your ideas to market quickly without compromising quality.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-genosta-orange mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Agile development process</span>
              </li>
              <li className="flex items-start">
                <Check className="text-genosta-orange mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Regular progress updates</span>
              </li>
            </ul>
          </div>

          <div className="bg-genosta-purple/5 rounded-xl p-6 border border-genosta-purple/10 card-hover">
            <div className="w-12 h-12 bg-genosta-blue rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Technical Excellence</h3>
            <p className="text-foreground/70">
              Engineering expertise ensures robust, scalable, and efficient solutions.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-genosta-blue mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Clean, maintainable code</span>
              </li>
              <li className="flex items-start">
                <Check className="text-genosta-blue mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Performance optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-genosta-purple/5 rounded-xl p-6 border border-genosta-purple/10 card-hover">
            <div className="w-12 h-12 bg-genosta-purple-dark rounded-full flex items-center justify-center mb-4">
              <Check className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold font-poppins mb-3">Founder-Led</h3>
            <p className="text-foreground/70">
              Direct collaboration with our founding team ensures your vision is understood and executed.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-genosta-purple-dark mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">No middleman communication</span>
              </li>
              <li className="flex items-start">
                <Check className="text-genosta-purple-dark mr-2 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm">Strategic partnership approach</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
