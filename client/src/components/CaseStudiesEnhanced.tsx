import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function CaseStudiesEnhanced() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const caseStudies = [
    {
      title: 'Healthcare AI Platform',
      industry: 'Healthcare',
      problem: 'Manual patient data processing causing delays',
      solution: 'AI-powered diagnostic system',
      result: '85% faster diagnosis',
      impact: '+$2.5M revenue',
      image: '/manus-storage/data-center-cinematic_1f347cbf.jpg',
      color: 'from-blue-600 to-blue-400',
    },
    {
      title: 'Financial Automation',
      industry: 'Finance',
      problem: 'High operational costs in transaction processing',
      solution: 'ML-based fraud detection and automation',
      result: '60% cost reduction',
      impact: '+$5M savings',
      image: '/manus-storage/ai-brain-visualization_c4b6ebce.jpg',
      color: 'from-purple-600 to-purple-400',
    },
    {
      title: 'Retail Intelligence',
      industry: 'Retail',
      problem: 'Poor inventory management and demand forecasting',
      solution: 'Predictive analytics platform',
      result: '40% inventory optimization',
      impact: '+$3.2M revenue',
      image: '/manus-storage/tech-team-workspace_2929a065.jpg',
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      title: 'Manufacturing IoT',
      industry: 'Manufacturing',
      problem: 'Equipment downtime and maintenance costs',
      solution: 'Predictive maintenance system',
      result: '75% downtime reduction',
      impact: '+$4.1M savings',
      image: '/manus-storage/product-showcase-3d_77070b5d.jpg',
      color: 'from-pink-600 to-pink-400',
    },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
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
            Real Results
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Case Studies
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proven success stories from leading enterprises
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Card Container */}
              <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300">
                {/* Background Image with Parallax */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${study.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Content */}
                <motion.div
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                >
                  {/* Top Section */}
                  <div>
                    <motion.div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${study.color} text-white text-xs font-semibold mb-4`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                      {study.industry}
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                  </div>

                  {/* Bottom Section */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 + 0.3 }}
                  >
                    {/* Problem & Solution */}
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-300">
                        <span className="font-semibold text-white">Problem:</span> {study.problem}
                      </p>
                      <p className="text-slate-300">
                        <span className="font-semibold text-white">Solution:</span> {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-slate-300">Result</p>
                        <p className="text-lg font-bold text-green-400 flex items-center gap-1">
                          <TrendingUp size={16} />
                          {study.result}
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-sm text-slate-300">Business Impact</p>
                        <p className="text-lg font-bold text-blue-400">{study.impact}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 text-lg mb-6">
            Ready to achieve similar results for your business?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg font-semibold transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
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
