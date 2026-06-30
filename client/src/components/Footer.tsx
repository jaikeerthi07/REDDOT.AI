import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: ['AI Agents', 'Enterprise Software', 'Cloud Solutions', 'Analytics Platform'],
    },
    {
      title: 'Solutions',
      links: ['Machine Learning', 'Automation', 'Data Analytics', 'Digital Transformation'],
    },
    {
      title: 'Industries',
      links: ['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Government'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Blog', 'Case Studies'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
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
    <footer className="bg-background-secondary border-t border-border">
      {/* Newsletter Section */}
      <motion.div
        className="border-b border-border py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-foreground-tertiary">
              Get the latest news on AI, innovation, and technology trends.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-gradient-primary text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container">
          {/* Top Section: Logo and Description */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gradient mb-4">REDDOT</h2>
              <p className="text-foreground-tertiary leading-relaxed mb-6">
                Engineering Intelligence for the Future. Building AI Systems, Enterprise Software, and Smart Technologies for businesses worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground-tertiary hover:text-foreground transition-colors">
                  <Mail size={18} />
                  <a href="mailto:hello@reddot.ai">hello@reddot.ai</a>
                </div>
                <div className="flex items-center gap-3 text-foreground-tertiary hover:text-foreground transition-colors">
                  <Phone size={18} />
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center gap-3 text-foreground-tertiary hover:text-foreground transition-colors">
                  <MapPin size={18} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="p-3 rounded-lg bg-background-tertiary hover:bg-accent-primary/10 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} className="text-foreground-tertiary hover:text-accent-primary transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: '500+', label: 'Clients' },
                  { number: '50+', label: 'Team Members' },
                  { number: '100+', label: 'Projects' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-gradient">{stat.number}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Links Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 pb-16 border-b border-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerSections.map((section) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section: Copyright */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-500 text-sm">
              © {currentYear} REDDOT Innovative Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-slate-900 transition-colors text-sm"
              >
                Cookie Settings
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-primary opacity-3 rounded-full blur-3xl"
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
    </footer>
  );
}
