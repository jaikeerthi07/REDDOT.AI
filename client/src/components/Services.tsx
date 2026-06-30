import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Zap, Brain, Cpu, Code, Smartphone, Wifi, Cloud, Lock,
  Database, Cog, TrendingUp, Shield, Layers, Rocket, Settings, Lightbulb
} from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'AI Agents', desc: 'Intelligent autonomous systems', icon: Zap },
    { title: 'Generative AI', desc: 'Creative content generation', icon: Lightbulb },
    { title: 'Machine Learning', desc: 'Predictive analytics', icon: Brain },
    { title: 'Deep Learning', desc: 'Neural network solutions', icon: Cpu },
    { title: 'LLM Development', desc: 'Custom language models', icon: Code },
    { title: 'RAG Systems', desc: 'Retrieval-augmented generation', icon: Database },
    { title: 'AI Automation', desc: 'Process automation', icon: Cog },
    { title: 'SaaS Development', desc: 'Cloud-based applications', icon: Cloud },
    { title: 'Enterprise Software', desc: 'Scalable solutions', icon: Layers },
    { title: 'Web Development', desc: 'Modern web apps', icon: Code },
    { title: 'Mobile Apps', desc: 'iOS & Android', icon: Smartphone },
    { title: 'IoT Solutions', desc: 'Connected devices', icon: Wifi },
    { title: 'Embedded Systems', desc: 'Hardware integration', icon: Cpu },
    { title: 'Cloud Engineering', desc: 'Infrastructure', icon: Cloud },
    { title: 'Cyber Security', desc: 'Protection & compliance', icon: Lock },
    { title: 'Data Analytics', desc: 'Business intelligence', icon: TrendingUp },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Our Services
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Comprehensive AI & Enterprise Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From AI agents to cloud engineering, we deliver cutting-edge technology solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="group relative p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4">
                    {service.desc}
                  </p>

                  <motion.div
                    className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Learn more →
                  </motion.div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-blue-500 opacity-0 group-hover:opacity-100"
                  initial={{ pathLength: 0 }}
                  whileHover={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3">
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
