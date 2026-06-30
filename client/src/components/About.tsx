import { motion } from 'framer-motion';
import { Zap, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Founded',
      description: 'REDDOT was established with a mission to revolutionize AI and enterprise software.',
      icon: Zap,
    },
    {
      year: '2025',
      title: 'Growth',
      description: 'Expanded team to 50+ engineers and launched flagship AI platform.',
      icon: Target,
    },
    {
      year: '2026',
      title: 'Projects',
      description: 'Delivered 100+ successful projects across 12 industries worldwide.',
      icon: Lightbulb,
    },
    {
      year: 'Future',
      title: 'Vision',
      description: 'Building the future of intelligent enterprise software and AI solutions.',
      icon: Users,
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI and technology solutions.',
    },
    {
      title: 'Excellence',
      description: 'Delivering world-class quality in every project and interaction.',
    },
    {
      title: 'Trust',
      description: 'Building long-term partnerships based on reliability and integrity.',
    },
    {
      title: 'Impact',
      description: 'Creating meaningful change through intelligent technology.',
    },
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
    <section id="about" className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20" />
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
            About REDDOT
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Engineering Intelligence for the Future
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are a team of innovators, engineers, and visionaries dedicated to building intelligent solutions that transform businesses.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 15px 30px rgba(37, 99, 235, 0.1)',
                  }}
                >
                  {/* Timeline Connector */}
                  {idx < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
                  )}

                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <p className="text-sm text-blue-600 font-semibold mb-2">{item.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-foreground mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all"
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: '0 15px 30px rgba(37, 99, 235, 0.1)',
                }}
              >
                <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '50+', label: 'Team Members' },
            { number: '1000+', label: 'Projects Delivered' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
