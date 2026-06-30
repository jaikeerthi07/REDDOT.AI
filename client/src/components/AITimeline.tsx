import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function AITimeline() {
  const steps = [
    {
      number: '01',
      title: 'Problem',
      description: 'Identify and understand your business challenges',
      icon: '🔍',
      color: 'from-blue-600 to-blue-400',
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'Deep analysis of requirements and data',
      icon: '📊',
      color: 'from-purple-600 to-purple-400',
    },
    {
      number: '03',
      title: 'AI Models',
      description: 'Design and develop custom AI models',
      icon: '🧠',
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      number: '04',
      title: 'Training',
      description: 'Train and optimize models for performance',
      icon: '⚙️',
      color: 'from-pink-600 to-pink-400',
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Deploy to production with monitoring',
      icon: '🚀',
      color: 'from-orange-600 to-orange-400',
    },
    {
      number: '06',
      title: 'Monitoring',
      description: 'Continuous performance tracking and optimization',
      icon: '📈',
      color: 'from-green-600 to-green-400',
    },
    {
      number: '07',
      title: 'Continuous Learning',
      description: 'Iterative improvements and model updates',
      icon: '🔄',
      color: 'from-indigo-600 to-indigo-400',
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as any },
    },
  };

  return (
    <section className="py-32 bg-background-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
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
            Our Process
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            AI Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A proven methodology for delivering transformative AI solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20" />

          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300 h-full">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                  {/* Step Number */}
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </motion.div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Arrow Indicator */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  )}
                </div>

                {/* Mobile Connector */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6 text-blue-600 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
            Ready to transform your business with AI?
          </p>
          <motion.button
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
