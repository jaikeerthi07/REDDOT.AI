import { motion } from 'framer-motion';
import { Trophy, Award, Zap } from 'lucide-react';

export default function Awards() {
  const awards = [
    {
      title: 'Best AI Innovation',
      organization: 'TechAwards 2026',
      year: '2026',
      icon: Zap,
      description: 'Recognized for groundbreaking AI solutions',
    },
    {
      title: 'Enterprise Excellence',
      organization: 'Global Tech Summit',
      year: '2025',
      icon: Trophy,
      description: 'Leading enterprise software provider',
    },
    {
      title: 'Innovation Leader',
      organization: 'AI Industry Report',
      year: '2025',
      icon: Award,
      description: 'Top 10 AI companies to watch',
    },
    {
      title: 'Customer Choice',
      organization: 'SoftwareReviews',
      year: '2024',
      icon: Trophy,
      description: 'Highest customer satisfaction rating',
    },
    {
      title: 'Best Workplace',
      organization: 'Great Place to Work',
      year: '2024',
      icon: Award,
      description: 'Top employer in tech industry',
    },
    {
      title: 'Fastest Growing',
      organization: 'Deloitte Fast 500',
      year: '2024',
      icon: Zap,
      description: 'Among fastest growing companies',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
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
            Recognition
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Awards & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Recognized by industry leaders for innovation, excellence, and customer satisfaction.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, idx) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={idx}
                className="group relative p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
                    {award.year}
                  </p>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {award.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-3">
                    {award.organization}
                  </p>

                  <p className="text-sm text-slate-500">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Section */}
        <motion.div
          className="mt-16 p-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Recognized as Industry Leader
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Our commitment to innovation, excellence, and customer success has earned us recognition from leading organizations worldwide.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition-colors font-semibold">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
