import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Layers,
  Activity,
  Sparkles,
  Shield,
  ArrowRight,
  Database,
  Users,
  GraduationCap,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Products() {
  const features = [
    {
      title: "Smart Academic Scheduler",
      description:
        "Automatically aligns student club meetings, academic calendars, guest lectures, and space allocations with zero scheduling conflicts.",
      icon: Calendar,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Dynamic Resource & Venue Booker",
      description:
        "Streamline reservations for lecture halls, laboratories, audio-visual equipment, and campus grounds with real-time availability tracking.",
      icon: Database,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Engagement & Ticketing Engine",
      description:
        "Manage RSVPs, issue digital QR-code tickets, analyze attendee feedback, and track real-time participation statistics.",
      icon: Users,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Administrative Approval Pipeline",
      description:
        "A transparent visual workflow for event proposals, budget requests, and administrative sign-offs for student organizations.",
      icon: Layers,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Campus Safety & Compliance Audit",
      description:
        "Ensure compliance with venue capacity guidelines, local safety regulations, and automated campus security notifications.",
      icon: Shield,
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      title: "Club Analytics Dashboard",
      description:
        "Provide student clubs and societies with a single dashboard to track membership growth, historical attendance, and budget burn rates.",
      icon: Activity,
      gradient: "from-emerald-500 to-blue-600",
    },
  ];

  return (
    <div className="w-full bg-slate-50/50 text-slate-900 min-h-screen pt-24 pb-16 overflow-hidden transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <section className="container relative z-10 pt-12 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-200 dark:to-purple-400">
            SEM
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-slate-700 max-w-3xl mx-auto mb-4 leading-normal dark:text-slate-300">
            Student Event Management
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed dark:text-slate-400">
            The premier campus orchestration hub. SEM unifies space booking,
            student club coordination, digital ticketing, and administrative
            workflows into a single high-performance workspace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
              size="lg"
              className="px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all text-base group dark:from-blue-500 dark:to-indigo-500"
            >
              Request Campus Demo
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <a
              href="#features"
              className="px-8 py-4 text-slate-600 hover:text-slate-900 transition-colors font-semibold dark:text-slate-400 dark:hover:text-white"
            >
              Explore Capabilities
            </a>
          </div>
        </motion.div>
      </section>

      {/* Product Image / Poster Container */}
      <section className="container py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-indigo-950/50"
        >
          {/* Decorative frame elements */}
          <div className="absolute top-4 left-6 flex gap-2 z-20">
            <div className="w-3 h-3 rounded-full bg-rose-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="absolute top-4 right-6 text-xs text-slate-400 font-mono z-20 dark:text-slate-500">
            sem poster.png
          </div>

          {/* Product Poster Box */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative group bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50 flex items-center justify-center border border-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 dark:border-white/5">
            {/* Fallback Poster Background with rich graphics */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

            {/* Try to load the user's poster, fallback to a gorgeous placeholder */}
            <img
              loading="lazy"
              decoding="async"
              src="/images/sem%20poster.webp"
              alt="SEM Platform Poster"
              className="w-full h-full object-cover relative z-10 opacity-100 transition-opacity group-hover:scale-[1.01] duration-500"
              onError={e => {
                // If image fails, hide it and keep the premium styled fallback visible
                (e.target as HTMLElement).style.display = "none";
              }}
            />

            {/* Premium Fallback Graphic */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center select-none pointer-events-none z-0">
              <Calendar className="w-20 h-20 text-indigo-500/20 animate-pulse mb-6" />
              <h3 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 dark:from-blue-400 dark:to-purple-400">
                SEM Ecosystem Map
              </h3>
              <p className="text-sm text-slate-500 max-w-md">
                This space displays the product poster image. Make sure to place
                your poster file at{" "}
                <code className="text-slate-600 font-mono dark:text-slate-400">
                  public/images/sem poster.png
                </code>{" "}
                to display it.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Advanced Capabilities
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto dark:text-slate-400">
            SEM is built on a scalable and secure campus infrastructure designed
            to empower student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl border border-slate-200/80 bg-white hover:bg-slate-50/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden dark:border-white/5 dark:bg-slate-900/40 dark:hover:bg-slate-900/80 dark:hover:border-indigo-500/30"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] blur-2xl rounded-full transition-opacity duration-500`}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-md shadow-indigo-200/25 group-hover:scale-110 transition-transform duration-300 dark:shadow-indigo-950/20`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors dark:text-slate-200 dark:group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Product Highlight Callout */}
      <section className="container py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-slate-50 p-12 border border-slate-200 relative overflow-hidden dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-slate-950 dark:border-white/10"
        >
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="max-w-3xl relative z-10">
            <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-100">
              Ready to deploy SEM inside your university campus?
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed dark:text-slate-300">
              SEM offers secure LDAP integration, single sign-on (SSO), private
              cloud hosting, and strict administrative control configurations to
              align with institutional standards. Get in touch with our
              solutions architects to design your rollout plan.
            </p>
            <Button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-booking"))
              }
              size="lg"
              className="px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              Consult an AI Campus Architect
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
