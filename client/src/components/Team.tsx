import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'AI researcher with 15+ years in machine learning and enterprise software.',
      expertise: ['AI/ML', 'Strategy', 'Leadership'],
      image: '/manus-storage/team-meeting-discussion_7d6c4463.jpg',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Full-stack engineer passionate about building scalable AI systems.',
      expertise: ['Architecture', 'Cloud', 'DevOps'],
      image: '/manus-storage/hero-team-collaboration_69278f24.jpg',
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Engineering',
      bio: 'Leading engineering teams to deliver world-class software solutions.',
      expertise: ['Engineering', 'Product', 'Team Building'],
      image: '/manus-storage/innovation-lab-workspace_128735d7.jpg',
    },
    {
      name: 'Emily Park',
      role: 'VP Product',
      bio: 'Product visionary focused on creating innovative solutions for enterprises.',
      expertise: ['Product', 'UX', 'Strategy'],
      image: '/manus-storage/office-workspace-modern_6bd09c07.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-32 bg-background-secondary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut' as any,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
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
            Our Leadership
          </motion.p>
          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
            Meet the
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A team of visionary leaders with decades of combined experience in AI, engineering, and enterprise software.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-2xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Social Links */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-white text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-white text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="p-3 rounded-full bg-white text-slate-600 hover:bg-blue-600 hover:text-white transition-all"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Arrow Indicator */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          className="relative rounded-2xl overflow-hidden p-12 md:p-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear' as any,
            }}
          />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              We're always looking for talented engineers, designers, and innovators to join our mission of building the future of AI.
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-slate-100 font-semibold transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
