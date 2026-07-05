import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AITimeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Cyber security / Tech nodes particle system
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      angle: number;
    }[] = [];
    const particleCount = 36;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        angle: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    let lastTime = 0;
    const frameInterval = 1000 / 24;
    let isVisible = false;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const animate = (timestamp = 0) => {
      animationId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden || timestamp - lastTime < frameInterval)
        return;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Slow rotation/movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = "rgba(56, 189, 248, 0.6)"; // Cyber Blue
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            const opacity = (1 - distance / 160) * 0.25;
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Problem",
      description: "Identify and understand your business challenges",
      icon: "🔍",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Replaced with reliable business planning image
    },
    {
      number: "02",
      title: "Analysis",
      description: "Deep analysis of requirements and data",
      icon: "📊",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      number: "03",
      title: "AI Models",
      description: "Design and develop custom AI models",
      icon: "🧠",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    },
    {
      number: "04",
      title: "Training",
      description: "Train and optimize models for performance",
      icon: "⚙️",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Deploy to production with monitoring",
      icon: "🚀",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      number: "06",
      title: "Monitoring",
      description: "Continuous performance tracking and optimization",
      icon: "📈",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    },
    {
      number: "07",
      title: "Continuous Learning",
      description: "Iterative improvements and model updates",
      icon: "🔄",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as any },
    },
  };

  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden border-t border-b border-white/5">
      {/* Canvas Particle Background (Cyber Security Effect) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ pointerEvents: "none" }}
      />

      {/* Cyber Blue Animated Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Process
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            AI Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Development Process
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            A proven methodology for delivering transformative AI solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Items */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="group relative w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-3rem)]"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Cinematic Card */}
                <div className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-500 h-full overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                  {/* Image Header with Overlay */}
                  <div className="h-48 relative overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Step Number Badge */}
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                    >
                      <span className="text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Inner Content */}
                  <div className="p-8 pt-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-colors duration-500" />

                    <h3 className="relative z-10 text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="relative z-10 text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                      {step.description}
                    </p>

                    <div className="relative z-10 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30">
                      <ArrowRight className="w-6 h-6 text-cyan-400" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-slate-400 text-lg mb-8 font-light tracking-wide">
            Ready to transform your business with AI?
          </p>
          <motion.button
            className="px-10 py-5 bg-cyan-500 text-slate-950 rounded-full font-bold text-lg hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all inline-flex items-center gap-3 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-booking"))
            }
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
