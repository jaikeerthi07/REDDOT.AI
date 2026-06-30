import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Zap,
  Code,
  Cloud,
  Shield,
  BarChart3,
  Cpu,
  Database,
  GitBranch,
  Smartphone,
  Wifi,
  Cog,
  Lock,
  TrendingUp,
  Layers,
  Lightbulb,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Autonomous intelligent agents that learn and adapt to complex business processes.',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Zap,
      title: 'Generative AI',
      description: 'Custom generative AI solutions for content creation and automation.',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning',
      description: 'Advanced ML models for predictive analytics and optimization.',
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      icon: Layers,
      title: 'Deep Learning',
      description: 'Neural networks for image recognition, NLP, and complex pattern detection.',
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: Lightbulb,
      title: 'LLM Development',
      description: 'Custom language models fine-tuned for your specific use cases.',
      color: 'from-orange-600 to-orange-400',
    },
    {
      icon: Database,
      title: 'RAG Systems',
      description: 'Retrieval-augmented generation for knowledge-enhanced AI systems.',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes and workflows.',
      color: 'from-red-600 to-red-400',
    },
    {
      icon: Code,
      title: 'SaaS Development',
      description: 'Scalable software-as-a-service platforms built for growth.',
      color: 'from-indigo-600 to-indigo-400',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies.',
      color: 'from-blue-600 to-cyan-400',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'from-purple-600 to-pink-400',
    },
    {
      icon: Wifi,
      title: 'IoT Solutions',
      description: 'Connected IoT devices and edge computing solutions.',
      color: 'from-cyan-600 to-blue-400',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Firmware and embedded software for hardware devices.',
      color: 'from-orange-600 to-yellow-400',
    },
    {
      icon: Cloud,
      title: 'Cloud Engineering',
      description: 'AWS, Azure, and GCP infrastructure design and optimization.',
      color: 'from-blue-600 to-purple-400',
    },
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Security audits, penetration testing, and threat protection.',
      color: 'from-red-600 to-pink-400',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Data pipelines, analytics platforms, and business intelligence.',
      color: 'from-green-600 to-cyan-400',
    },
    {
      icon: GitBranch,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation.',
      color: 'from-purple-600 to-blue-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as any },
    },
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut' as any,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut' as any,
          }}
        />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Services
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Comprehensive AI &
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From AI development to cloud infrastructure, we offer end-to-end solutions for modern enterprises.
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
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -12 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative h-full p-8 rounded-2xl border border-slate-200 bg-white group-hover:border-blue-500 transition-all duration-300 flex flex-col">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm flex-1 mb-4">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-bold">→</span>
                    </div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 text-lg mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
