import Hero from '@/components/Hero';
import TrustedCompanies from '@/components/TrustedCompanies';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';
import About from '@/components/About';
import Team from '@/components/Team';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

/**
 * Home page showcasing REDDOT's services, solutions, and innovations
 */
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Trusted Companies */}
      <TrustedCompanies />

      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      <Industries />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Awards Section */}
      <Awards />

      {/* About Section */}
      <About />

      {/* Team Section */}
      <Team />

      {/* Services Section (Placeholder) */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive AI & Enterprise Solutions
            </h2>
            <p className="text-xl text-foreground-tertiary max-w-2xl mx-auto">
              From AI agents to cloud engineering, we deliver cutting-edge technology solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'AI Agents', desc: 'Intelligent autonomous systems' },
              { title: 'Enterprise Software', desc: 'Scalable business solutions' },
              { title: 'Cloud Engineering', desc: 'Modern infrastructure' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-lg border border-border bg-background-secondary hover:border-accent-primary transition-all"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground-tertiary">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-primary text-white">
              Explore All Services
            </Button>
          </div>
        </div>
      </motion.section>

      {/* AI Solutions Timeline (Placeholder) */}
      <motion.section
        className="py-20 bg-background-secondary border-t border-b border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">
              AI Solutions Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              From Problem to Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Problem', 'Analysis', 'AI Models', 'Training', 'Deployment', 'Monitoring', 'Learning'].map((step, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {idx + 1}
                </div>
                <p className="font-semibold text-foreground">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack (Placeholder) */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">
              Technology Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Built With Industry-Leading Tools
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Python', 'TensorFlow', 'PyTorch', 'React', 'Next.js', 'Docker', 'AWS', 'PostgreSQL', 'FastAPI', 'Kubernetes', 'Redis', 'OpenAI'].map((tech) => (
              <motion.div
                key={tech}
                className="p-4 rounded-lg border border-border bg-background-secondary text-center hover:border-accent-primary transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold text-foreground-tertiary">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-primary text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how REDDOT can help you build intelligent solutions for tomorrow.
          </p>
          <Button
            className="bg-white text-blue-600 hover:bg-background-secondary"
          >
            Start Your Project
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
