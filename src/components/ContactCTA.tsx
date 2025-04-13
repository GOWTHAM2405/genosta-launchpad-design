
import { Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log('Form submitted:', { email, message });
    setSubmitted(true);
    setEmail('');
    setMessage('');
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-genosta-purple/20 to-genosta-orange/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-genosta-purple-vivid p-8 md:p-10 text-white relative">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-full" />
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                  Let's Build Something Together
                </h3>
                <p className="mb-6 text-white/80">
                  Ready to transform your ideas into reality? Get in touch with us and let's create something amazing.
                </p>
                
                <div className="mb-8">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Send size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Us</h4>
                      <p className="text-white/80">hello@genosta.com</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="#" className="flex items-center gap-2">
                    Learn More About Us <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold font-poppins mb-6">Send Us a Message</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                  <p className="text-center">Thanks for reaching out! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genosta-purple-vivid focus:border-transparent transition-all"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-genosta-purple-vivid focus:border-transparent transition-all"
                      required
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-genosta-purple-vivid hover:bg-genosta-purple-dark">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
