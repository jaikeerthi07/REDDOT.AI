import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.8]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime',
      contact: 'hello@reddot.ai',
      link: 'mailto:hello@reddot.ai',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us during business hours',
      contact: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us on WhatsApp',
      contact: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      color: 'from-green-600 to-green-400',
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit us in person',
      contact: 'San Francisco, CA',
      link: '#',
      color: 'from-red-600 to-red-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as any },
    },
  };

  return (
    <div className="w-full" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut' as any,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut' as any,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-10"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut' as any,
            }}
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: parallaxY, opacity }}
          className="container text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question or ready to start your next project? We'd love to hear from you and discuss how we can help transform your business.
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

      {/* Contact Methods - 3D Cards */}
      <section className="py-24 bg-background relative">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-lg text-slate-600">
              Choose your preferred method to reach out to our team
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Card Content */}
                  <div className="relative h-full p-8 border border-slate-200 rounded-2xl bg-white group-hover:border-transparent transition-all duration-500 flex flex-col justify-between">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-blue-600" />
                    </motion.div>

                    {/* Text */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm text-slate-600 group-hover:text-white/80 transition-colors mb-3">
                        {method.description}
                      </p>
                      <p className="text-lg font-semibold text-blue-600 group-hover:text-white transition-colors">
                        {method.contact}
                      </p>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <Send className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section with Image */}
      <section className="py-24 bg-background-secondary relative overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background-secondary via-transparent to-background-secondary" />
          <img
            src="/manus-storage/office-workspace-modern_6bd09c07.jpg"
            alt="Modern office workspace"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Send us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-600/50 py-3 font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="/manus-storage/team-meeting-discussion_7d6c4463.jpg"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />

              {/* Floating Stats */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm text-slate-600 mb-1">Response Time</p>
                <p className="text-2xl font-bold text-blue-600">24 Hours</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Office
            </h2>
            <p className="text-lg text-slate-600">
              Visit us in person or schedule a virtual meeting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden h-96 border border-slate-200"
            >
              <img
                src="/manus-storage/global-network-connection_7a1d6ee4.jpg"
                alt="Global network"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  San Francisco HQ
                </h3>
                <p className="text-slate-600 mb-4">
                  123 Innovation Drive<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Get Directions
                </Button>
              </div>

              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-slate-600">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM PST</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM PST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-500 transition-all">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Schedule a Meeting
                </h4>
                <p className="text-slate-600 mb-4">
                  Can't visit in person? Schedule a virtual meeting with our team.
                </p>
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Book a Call
                </Button>
              </div>
            </motion.div>
          </div>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's discuss how REDDOT can help you achieve your goals with innovative AI solutions and enterprise software.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 font-semibold rounded-lg">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
