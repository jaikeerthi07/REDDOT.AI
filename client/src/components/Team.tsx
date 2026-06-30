import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      bio: 'AI researcher with 15+ years in machine learning and enterprise software.',
      expertise: ['AI/ML', 'Strategy', 'Leadership'],
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Full-stack engineer passionate about building scalable AI systems.',
      expertise: ['Architecture', 'Cloud', 'DevOps'],
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP Engineering',
      bio: 'Leading engineering teams to deliver world-class software solutions.',
      expertise: ['Engineering', 'Product', 'Team Building'],
    },
    {
      name: 'Emily Park',
      role: 'VP Product',
      bio: 'Product visionary focused on creating innovative solutions for enterprises.',
      expertise: ['Product', 'UX', 'Strategy'],
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
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
            Our Team
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Meet the Founders
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A team of visionary leaders with decades of combined experience in AI, engineering, and enterprise software.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
              }}
            >
              {/* Header Gradient */}
              <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-slate-600 mb-4">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <motion.a
                    href="#"
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Growing Team
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented engineers, designers, and innovators to join our mission.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
