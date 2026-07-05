import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Link2,
  FileQuestion,
} from "lucide-react";
import { useParams, Link } from "wouter";
import { useState } from "react";

const BLOG_POSTS: Record<
  string,
  {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    authorRole: string;
    authorBio: string;
    date: string;
    readTime: string;
    tags: string[];
    coverGradient: string;
    image: string;
    content: string;
  }
> = {
  "future-of-enterprise-ai-agents": {
    slug: "future-of-enterprise-ai-agents",
    title: "The Future of Enterprise AI Agents: Autonomous Systems in 2025",
    excerpt:
      "Explore how autonomous AI agents are transforming enterprise workflows, from decision-making to complex multi-step task execution across organizations.",
    category: "AI",
    author: "Jaikeerthi",
    authorRole: "AI Specialist",
    authorBio:
      "Jaikeerthi is an AI Specialist at REDDOT. With extensive expertise in deep learning, autonomous systems, and neural network engineering, he leads the AI Research & Development division to build next-generation enterprise cognitive agents.",
    date: "June 25, 2026",
    readTime: "8 min read",
    tags: ["AI Agents", "Automation", "Enterprise"],
    coverGradient: "from-blue-600 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    content: `
## Introduction

Enterprise AI agents represent a fundamental shift in how businesses operate. Unlike traditional software that responds to explicit commands, modern AI agents can perceive their environment, plan multi-step actions, and autonomously execute complex workflows.

## What Are Enterprise AI Agents?

Enterprise AI agents are autonomous software systems powered by large language models (LLMs) that can:

- **Plan and reason** about complex business tasks
- **Use tools** like databases, APIs, and external services
- **Learn from feedback** and improve over time
- **Collaborate** with other agents and humans in hybrid workflows

## Key Capabilities in 2025

### 1. Multi-Step Planning
Modern agents don't just answer questions — they decompose complex goals into actionable steps. A finance agent, for example, can receive a request like "prepare Q3 board report" and autonomously gather data, generate charts, write narratives, and format the final document.

### 2. Tool Use and API Integration
Agents seamlessly integrate with existing enterprise systems through APIs. They can query CRMs, execute database searches, trigger workflows in ERP systems, and coordinate with third-party services — all without human intervention.

### 3. Multi-Agent Orchestration
The most powerful enterprise deployments use networks of specialized agents working together. An orchestrator agent delegates subtasks to specialist agents (legal, finance, engineering) and synthesizes their outputs.

## Real-World Applications

**Healthcare**: AI agents that review patient records, flag drug interactions, and generate clinical summaries — reducing physician administrative burden by 40%.

**Finance**: Autonomous agents monitoring thousands of transactions simultaneously, detecting anomalies, and triggering escalations in real-time.

**Manufacturing**: Agents monitoring IoT sensor streams, predicting equipment failures 72 hours in advance, and automatically scheduling maintenance.

## Implementation Challenges

Despite the promise, enterprises face real challenges:

1. **Trust and verification** — How do you ensure an agent's actions are correct?
2. **Security boundaries** — Preventing agents from accessing sensitive systems they shouldn't
3. **Cost management** — LLM inference costs at scale can be significant
4. **Change management** — Training teams to work alongside autonomous systems

## The REDDOT Approach

At REDDOT, we've developed a production-ready AI agent framework that addresses these challenges through:

- **Sandboxed execution environments** for safe tool use
- **Human-in-the-loop checkpoints** for high-stakes decisions
- **Comprehensive audit trails** for compliance and debugging
- **Cost-optimized model routing** — using smaller models for simple tasks

## Looking Ahead

By 2027, we expect 60% of Fortune 500 companies to have deployed enterprise AI agents handling at least one core business process. The winners will be those who start building agent-ready infrastructure today.

The key insight: AI agents aren't replacing humans — they're amplifying human capacity to operate at unprecedented scale.
    `,
  },
  "rag-systems-production-guide": {
    slug: "rag-systems-production-guide",
    title: "Building Production-Grade RAG Systems: A Complete Guide",
    excerpt:
      "Learn how to design and deploy Retrieval-Augmented Generation systems that scale to millions of queries with sub-second latency.",
    category: "ML",
    author: "Priya Patel",
    authorRole: "ML Research Lead",
    authorBio:
      "Priya Patel manages the ML systems division at REDDOT. Previously, she designed context-retrieval systems at Meta and specializes in semantic routing and vector database optimization.",
    date: "June 20, 2026",
    readTime: "12 min read",
    tags: ["RAG", "LLM", "Vector DB"],
    coverGradient: "from-purple-600 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    content: `
## Introduction

Retrieval-Augmented Generation (RAG) has emerged as the industry standard for grounding Large Language Models in proprietary business databases. This guide covers production considerations for deploying sub-second latency RAG frameworks.

## Why RAG is Essential for Enterprise

Generic LLMs suffer from three critical bottlenecks: knowledge cutoff, hallucinations, and lack of private context. RAG bypasses these by retrieving relevant document snippets before feeding the context to the LLM.

## Key Architecture Stages

### 1. Document Ingestion and Chunking
Ingesting text requires advanced cleaning, metadata tagging, and semantic chunking. Rather than naive character limits, we split paragraphs based on sentence boundaries to preserve context.

### 2. Embeddings Generation
Text chunks are passed to embedding models to generate high-dimensional vectors representing conceptual meaning. Selecting models with robust cosine-similarity tracking is key.

### 3. Vector Search
Vectors are index-searched using specialized databases (Pinecone, pgvector, or Milvus). Modern production architectures leverage HNSW indexing for rapid retrieval.

### 4. Generation and Re-ranking
Before LLM processing, retrieved nodes are prioritized using cross-encoders (re-ranking). This filters out irrelevant noise and places high-priority context in the model's primary attention window.
    `,
  },
  "llm-fine-tuning-enterprise": {
    slug: "llm-fine-tuning-enterprise",
    title: "Fine-tuning LLMs for Enterprise: Lessons from 50+ Deployments",
    excerpt:
      "Real-world insights from fine-tuning large language models for specific business domains, including cost optimization and safety considerations.",
    category: "Research",
    author: "Nathan Chen",
    authorRole: "Principal Engineer",
    authorBio:
      "Nathan Chen is a Principal Engineer at REDDOT. He was formerly an AI infrastructure engineer at Google Brain and focuses on cost-efficient fine-tuning systems.",
    date: "June 15, 2026",
    readTime: "10 min read",
    tags: ["LLM", "Fine-tuning", "Enterprise AI"],
    coverGradient: "from-cyan-600 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    content: `
## Introduction

While off-the-shelf foundation models are highly capable, domain-specific tasks often demand fine-tuning. Here, we outline findings from over 50 enterprise deployments of custom language models.

## When to Fine-tune vs Prompt Engineer

Most problems are solvable via structured prompt engineering and RAG. However, fine-tuning is required when:
- Model output format constraints must be strictly enforced.
- The model must adopt a specific, consistent brand tone.
- The latency of large prompt instructions is too high.
- The task requires complex domain vocabulary (e.g., medicine or law).

## Fine-Tuning Methodologies

### 1. Parameter-Efficient Fine-Tuning (PEFT / LoRA)
LoRA freezes the base model weights and injects trainable rank decomposition matrices. This reduces memory footprint by up to 90% and enables multi-tenant weight switching at runtime.

### 2. Quantization (QLoRA)
Quantizing base weights to 4-bit representation before injecting LoRA adapters enables tuning large parameters on cost-efficient hardware without quality degradation.
    `,
  },
  "iot-embedded-ai-edge": {
    slug: "iot-embedded-ai-edge",
    title: "AI at the Edge: Deploying Models on Embedded Systems",
    excerpt:
      "How to optimize and deploy machine learning models on resource-constrained IoT devices while maintaining accuracy and real-time performance.",
    category: "IoT",
    author: "Amara Osei",
    authorRole: "IoT Solutions Lead",
    authorBio:
      "Amara Osei leads edge computing engineering at REDDOT. She has over 10 years of experience writing firmware and RTOS implementations for connected microcontrollers.",
    date: "June 10, 2026",
    readTime: "7 min read",
    tags: ["IoT", "Edge AI", "Embedded"],
    coverGradient: "from-green-600 to-teal-600",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    content: `
## Introduction

Edge computing moves intelligence closer to the data source. We detail compilation practices for shrinking machine learning models down to run on embedded RTOS microchips.

## The Advantages of Edge AI
1. **Low Latency**: Decisions are made locally in real-time, bypassing cloud round-trip times.
2. **Offline Resilience**: Devices operate independently of internet availability.
3. **Data Privacy**: Raw camera or sensor feeds never leave the hardware device.

## Core Optimization Techniques
- **Quantization**: Converting weights from 32-bit floats to 8-bit integers.
- **Pruning**: Removing neural connections that have minimal impact on predictions.
- **Hardware Acceleration**: Compiling models specifically for micro-NPUs and DSPs.
    `,
  },
  "cybersecurity-ai-threat-detection": {
    slug: "cybersecurity-ai-threat-detection",
    title: "AI-Powered Threat Detection: Zero-Day Attack Prevention",
    excerpt:
      "Discover how modern AI cybersecurity systems detect and neutralize threats in real-time, far outperforming traditional rule-based approaches.",
    category: "Cybersecurity",
    author: "Marcus Williams",
    authorRole: "Security Architect",
    authorBio:
      "Marcus Williams is a cybersecurity architect at REDDOT, specializing in zero-trust models, threat intelligence, and behavioral network analytics.",
    date: "June 5, 2026",
    readTime: "9 min read",
    tags: ["Cybersecurity", "Threat Detection", "AI"],
    coverGradient: "from-red-600 to-orange-600",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    content: `
## Introduction

Traditional firewalls rely on historical threat signatures. Modern cybersecurity utilizes deep learning to identify real-time anomalies and zero-day attacks.

## Moving Beyond Signatures

Signature-based protection is useless against brand-new exploits. Deep neural networks analyze behavioral data packages to detect anomalies on the fly.

## Key Safeguards in Place
- **Behavioral Baselines**: Continuously mapping normal user/device interaction.
- **Automated Quarantine**: Isolating compromised network segments in milliseconds.
- **Heuristic Threat Scoring**: Scoring outgoing data streams for exfiltration indicators.
    `,
  },
  "automation-workflows-productivity": {
    slug: "automation-workflows-productivity",
    title: "Intelligent Automation: 10x Productivity Without the Headcount",
    excerpt:
      "Case studies on how enterprises use AI automation to eliminate repetitive tasks, reduce errors, and scale operations without proportional cost growth.",
    category: "Automation",
    author: "Sarah Thompson",
    authorRole: "Automation Strategist",
    authorBio:
      "Sarah Thompson is an automation expert at REDDOT. She consults with global enterprises on workflow design, operational scaling, and AI integrations.",
    date: "June 1, 2026",
    readTime: "6 min read",
    tags: ["Automation", "Productivity", "RPA"],
    coverGradient: "from-amber-600 to-yellow-500",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    content: `
## Introduction

Operational scaling usually requires hiring more teams. Intelligent automation lets enterprises scale output exponentially while keeping operational overhead lean.

## The Automation Maturity Curve
1. **Rule-Based (RPA)**: Simple web scraper/copy-paste jobs.
2. **Cognitive Integration**: AI processing invoices, extracting unstructured email details.
3. **Autonomous Execution**: AI agents making decisions, resolving tickets, and routing workflows.

## Quantifiable Business Impact
Across our deployments, enterprises have seen an average 70% reduction in workflow processing times, with data entry errors falling to absolute zero.
    `,
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = params.slug ? BLOG_POSTS[params.slug] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center p-8 bg-white border border-slate-200 rounded-3xl shadow-xl max-w-md dark:bg-slate-900 dark:border-slate-800">
          <FileQuestion className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Article Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The article you're looking for does not exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get other articles for sidebar
  const otherArticles = Object.values(BLOG_POSTS)
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="w-full min-h-screen bg-background pb-20">
      {/* Cinematic Hero */}
      <div className="relative py-32 overflow-hidden bg-slate-950">
        {/* Full bleed background image with blur & dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            decoding="async"
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover scale-105 blur-lg opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-slate-950/80 to-slate-950" />
        </div>

        <div className="container relative z-10">
          {/* Back link */}
          <Link href="/blog">
            <motion.div
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-10 text-sm font-semibold cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Category */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400 border-t border-slate-800/80 pt-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-slate-200">
                  {post.author}
                </span>
                <span className="text-xs opacity-60">· {post.authorRole}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-400" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                {post.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold"
                >
                  <Tag className="w-3 h-3 inline mr-1 text-blue-500" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content + Sidebar Grid */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content (8 cols) */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Cover Image container */}
            <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-10 dark:border-slate-800">
              <img
                loading="lazy"
                decoding="async"
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Excerpt */}
            <p className="text-xl text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-600 pl-6 italic dark:text-slate-400">
              {post.excerpt}
            </p>

            {/* Article content */}
            <div
              className="prose prose-lg prose-slate max-w-none dark:prose-invert
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed dark:prose-p:text-slate-400
                prose-li:text-slate-600 dark:prose-li:text-slate-400
                prose-strong:text-foreground prose-strong:font-bold
                prose-a:text-blue-600 prose-a:underline"
            >
              {post.content
                .trim()
                .split("\n")
                .map((line, idx) => {
                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={idx}
                        className="text-3xl font-black text-slate-900 mt-12 mb-6 dark:text-white tracking-tight"
                      >
                        {line.slice(3)}
                      </h2>
                    );
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3
                        key={idx}
                        className="text-xl font-bold text-slate-900 mt-8 mb-4 dark:text-white"
                      >
                        {line.slice(4)}
                      </h3>
                    );
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return null;
                  }
                  if (line.startsWith("- **")) {
                    const match = line.match(/^- \*\*(.+?)\*\* — (.+)/);
                    if (match) {
                      return (
                        <div key={idx} className="flex gap-3 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-3 flex-shrink-0" />
                          <p className="text-slate-600 dark:text-slate-400">
                            <strong className="text-slate-900 dark:text-white font-bold">
                              {match[1]}
                            </strong>{" "}
                            — {match[2]}
                          </p>
                        </div>
                      );
                    }
                  }
                  if (line.match(/^\d+\. \*\*/)) {
                    const match = line.match(/^(\d+)\. \*\*(.+?)\*\* — (.+)/);
                    if (match) {
                      return (
                        <div key={idx} className="flex gap-3 mb-3">
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                            {match[1]}
                          </span>
                          <p className="text-slate-600 dark:text-slate-400">
                            <strong className="text-slate-900 dark:text-white font-bold">
                              {match[2]}
                            </strong>{" "}
                            — {match[3]}
                          </p>
                        </div>
                      );
                    }
                  }
                  if (line.startsWith("**") && line.includes("**:")) {
                    const match = line.match(/^\*\*(.+?)\*\*: (.+)/);
                    if (match) {
                      return (
                        <p
                          key={idx}
                          className="text-slate-600 dark:text-slate-400 mb-3"
                        >
                          <strong className="text-slate-900 dark:text-white font-bold">
                            {match[1]}
                          </strong>
                          : {match[2]}
                        </p>
                      );
                    }
                  }
                  if (line.trim() === "") return <br key={idx} />;
                  return (
                    <p
                      key={idx}
                      className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4"
                    >
                      {line}
                    </p>
                  );
                })}
            </div>

            {/* Share links */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-widest font-mono">
                Share this article
              </p>
              <div className="flex gap-3">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all dark:border-slate-800 dark:text-slate-400 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all dark:border-slate-800 dark:text-slate-400 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all dark:border-slate-800 dark:text-slate-400 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyLink}
                >
                  <Link2 className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy Link"}
                </motion.button>
              </div>
            </div>

            {/* Author Bio container */}
            <motion.div
              className="mt-12 p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-md">
                  {post.author.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {post.author}
                  </h4>
                  <p className="text-sm text-blue-600 font-semibold mb-3 dark:text-blue-400">
                    {post.authorRole}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Save article button */}
              <motion.button
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:border-blue-400 hover:text-blue-600 transition-all dark:border-slate-800 dark:text-slate-400 dark:hover:text-blue-400 dark:bg-slate-900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Bookmark className="w-4 h-4" />
                Save Article
              </motion.button>

              {/* Related tags */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white text-left dark:bg-slate-900 dark:border-slate-800">
                <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest font-mono">
                  Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related articles */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white text-left dark:bg-slate-900 dark:border-slate-800">
                <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest font-mono">
                  More Articles
                </h4>
                <div className="space-y-4">
                  {otherArticles.map((rel, idx) => (
                    <Link key={idx} href={`/blog/${rel.slug}`}>
                      <motion.div
                        className="flex items-center gap-4 group cursor-pointer"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200 dark:border-slate-800">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug dark:text-slate-200 dark:group-hover:text-blue-400 line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {rel.readTime}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white text-left shadow-xl shadow-blue-500/10">
                <h4 className="font-bold mb-2">Weekly AI Digest</h4>
                <p className="text-white/80 text-sm mb-4">
                  Get the latest AI insights in your inbox
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 mb-3 focus:outline-none focus:border-white/40"
                />
                <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
