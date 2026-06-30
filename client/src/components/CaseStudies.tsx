import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Healthcare AI Platform',
      industry: 'Healthcare',
      problem: 'Manual patient data processing was time-consuming and error-prone',
      solution: 'Deployed AI-powered document processing system',
      result: '85% reduction in processing time',
      impact: 'Improved patient care efficiency by 3x',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Financial Risk Analytics',
      industry: 'Finance',
      problem: 'Real-time risk assessment was not possible',
      solution: 'Built ML-powered risk prediction engine',
      result: 'Risk detection accuracy improved to 94%',
      impact: 'Prevented $50M+ in potential losses',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Manufacturing Automation',
      industry: 'Manufacturing',
      problem: 'Production line inefficiencies causing delays',
      solution: 'Implemented computer vision quality control',
      result: '40% increase in production efficiency',
      impact: 'Reduced defects by 92%',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Retail Personalization',
      industry: 'Retail',
      problem: 'Generic product recommendations',
      solution: 'Deployed personalized AI recommendation engine',
      result: 'Customer engagement increased by 156%',
      impact: 'Revenue uplift of $5M annually',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
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
            Success Stories
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how REDDOT has transformed businesses across industries with innovative AI solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 transition-all duration-300 bg-white"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 25px 50px rgba(37, 99, 235, 0.15)',
              }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {study.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">
                      {study.industry}
                    </p>
                  </div>
                </div>

                {/* Problem, Solution, Result */}
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">
                      Problem
                    </p>
                    <p className="text-slate-700">{study.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">
                      Solution
                    </p>
                    <p className="text-slate-700">{study.solution}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">
                      Result
                    </p>
                    <p className="text-slate-700 font-semibold text-blue-600">
                      {study.result}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase mb-1">
                      Business Impact
                    </p>
                    <p className="text-slate-700 font-semibold">{study.impact}</p>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                  whileHover={{ x: 4 }}
                >
                  Read Full Case Study
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
