import { motion } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

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
      department: 'Sales Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$155K - $195K',
      description: 'Design custom solutions for enterprise clients.',
      requirements: ['Enterprise sales experience', 'Technical expertise', 'Client management', 'Presentation skills'],
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
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/2 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"
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

        <div className="container text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            className="text-xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Help us build the future of AI and enterprise software.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Life at REDDOT</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe in building a culture of innovation, collaboration, and continuous learning.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Innovation',
                description: 'Work on cutting-edge AI and technology projects that impact millions.',
              },
              {
                title: 'Growth',
                description: 'Continuous learning opportunities and career development programs.',
              },
              {
                title: 'Balance',
                description: 'Flexible work arrangements and comprehensive benefits package.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 rounded-xl border border-slate-200 bg-white"
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: '0 15px 30px rgba(37, 99, 235, 0.1)',
                }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-background-secondary">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600">We're hiring talented people to join our team.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                className="p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                whileHover={{
                  y: -4,
                  boxShadow: '0 15px 30px rgba(37, 99, 235, 0.1)',
                }}
              >
                <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Briefcase size={16} />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                </div>

                <p className="text-slate-600 mb-4">{job.description}</p>

                {selectedJob === job.id && (
                  <motion.div
                    className="border-t border-slate-200 pt-4 mt-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-semibold text-foreground mb-2">Requirements:</p>
                    <ul className="space-y-1 mb-4">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-slate-600">
                          • {req}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Benefits & Perks</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
              { title: '401(k) Match', desc: '4% employer 401(k) matching' },
              { title: 'Flexible Work', desc: 'Remote-first with flexible hours' },
              { title: 'Learning Budget', desc: '$5,000 annual professional development' },
              { title: 'Equity', desc: 'Stock options for all employees' },
              { title: 'Unlimited PTO', desc: 'Flexible time off policy' },
              { title: 'Home Office', desc: '$2,000 home office setup stipend' },
              { title: 'Team Events', desc: 'Regular team outings and celebrations' },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-white"
                variants={itemVariants}
              >
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
