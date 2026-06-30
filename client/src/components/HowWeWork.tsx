import { motion } from 'framer-motion';
import { Users, Lightbulb, Zap, Target, Rocket, BarChart3 } from 'lucide-react';

export default function HowWeWork() {
  const processes = [
    {
      icon: Users,
      title: 'Consultation',
      description: 'We start by understanding your business goals, challenges, and vision for the future.',
      details: ['Requirements gathering', 'Stakeholder interviews', 'Market analysis'],
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Develop a comprehensive strategy tailored to your specific needs and objectives.',
      details: ['Solution design', 'Technology selection', 'Timeline planning'],
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Zap,
      title: 'Development',
      description: 'Our expert team builds your solution using cutting-edge technologies and best practices.',
      details: ['Agile development', 'Regular updates', 'Quality assurance'],
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      icon: Target,
      title: 'Testing',
      description: 'Rigorous testing ensures your solution meets all requirements and performs optimally.',
      details: ['Unit testing', 'Integration testing', 'User acceptance testing'],
      color: 'from-pink-600 to-pink-400',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Seamless deployment to production with minimal downtime and maximum reliability.',
      details: ['Production setup', 'Data migration', 'Go-live support'],
      color: 'from-orange-600 to-orange-400',
    },
    {
      icon: BarChart3,
      title: 'Support',
      description: 'Ongoing support and optimization to ensure your solution continues to deliver value.',
      details: ['24/7 monitoring', 'Performance optimization', 'Continuous improvement'],
      color: 'from-green-600 to-green-400',
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
      transition: { duration: 0.6, ease: 'easeOut' as any },
    },
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut' as any,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
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
            Our Methodology
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            How We
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A collaborative approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processes.map((process, idx) => {
            const Icon = process.icon;
            return (
              <motion.div
                key={idx}
                className="group relative rounded-2xl overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -12 }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300 h-full flex flex-col">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                  {/* Number Badge */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 group-hover:scale-125 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1">
                    {process.description}
                  </p>

                  {/* Details List */}
                  <motion.div
                    className="space-y-2 pt-6 border-t border-slate-200"
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {process.details.map((detail, detailIdx) => (
                      <motion.div
                        key={detailIdx}
                        className="flex items-center gap-2 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ delay: detailIdx * 0.05 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {detail}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 -z-10`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: '100%', label: 'Client Satisfaction', icon: '😊' },
            { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
            { number: '24/7', label: 'Support Available', icon: '🛡️' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-2xl border border-slate-200 bg-white text-center hover:border-blue-500 transition-all"
              whileHover={{
                y: -4,
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
              }}
            >
              <div className="text-5xl mb-3">{stat.icon}</div>
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="text-slate-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
