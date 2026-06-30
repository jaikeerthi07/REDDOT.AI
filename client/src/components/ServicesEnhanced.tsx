import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Brain, Cpu, Cloud, Shield, Rocket, Code, Smartphone, Cpu as IoT, Lock, BarChart3, Lightbulb, Cog, Network, Database, Layers } from 'lucide-react';

export default function ServicesEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Agents',
      description: 'Autonomous AI agents that learn and adapt to your business needs',
      color: 'from-blue-600 to-blue-400',
      gradient: 'from-blue-500/20 to-transparent',
    },
    {
      icon: Zap,
      title: 'Generative AI',
      description: 'Create, generate, and automate with cutting-edge generative models',
      color: 'from-purple-600 to-purple-400',
      gradient: 'from-purple-500/20 to-transparent',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML solutions for predictive analytics and optimization',
      color: 'from-cyan-600 to-cyan-400',
      gradient: 'from-cyan-500/20 to-transparent',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Neural networks and deep learning architectures for complex problems',
      color: 'from-pink-600 to-pink-400',
      gradient: 'from-pink-500/20 to-transparent',
    },
    {
      icon: Code,
      title: 'LLM Development',
      description: 'Custom language models and NLP solutions for your enterprise',
      color: 'from-orange-600 to-orange-400',
      gradient: 'from-orange-500/20 to-transparent',
    },
    {
      icon: Database,
      title: 'RAG Systems',
      description: 'Retrieval-Augmented Generation for intelligent document processing',
      color: 'from-green-600 to-green-400',
      gradient: 'from-green-500/20 to-transparent',
    },
    {
      icon: Rocket,
      title: 'AI Automation',
      description: 'Automate business processes with intelligent AI workflows',
      color: 'from-indigo-600 to-indigo-400',
      gradient: 'from-indigo-500/20 to-transparent',
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Scalable cloud-based software solutions for enterprises',
      color: 'from-teal-600 to-teal-400',
      gradient: 'from-teal-500/20 to-transparent',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge tech',
      color: 'from-rose-600 to-rose-400',
      gradient: 'from-rose-500/20 to-transparent',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      color: 'from-amber-600 to-amber-400',
      gradient: 'from-amber-500/20 to-transparent',
    },
    {
      icon: IoT,
      title: 'IoT Solutions',
      description: 'Connected devices and IoT platforms for smart systems',
      color: 'from-lime-600 to-lime-400',
      gradient: 'from-lime-500/20 to-transparent',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Firmware and embedded software for hardware devices',
      color: 'from-sky-600 to-sky-400',
      gradient: 'from-sky-500/20 to-transparent',
    },
    {
      icon: Cloud,
      title: 'Cloud Engineering',
      description: 'AWS, Azure, GCP infrastructure and cloud architecture',
      color: 'from-violet-600 to-violet-400',
      gradient: 'from-violet-500/20 to-transparent',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise security solutions and threat protection',
      color: 'from-fuchsia-600 to-fuchsia-400',
      gradient: 'from-fuchsia-500/20 to-transparent',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Big data analytics and business intelligence platforms',
      color: 'from-cyan-600 to-cyan-400',
      gradient: 'from-cyan-500/20 to-transparent',
    },
    {
      icon: Lightbulb,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      color: 'from-yellow-600 to-yellow-400',
      gradient: 'from-yellow-500/20 to-transparent',
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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-background to-background-secondary relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
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
            Comprehensive Solutions
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            AI & Enterprise
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            16 comprehensive services covering AI, enterprise software, and digital transformation
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
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -12, rotateX: 5 }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm hover:border-blue-500 transition-all duration-300 h-full overflow-hidden">
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-semibold">Learn more</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 text-lg mb-6">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
