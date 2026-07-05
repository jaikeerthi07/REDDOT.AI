import { motion } from "framer-motion";

export default function TrustedCompanies() {
  const companies = [
    {
      name: "Google Cloud",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M21.5 11.5c-1.38 0-2.58.83-3.08 2.02-.63-.9-1.68-1.48-2.85-1.48-1.57 0-2.88 1.05-3.32 2.5-1.34.1-2.4 1.22-2.4 2.6 0 1.44 1.16 2.6 2.6 2.6h8.8c1.55 0 2.8-1.25 2.8-2.8 0-1.55-1.25-2.8-2.55-2.8z" />
          <path
            d="M12.45 6.6c-2.3 0-4.3 1.5-5.06 3.65-1.92.1-3.44 1.7-3.44 3.65 0 2 1.6 3.6 3.6 3.6H9V15H7.55c-1.18 0-2.15-.96-2.15-2.15 0-1.1.84-2 1.93-2.13l.8-.1-.28-.75C8.42 8.35 9.8 7.35 11.35 7.35c1.43 0 2.64.9 3.16 2.2l.3.73.78-.14c1.1-.2 2.1.52 2.3 1.6l.08.36h1.2c.75 0 1.35.6 1.35 1.35s-.6 1.35-1.35 1.35h-1v1.5h1c1.57 0 2.85-1.28 2.85-2.85 0-1.5-1.15-2.73-2.6-2.84-.5-1.68-2.06-2.88-3.9-2.88-1.25 0-2.4.58-3.1 1.5l-.2-.3c-.63-1-1.74-1.63-2.94-1.63z"
            opacity=".6"
          />
        </svg>
      ),
    },
    {
      name: "AWS",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M14.07 15.18c-1.63 1.34-4.23 2.1-6.79 2.1-3.21 0-5.83-1.07-7.28-2.61v3.08c1.68 1.5 4.34 2.25 7.28 2.25 3.1 0 6.13-1.05 7.9-2.58l-1.11-2.24zm8.6-2.92c-.17-.18-.36-.26-.64-.26-.35 0-.67.14-.85.34l-2.02 2.65-2.06-2.54c-.17-.2-.48-.38-.85-.38-.28 0-.5.1-.64.26l-1.4 1.76c-.16.2-.24.44-.24.64 0 .32.14.62.36.8l1.7 1.48v2.7h-3.41v2.32h5.58v-4.14l1.37-1.54 1.34 1.54v4.14h5.58v-2.32h-3.26v-2.7l1.7-1.48c.2-.18.35-.48.35-.8 0-.2-.08-.44-.25-.64l-1.36-1.76z" />
        </svg>
      ),
    },
    {
      name: "Microsoft Azure",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M5.483 21.3l5.051-14.78 11.233 13.911-3.692 1.474-12.592-.605zm8.905-18.15l-4.524 4.544-3.702-6.529h5.166l3.06 1.985z" />
        </svg>
      ),
    },
    {
      name: "OpenAI",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2057 5.9894 5.9894 0 0 0 3.9929-2.9001 6.0462 6.0462 0 0 0-.7427-7.0731zM13.0652 22.4927a4.4984 4.4984 0 0 1-2.8615-1.0416l.1678-.096 4.7788-2.7584a1.4927 1.4927 0 0 0 .736-.1446V13.048l3.2678 1.8841a4.4839 4.4839 0 0 1-6.0889 7.5606zm-8.6414-3.3235a4.4839 4.4839 0 0 1-.8065-3.037l.163.096 4.7788 2.7584a1.4927 1.4927 0 0 0 1.104.0528l4.6974-2.712v3.768a4.4984 4.4984 0 0 1-9.9367-.9262zm16.5366-5.068a4.4839 4.4839 0 0 1-2.0552 2.1107l-.163-.096-4.7788-2.7584a1.4927 1.4927 0 0 0-1.472-.0912l-4.6974 2.712v-3.768a4.4984 4.4984 0 0 1 13.1664 1.8909zM4.9807 8.3585a4.4839 4.4839 0 0 1 2.8615 1.0416l-.1678.096-4.7788 2.7584a1.4927 1.4927 0 0 0-.736.1446V6.9952l-3.2678-1.8841a4.4839 4.4839 0 0 1 6.0889-7.5606z" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M13.976 9.15c-1.396-.402-2.223-.743-2.223-1.636 0-.735.618-1.196 1.637-1.196 1.776 0 3.393.57 4.673 1.542l1.107-3.92C17.653 2.748 15.65 2.196 13.684 2.196 9.774 2.196 7.07 4.292 7.07 8.012c0 5.485 7.054 5.378 7.054 7.648 0 1.018-.95 1.428-2.128 1.428-2.235 0-4.32-.976-5.918-2.164L4.856 18.99c1.92 1.432 4.686 2.213 7.502 2.213 4.195 0 6.945-2.035 6.945-5.835 0-5.63-7.327-5.46-7.327-7.807V9.15z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      ),
    },
    {
      name: "Anthropic",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12.016 4.397L4.417 19.387h2.723l1.83-3.666h6.059l1.83 3.666h2.724L12.016 4.397zm-2.023 9.401l2.023-4.053 2.023 4.053H9.993z" />
        </svg>
      ),
    },
    {
      name: "Linear",
      type: "svg",
      component: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 1.343l10.657 10.657-10.657 10.657L1.343 12 12 1.343zm0 2.828L4.172 12 12 19.828 19.828 12 12 4.171z" />
        </svg>
      ),
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const floatingAnimation = {
    y: [-8, 8],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as any,
    },
  };

  return (
    <section className="relative py-32 bg-slate-950 border-t border-b border-white/10 overflow-hidden">
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Trusted By Leading Companies
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powering Innovation Across Industries
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join the world's most innovative teams building the future with our
            enterprise AI solutions.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="group relative flex flex-col items-center justify-center p-8 lg:p-10 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-all duration-500 overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              animate={floatingAnimation}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card internal glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />

              <div className="relative z-10 h-16 flex items-center justify-center mb-4 text-slate-400 group-hover:text-white transition-colors duration-500">
                {company.component && (
                  <company.component className="h-12 w-auto opacity-70 group-hover:opacity-100 group-hover:scale-110 drop-shadow-sm transition-all duration-500" />
                )}
              </div>
              <p className="relative z-10 text-sm font-semibold text-slate-500 group-hover:text-blue-300 transition-colors duration-500">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, opacity" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, opacity" }}
          />
        </div>
      </div>
    </section>
  );
}
