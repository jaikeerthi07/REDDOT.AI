import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Target, Users, Lightbulb } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  const timeline = [
    {
      year: '2024',
      title: 'Founded',
      description: 'REDDOT was established with a mission to revolutionize AI and enterprise software.',
      icon: Zap,
      color: 'from-blue-600 to-blue-400',
    },
    {
      year: '2025',
      title: 'Growth',
      description: 'Expanded team to 50+ engineers and launched flagship AI platform.',
      icon: Target,
      color: 'from-purple-600 to-purple-400',
    },
    {
      year: '2026',
      title: 'Projects',
      description: 'Delivered 100+ successful projects across 12 industries worldwide.',
      icon: Lightbulb,
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      year: 'Future',
      title: 'Vision',
      description: 'Building the future of intelligent enterprise software and AI solutions.',
      icon: Users,
      color: 'from-pink-600 to-pink-400',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge AI and technology solutions.',
      icon: '🚀',
    },
    {
      title: 'Excellence',
      description: 'Delivering world-class quality in every project and interaction.',
      icon: '⭐',
    },
    {
      title: 'Trust',
      description: 'Building long-term partnerships based on reliability and integrity.',
      icon: '🤝',
    },
    {
      title: 'Impact',
      description: 'Creating meaningful change through intelligent technology.',
      icon: '💡',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as any },
    },
  };

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"
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
            About REDDOT
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Engineering Intelligence
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              for the Future
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We are a team of innovators, engineers, and visionaries dedicated to building intelligent solutions that transform businesses and create lasting impact.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-32">
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
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  {/* Timeline Connector */}
                  {idx < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
                  )}

                  {/* Card */}
                  <div className="relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300 h-full">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <p className="text-sm font-semibold text-blue-600 mb-2">{item.year}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-slate-600">
              The principles that guide everything we do
            </p>
          </motion.div>

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
                className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section with Image */}
        <motion.div
          style={{ y: parallaxY, opacity }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <img
              src="/manus-storage/innovation-lab-workspace_128735d7.jpg"
              alt="Innovation lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent" />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-5xl font-bold text-foreground mb-2">
                By The Numbers
              </h3>
              <p className="text-lg text-slate-600">
                Our impact and growth at a glance
              </p>
            </div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: '500+', label: 'Happy Clients', icon: '👥' },
                { number: '50+', label: 'Team Members', icon: '👨‍💼' },
                { number: '1000+', label: 'Projects Delivered', icon: '✅' },
                { number: '12', label: 'Industries Served', icon: '🌍' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-6 p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-500 transition-all"
                  variants={itemVariants}
                  whileHover={{
                    x: 8,
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.1)',
                  }}
                >
                  <div className="text-4xl">{stat.icon}</div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">
                      {stat.number}
                    </p>
                    <p className="text-slate-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
