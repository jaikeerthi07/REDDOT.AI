import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "REDDOT transformed our business operations with their AI solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote:
        "Working with REDDOT was seamless. Their team understood our needs and delivered exceptional results.",
      author: "Michael Chen",
      role: "CTO, FinanceHub",
      company: "FinanceHub",
      rating: 5,
    },
    {
      quote:
        "The AI automation platform has reduced our operational costs by 40%. Highly recommended!",
      author: "Emily Rodriguez",
      role: "Director of Operations, RetailCo",
      company: "RetailCo",
      rating: 5,
    },
    {
      quote:
        "REDDOT's expertise in machine learning is unmatched. They delivered exactly what we needed.",
      author: "David Park",
      role: "VP Engineering, HealthTech",
      company: "HealthTech",
      rating: 5,
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
    <section className="py-24 bg-background-secondary border-t border-b border-slate-200 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
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
            Client Testimonials
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with
            REDDOT.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 15px 30px rgba(37, 99, 235, 0.1)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-600">{testimonial.role}</p>
                <p className="text-xs text-blue-600 font-semibold mt-1">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "1000+", label: "Projects Completed" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl bg-white border border-slate-200"
            >
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
