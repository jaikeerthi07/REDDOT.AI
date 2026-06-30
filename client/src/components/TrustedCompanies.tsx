import { motion } from 'framer-motion';

export default function TrustedCompanies() {
  const companies = [
    { name: 'Google Cloud', logo: '☁️' },
    { name: 'AWS', logo: '🔶' },
    { name: 'Microsoft Azure', logo: '🔷' },
    { name: 'OpenAI', logo: '🤖' },
    { name: 'Anthropic', logo: '🧠' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Vercel', logo: '▲' },
    { name: 'Linear', logo: '📊' },
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
    <section className="relative py-20 bg-background-secondary border-t border-b border-border">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">
            Trusted By Leading Companies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Powering Innovation Across Industries
          </h2>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company) => (
            <motion.div
              key={company.name}
              className="flex items-center justify-center p-6 rounded-lg border border-border hover:border-accent-primary hover:shadow-lg transition-all duration-300 bg-background-tertiary/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{
                y: -4,
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)',
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2">{company.logo}</div>
                <p className="text-sm font-medium text-foreground-tertiary">
                  {company.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
}
