import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState, memo } from "react";

interface TechItem {
  name: string;
  category: string;
  color: string;
  logo: string;
}

const techItems: TechItem[] = [
  // AI/ML
  { name: "Python", category: "AI/ML", color: "#3776AB", logo: "🐍" },
  { name: "TensorFlow", category: "AI/ML", color: "#FF6F00", logo: "🧠" },
  { name: "PyTorch", category: "AI/ML", color: "#EE4C2C", logo: "🔥" },
  { name: "LangChain", category: "AI/ML", color: "#1C3C3C", logo: "⛓️" },
  { name: "OpenAI", category: "AI/ML", color: "#412991", logo: "🤖" },
  { name: "Anthropic", category: "AI/ML", color: "#D4A843", logo: "🤖" },
  { name: "Gemini", category: "AI/ML", color: "#4285F4", logo: "💎" },
  { name: "HuggingFace", category: "AI/ML", color: "#FFD21E", logo: "🤗" },
  // Cloud
  { name: "AWS", category: "Cloud", color: "#FF9900", logo: "☁️" },
  { name: "Azure", category: "Cloud", color: "#0078D4", logo: "☁️" },
  { name: "Google Cloud", category: "Cloud", color: "#4285F4", logo: "☁️" },
  { name: "Docker", category: "Cloud", color: "#2496ED", logo: "🐳" },
  { name: "Kubernetes", category: "Cloud", color: "#326CE5", logo: "⎈" },
  { name: "Firebase", category: "Cloud", color: "#FFCA28", logo: "🔥" },
  // Frontend
  { name: "React", category: "Frontend", color: "#61DAFB", logo: "⚛️" },
  { name: "Next.js", category: "Frontend", color: "#000000", logo: "▲" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", logo: "📘" },
  { name: "Vue.js", category: "Frontend", color: "#4FC08D", logo: "💚" },
  // Backend
  { name: "FastAPI", category: "Backend", color: "#009688", logo: "⚡" },
  { name: "Node.js", category: "Backend", color: "#339933", logo: "🟢" },
  { name: "PostgreSQL", category: "Backend", color: "#336791", logo: "🐘" },
  { name: "Redis", category: "Backend", color: "#DC382D", logo: "🔴" },
  { name: "MongoDB", category: "Backend", color: "#47A248", logo: "🍃" },
];

function MarqueeRow({
  items,
  direction = 1,
  speed = 30,
}: {
  items: TechItem[];
  direction?: 1 | -1;
  speed?: number;
}) {
  const x = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || document.hidden) return;
    const moveBy = direction * (speed / 1000) * delta;
    if (ref.current) {
      const width = ref.current.scrollWidth / 2;
      if (!width) return;
      x.set((x.get() + moveBy) % -width);
    }
  });

  const doubledItems = [...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        ref={ref}
        className="flex gap-4 will-change-transform"
        style={{ x }}
      >
        {doubledItems.map((tech, idx) => (
          <motion.div
            key={idx}
            className="group relative flex-shrink-0"
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-default">
              <span className="text-2xl">{tech.logo}</span>
              <div>
                <p className="text-sm font-bold text-slate-800 whitespace-nowrap">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-500">{tech.category}</p>
              </div>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap shadow-lg"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const TechStack = memo(function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ["All", "AI/ML", "Cloud", "Frontend", "Backend"];

  const row1 = techItems.filter((_, i) => i < 12);
  const row2 = techItems.filter((_, i) => i >= 12);

  return (
    <section className="py-32 bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      <div className="container mb-16">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Built With
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry-Leading Tools
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From AI frameworks to cloud infrastructure — we leverage the best
            technologies to build solutions that scale
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat === "All" ? null : cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                (cat === "All" && activeCategory === null) ||
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        <MarqueeRow items={row1} direction={-1} speed={25} />
        <MarqueeRow items={row2} direction={1} speed={20} />
      </div>

      {/* Stats bar */}
      <div className="container mt-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ willChange: "transform, opacity" }}
        >
          {[
            { value: "23+", label: "Technologies", desc: "In our tech stack" },
            { value: "5+", label: "AI Models", desc: "Production deployments" },
            {
              value: "99.9%",
              label: "Uptime SLA",
              desc: "Cloud infrastructure",
            },
            { value: "<100ms", label: "API Response", desc: "Average latency" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default TechStack;
