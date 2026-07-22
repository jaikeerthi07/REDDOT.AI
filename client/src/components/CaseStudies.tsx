import { memo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck,
  Coffee,
  Dumbbell,
  Hotel,
  MessageCircle,
  Sparkles,
  Star,
  Utensils,
  Zap,
} from "lucide-react";

const CaseStudies = memo(function CaseStudies() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as any },
    },
  };

  const venues = [
    { icon: Hotel, label: "Hotels", color: "from-blue-500 to-cyan-500" },
    {
      icon: Utensils,
      label: "Restaurants",
      color: "from-orange-500 to-amber-500",
    },
    { icon: Dumbbell, label: "Gyms", color: "from-green-500 to-emerald-500" },
    { icon: Coffee, label: "Cafés", color: "from-yellow-600 to-orange-500" },
    { icon: Building2, label: "Clinics", color: "from-red-500 to-pink-500" },
    {
      icon: CalendarCheck,
      label: "Salons",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const features = [
    { icon: MessageCircle, text: "Natural voice & chat conversations" },
    { icon: CalendarCheck, text: "Real-time appointment booking" },
    { icon: Star, text: "Personalized service recommendations" },
    { icon: Bot, text: "24/7 availability — no human needed" },
    { icon: Hotel, text: "Room / table / slot availability checks" },
    { icon: Zap, text: "Instant confirmation & reminders" },
  ];

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      id="projects"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Built to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Redefine
            </span>{" "}
            What's Possible
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From autonomous multi-agent systems to intelligent AI receptionists
            — every product engineered for real-world impact.
          </p>
        </motion.div>

        {/* PROJECT 1: HAPP — Featured Full-Width */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-all duration-500 bg-white shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src="/images/happ_agent_hero.webp"
                  alt="HAPP Agentic AI Manager"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 lg:to-white/50" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
                    <Zap size={12} /> FLAGSHIP AI PRODUCT
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
                  Multi-Agent AI Orchestration
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  HAPP — Agentic AI Manager
                </h3>
                <p className="text-blue-600 font-semibold mb-4 italic">
                  One AI Brain. 12 Specialized Agents. Infinite Possibilities.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  HAPP (Hierarchical Autonomous Parallel Processing) commands 12
                  specialized AI agents simultaneously — JARVIS, SIRI, ZEUS,
                  ATLAS, NOVA, ORION, ECHO, SAGE, TITAN, ARIA, PHOENIX & NEXUS.
                  Like your personal Iron Man suit for productivity, HAPP
                  delegates, monitors, and synthesizes complex multi-step tasks
                  across research, coding, writing, scheduling, data analysis,
                  and creative work — all from a single conversational
                  interface.
                </p>

                {/* Agents */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
                    12 Active Agents
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "JARVIS",
                      "SIRI",
                      "ZEUS",
                      "ATLAS",
                      "NOVA",
                      "ORION",
                      "ECHO",
                      "SAGE",
                      "TITAN",
                      "ARIA",
                      "PHOENIX",
                      "NEXUS",
                    ].map(agent => (
                      <span
                        key={agent}
                        className="px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 text-xs font-bold"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Active Agents", value: "12" },
                    { label: "Task Automation", value: "98%" },
                    { label: "Response Time", value: "<1s" },
                  ].map(m => (
                    <div
                      key={m.label}
                      className="text-center p-3 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100"
                    >
                      <p className="text-2xl font-bold text-blue-600">
                        {m.value}
                      </p>
                      <p className="text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm w-fit"
                  whileHover={{ x: 4 }}
                >
                  Explore HAPP Platform <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROJECT 2: Receptionist AI Avatar — Featured Full-Width */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 hover:border-purple-400 transition-all duration-500 bg-white shadow-2xl group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content — left on this card */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <p className="text-purple-600 text-sm font-semibold uppercase tracking-widest mb-2">
                  Conversational AI Agent
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  AI Receptionist Avatar
                </h3>
                <p className="text-purple-600 font-semibold mb-4 italic">
                  Your 24/7 Front Desk, Powered by AI.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  An intelligent AI receptionist avatar that handles bookings,
                  enquiries, and customer interactions for hotels, restaurants,
                  gyms, cafés, clinics, and salons. Using natural voice and text
                  conversations, it checks availability in real-time, confirms
                  reservations, sends automated reminders, handles FAQs, and
                  upsells services — all without a single human operator. Deploy
                  once, run forever.
                </p>

                {/* Venue badges */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-3">
                    Perfect For
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {venues.map(({ icon: Icon, label, color }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-purple-300 transition-colors"
                      >
                        <div
                          className={`w-7 h-7 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon size={14} className="text-white" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {features.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <Icon
                        size={14}
                        className="text-purple-500 flex-shrink-0"
                      />
                      {text}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Availability", value: "24/7" },
                    { label: "Booking Speed", value: "<30s" },
                    { label: "Satisfaction", value: "97%" },
                  ].map(m => (
                    <div
                      key={m.label}
                      className="text-center p-3 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100"
                    >
                      <p className="text-2xl font-bold text-purple-600">
                        {m.value}
                      </p>
                      <p className="text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all text-sm w-fit"
                  whileHover={{ x: 4 }}
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-booking"))
                  }
                >
                  Deploy for Your Business <ArrowRight size={16} />
                </motion.button>
              </div>

              {/* Image — right on this card */}
              <div className="relative h-72 lg:h-auto overflow-hidden order-1 lg:order-2">
                <img
                  src="/images/receptionist_ai_avatar.webp"
                  alt="AI Receptionist Avatar Agent"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10 lg:to-white/30" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-lg">
                    <Bot size={12} /> NEW PRODUCT
                  </span>
                </div>
                {/* Floating conversation bubbles */}
                <div className="absolute bottom-6 left-4 right-4 space-y-2">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-lg max-w-[85%] text-xs font-medium text-slate-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    👋 Hi! I'd love to book a table for 4 at 7 PM tonight!
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl rounded-br-sm px-4 py-2.5 shadow-lg max-w-[85%] ml-auto text-xs font-medium text-white"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    ✅ Done! Table for 4 at 7:00 PM confirmed. See you tonight!
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-6 text-lg">
            Ready to deploy AI that actually works for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
            >
              Book a Free Demo
            </button>
            <button className="px-8 py-3.5 border border-slate-300 text-foreground rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold flex items-center gap-2 justify-center">
              View All Products <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default CaseStudies;
