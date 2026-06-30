import { motion } from 'framer-motion';
import {
  Heart, BookOpen, DollarSign, Factory, ShoppingCart, Leaf,
  Building2, Radio, Building, Zap, Car, Stethoscope
} from 'lucide-react';

export default function Industries() {
  const industries = [
    { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { name: 'Education', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { name: 'Finance', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-orange-500 to-yellow-500' },
    { name: 'Retail', icon: ShoppingCart, color: 'from-pink-500 to-rose-500' },
    { name: 'Agriculture', icon: Leaf, color: 'from-green-600 to-lime-500' },
    { name: 'Government', icon: Building2, color: 'from-slate-600 to-slate-500' },
    { name: 'Telecommunications', icon: Radio, color: 'from-purple-500 to-indigo-500' },
    { name: 'Smart Cities', icon: Building, color: 'from-cyan-500 to-blue-500' },
    { name: 'Energy', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Automotive', icon: Car, color: 'from-gray-600 to-slate-600' },
    { name: 'Healthcare Tech', icon: Stethoscope, color: 'from-red-600 to-pink-600' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="industries" className="py-24 bg-background-secondary border-t border-b border-slate-200 relative overflow-hidden">
      {/* Background Gradient */}
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
            Industries We Serve
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Transforming Every Sector
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We partner with leading organizations across diverse industries to deliver innovative AI and technology solutions.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={idx}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  boxShadow: '0 25px 50px rgba(37, 99, 235, 0.2)',
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {industry.name}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4">
                    Innovative solutions tailored for {industry.name.toLowerCase()}
                  </p>

                  <motion.div
                    className="flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 5 }}
                  >
                    Explore →
                  </motion.div>
                </div>

                {/* Animated Accent */}
                <motion.div
                  className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${industry.color}`}
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'top' }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '500+', label: 'Enterprise Clients' },
            { number: '12', label: 'Industries Served' },
            { number: '1000+', label: 'Projects Delivered' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-white border border-slate-200">
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
