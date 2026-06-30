import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Users, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const jobs = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$180K - $220K',
      description: 'Lead the development of cutting-edge AI and machine learning solutions.',
      requirements: ['5+ years ML experience', 'Python expertise', 'TensorFlow/PyTorch', 'Team leadership'],
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$150K - $190K',
      description: 'Build scalable web applications and cloud infrastructure.',
      requirements: ['React/Node.js', 'Cloud platforms', 'Database design', '3+ years experience'],
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$160K - $200K',
      description: 'Drive product strategy and vision for our AI platform.',
      requirements: ['Product management experience', 'AI/ML knowledge', 'Analytics', 'Leadership'],
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140K - $180K',
      description: 'Build and maintain our cloud infrastructure and deployment systems.',
      requirements: ['Kubernetes', 'AWS/GCP', 'CI/CD', 'Infrastructure as Code'],
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$170K - $210K',
      description: 'Conduct research on advanced AI algorithms and techniques.',
      requirements: ['PhD or equivalent', 'Research publications', 'Deep learning', 'Statistical analysis'],
    },
    {
      id: 6,
      title: 'Solutions Architect',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      salary: '$155K - $195K',
      description: 'Design custom solutions for enterprise clients.',
      requirements: ['Enterprise sales experience', 'Technical expertise', 'Client management', 'Presentation skills'],
    },
  ];

  const departments = ['all', 'Engineering', 'Product', 'Infrastructure', 'Research', 'Sales'];

  const filteredJobs = departmentFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === departmentFilter);

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
    <div className="w-full" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 left-1/3 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
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
            className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
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

        {/* Hero Content */}
        <motion.div
          style={{ y: parallaxY }}
          className="container text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4">
              Join Our Team
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Build the Future
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              of AI with Us
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join a team of innovators, engineers, and visionaries working on cutting-edge AI solutions that impact millions.
          </motion.p>

          {/* Floating Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12"
          >
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-blue-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Culture Section with Image */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="/manus-storage/hero-team-collaboration_69278f24.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />

              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-semibold text-blue-600">50+ Team Members</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Life at REDDOT
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We believe in building a culture of innovation, collaboration, and continuous learning where every team member can grow and make an impact.
              </p>

              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { title: 'Innovation First', desc: 'Work on cutting-edge projects that push boundaries' },
                  { title: 'Growth Mindset', desc: 'Continuous learning and professional development' },
                  { title: 'Work-Life Balance', desc: 'Flexible arrangements and comprehensive benefits' },
                  { title: 'Diverse Team', desc: 'Inclusive environment celebrating different perspectives' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-24 bg-background-secondary relative">
        <div className="container">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-slate-600">
              We're hiring talented people to join our growing team
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {departments.map((dept) => (
              <motion.button
                key={dept}
                onClick={() => setDepartmentFilter(dept)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  departmentFilter === dept
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Job Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                whileHover={{ y: -8 }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Content */}
                <div className="relative h-full p-8 border border-slate-200 rounded-2xl bg-white group-hover:border-blue-500 transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold">{job.department}</p>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-2 mb-6 flex-1">
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <Briefcase size={16} />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <DollarSign size={16} />
                      {job.salary}
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mb-6">
                    {job.description}
                  </p>

                  {/* Expandable Requirements */}
                  {selectedJob === job.id && (
                    <motion.div
                      className="border-t border-slate-200 pt-6 mt-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-semibold text-foreground mb-3">Requirements:</p>
                      <ul className="space-y-2 mb-6">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            {req}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                        Apply Now
                      </Button>
                    </motion.div>
                  )}

                  {/* Arrow Indicator */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-6 right-6"
                    animate={{ x: selectedJob === job.id ? 0 : -5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-slate-600">
              We invest in our team's growth and well-being
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage', icon: '🏥' },
              { title: '401(k) Match', desc: '4% employer 401(k) matching', icon: '💰' },
              { title: 'Flexible Work', desc: 'Remote-first with flexible hours', icon: '🏠' },
              { title: 'Learning Budget', desc: '$5,000 annual professional development', icon: '📚' },
              { title: 'Equity', desc: 'Stock options for all employees', icon: '📈' },
              { title: 'Unlimited PTO', desc: 'Flexible time off policy', icon: '✈️' },
              { title: 'Home Office', desc: '$2,000 home office setup stipend', icon: '🖥️' },
              { title: 'Team Events', desc: 'Regular team outings and celebrations', icon: '🎉' },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all"
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: '0 15px 30px rgba(37, 99, 235, 0.1)',
                }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
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

        <div className="container text-center relative z-10">
          <motion.h2
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Join REDDOT?
          </motion.h2>
          <motion.p
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Explore our open positions and apply today to be part of the team building the future of AI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 font-semibold rounded-lg">
              View All Jobs
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
