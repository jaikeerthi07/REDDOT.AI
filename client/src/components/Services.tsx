import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Network,
  Shield,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal,
  Server,
  Smartphone,
  Activity,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type CategoryType = "intelligence" | "experience" | "infrastructure";

export default function Services() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("intelligence");

  const categories = {
    intelligence: {
      id: "intelligence" as CategoryType,
      tabLabel: "Cognitive AI & Intelligence",
      title: "Cognitive AI & Autonomous Agent Swarms",
      tagline:
        "Supercharge your enterprise workflows with self-learning agents and custom semantic engines.",
      description:
        "We build proprietary Generative AI architectures, customized Large Language Models (LLMs), and retrieval-augmented reasoning systems (RAG) that securely integrate with your private databases. Our autonomous agent swarms collaborate across systems to eliminate repetitive operations and unlock deep cognitive insights.",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      textColor: "text-indigo-600 dark:text-indigo-400",
      bgGlow: "bg-indigo-500/10",
      borderGlow: "border-indigo-500/30",
      techStack: [
        "Gemini Pro",
        "Deepgram",
        "LangChain",
        "LlamaIndex",
        "PyTorch",
        "Vector Databases",
      ],
      servicesList: [
        {
          name: "Autonomous Agent Swarms",
          desc: "Self-coordinating AI units executing complex multi-system workflows.",
        },
        {
          name: "Custom LLM Fine-Tuning",
          desc: "Domain-specific language models trained on your private knowledge.",
        },
        {
          name: "Retrieval-Augmented Generation (RAG)",
          desc: "Secure database querying using contextual semantic indexing.",
        },
        {
          name: "Predictive Decision Models",
          desc: "Deep learning pipelines simulating operational and market variables.",
        },
      ],
      visual: (
        <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
          {/* Animated Central Node */}
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center relative z-20 shadow-2xl shadow-indigo-500/30"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Brain className="w-10 h-10 text-white" />
            <motion.div
              className="absolute inset-0 rounded-full border border-indigo-400/40"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Floating Satellite Nodes */}
          {[
            { angle: 0, delay: 0, icon: Cpu },
            { angle: 120, delay: 1, icon: Terminal },
            { angle: 240, delay: 2, icon: Sparkles },
          ].map((node, idx) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = Math.cos(rad) * 110;
            const y = Math.sin(rad) * 110;
            const NodeIcon = node.icon;

            return (
              <React.Fragment key={idx}>
                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="rgba(99, 102, 241, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>

                <motion.div
                  className="absolute w-12 h-12 rounded-xl bg-white border border-indigo-200 shadow-lg flex items-center justify-center z-20 dark:bg-slate-900 dark:border-slate-800"
                  style={{ x, y }}
                  animate={{ y: [y, y - 8, y] }}
                  transition={{
                    duration: 4,
                    delay: node.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <NodeIcon className="w-5 h-5 text-indigo-500" />
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      ),
    },
    experience: {
      id: "experience" as CategoryType,
      tabLabel: "Full-Stack Platforms",
      title: "High-Performance SaaS & Web Applications",
      tagline:
        "Infinite scalability, responsive UI design, and real-time operational platforms.",
      description:
        "We engineer multi-tenant Cloud SaaS ecosystems, real-time analytics platforms, and responsive Web/Mobile applications. Our architectures are crafted using modern frameworks like React and Next.js, backed by optimized microservices, providing latency-free performance under massive user scale.",
      gradient: "from-cyan-600 via-teal-600 to-emerald-600",
      textColor: "text-cyan-600 dark:text-cyan-400",
      bgGlow: "bg-cyan-500/10",
      borderGlow: "border-cyan-500/30",
      techStack: [
        "Next.js",
        "React Native",
        "Node.js",
        "PostgreSQL",
        "Drizzle ORM",
        "Real-time WebSockets",
      ],
      servicesList: [
        {
          name: "Multi-Tenant SaaS Frameworks",
          desc: "Secure subscription-ready architectures with granular RBAC controls.",
        },
        {
          name: "High-Performance Web Engines",
          desc: "Blazing-fast Next.js portals built for premium responsiveness.",
        },
        {
          name: "Cross-Platform Mobile Apps",
          desc: "React Native iOS & Android applications with native animation logic.",
        },
        {
          name: "Real-Time Data Pipelines",
          desc: "Streaming analytics dashboards updating in sub-seconds.",
        },
      ],
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center min-h-[300px] gap-4">
          {/* Stack Layers (Database -> Core Service -> Frontend Device) */}
          {[
            { label: "Application UI", icon: Smartphone, delay: 0 },
            { label: "API Services & WS", icon: Activity, delay: 0.5 },
            { label: "Drizzle DB Engine", icon: Database, delay: 1 },
          ].map((layer, idx) => {
            const LayerIcon = layer.icon;
            return (
              <motion.div
                key={idx}
                className="w-64 p-4 rounded-xl border border-slate-200 bg-white flex items-center gap-4 shadow-md relative z-20 dark:bg-slate-900 dark:border-slate-800"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: layer.delay }}
                whileHover={{ scale: 1.03, zIndex: 30 }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <LayerIcon className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {layer.label}
                  </p>
                  <p className="text-xs text-slate-400">Microservice Node</p>
                </div>

                {/* Floating data packets flowing up */}
                {idx > 0 && (
                  <motion.div
                    className="absolute -top-3 left-12 w-2 h-2 rounded-full bg-cyan-500"
                    animate={{ y: [20, -25], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: layer.delay,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      ),
    },
    infrastructure: {
      id: "infrastructure" as CategoryType,
      tabLabel: "Hardware & Cybersecurity",
      title: "Embedded System Hardware & Cloud Infrastructure",
      tagline:
        "Zero-trust network architectures, embedded firmware, and global cloud nodes.",
      description:
        "We specialize in bare-metal embedded engineering, custom VLSI design, real-time operating systems (RTOS), and IoT architectures. Simultaneously, we construct secure, highly available, and auto-scaling cloud topologies across AWS, GCP, and Azure with end-to-end zero-trust cybersecurity policies.",
      gradient: "from-fuchsia-600 via-rose-600 to-red-600",
      textColor: "text-fuchsia-600 dark:text-fuchsia-400",
      bgGlow: "bg-fuchsia-500/10",
      borderGlow: "border-fuchsia-500/30",
      techStack: [
        "AWS / GCP",
        "Kubernetes",
        "RTOS Firmware",
        "VLSI Design",
        "Zero-Trust SSL/TLS",
        "IoT Edge Gates",
      ],
      servicesList: [
        {
          name: "Zero-Trust Cyber Shielding",
          desc: "Rigorous penetration audits, secure identity, and end-to-end encryption.",
        },
        {
          name: "Low-Level RTOS Firmware",
          desc: "Highly optimized device drivers and bare-metal power-efficient code.",
        },
        {
          name: "VLSI Design Architectures",
          desc: "Custom silicon blueprints optimized for computational throughput.",
        },
        {
          name: "Kubernetes Cloud Topologies",
          desc: "Auto-scaling self-healing cluster orchestration on AWS & GCP.",
        },
      ],
      visual: (
        <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
          {/* Rotating Shield Grid */}
          <motion.div
            className="w-48 h-48 rounded-full border-2 border-dashed border-fuchsia-500/30 flex items-center justify-center relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {/* Inner Ring */}
            <div className="w-32 h-32 rounded-full border border-dotted border-fuchsia-400/20" />

            {/* Satellite nodes representing firewall ports */}
            <div className="absolute top-0 w-3 h-3 rounded-full bg-fuchsia-500" />
            <div className="absolute bottom-0 w-3 h-3 rounded-full bg-rose-500" />
            <div className="absolute left-0 w-3 h-3 rounded-full bg-purple-500" />
            <div className="absolute right-0 w-3 h-3 rounded-full bg-red-500" />
          </motion.div>

          {/* Central Security Core */}
          <motion.div
            className="absolute w-20 h-20 rounded-2xl bg-gradient-to-tr from-fuchsia-500 to-rose-600 flex items-center justify-center shadow-xl shadow-fuchsia-950/20"
            whileHover={{ scale: 1.1 }}
          >
            <Shield className="w-9 h-9 text-white" />
          </motion.div>

          {/* Pulse Ripple Effect */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border border-fuchsia-500/10"
            animate={{ scale: [0.8, 1.4], opacity: [0.8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
      ),
    },
  };

  return (
    <section
      id="services"
      className="py-32 bg-slate-50/50 relative overflow-hidden transition-colors duration-300 dark:bg-slate-950"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-semibold uppercase tracking-wider mb-4 dark:bg-blue-950/30 dark:border-blue-500/30 dark:text-blue-400">
              <Sparkles size={14} className="animate-pulse" />
              Capabilities Showcase
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              Our core
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                Business Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
              Transforming complex engineering challenges into secure, scalable,
              and intelligent enterprise platforms.
            </p>
          </motion.div>
        </div>

        {/* Tab Switcher - Cinematic Nav Bar */}
        <div className="flex justify-center mb-16">
          <div className="flex p-2 rounded-2xl bg-white border border-slate-200 shadow-lg gap-2 relative z-20 dark:bg-slate-900 dark:border-slate-800">
            {(Object.keys(categories) as CategoryType[]).map(key => {
              const category = categories[key];
              const isSelected = activeCategory === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 relative ${
                    isSelected
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Showcase Canvas */}
        <div className="relative min-h-[550px]">
          <AnimatePresence mode="wait">
            {(Object.keys(categories) as CategoryType[]).map(key => {
              if (activeCategory !== key) return null;
              const category = categories[key];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-slate-200/40 relative overflow-hidden dark:bg-slate-900 dark:border-white/5 dark:shadow-none"
                >
                  {/* Decorative background glow */}
                  <div
                    className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl ${category.bgGlow} -z-10`}
                  />

                  {/* Left Side Content (6 cols) */}
                  <div className="lg:col-span-7 text-left space-y-6">
                    <span
                      className={`text-sm font-extrabold uppercase tracking-widest ${category.textColor}`}
                    >
                      {category.tabLabel}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-semibold dark:text-slate-300">
                      {category.tagline}
                    </p>
                    <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
                      {category.description}
                    </p>

                    {/* Sub-services breakdown list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {category.servicesList.map((service, idx) => (
                        <div key={idx} className="flex gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 shrink-0 mt-0.5 ${category.textColor}`}
                          />
                          <div>
                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                              {service.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack badging */}
                    <div className="pt-4">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                        Technology Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.techStack.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs bg-slate-100 text-slate-600 rounded-lg font-bold border border-slate-200/60 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        onClick={() =>
                          window.dispatchEvent(new CustomEvent("open-booking"))
                        }
                        className={`bg-gradient-to-r ${category.gradient} text-white font-bold rounded-xl px-8 py-5 shadow-lg group`}
                      >
                        Inquire About Service
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </div>
                  </div>

                  {/* Right Side Visual Component (5 cols) */}
                  <div className="lg:col-span-5 flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100 relative dark:bg-slate-950/20 dark:border-slate-800/40">
                    {category.visual}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
