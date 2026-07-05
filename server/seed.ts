import "dotenv/config";
import { getDb } from "./db";
import { jobs, blogPosts, testimonials, caseStudies } from "../drizzle/schema";

const defaultJobs = [
  {
    title: 'AI Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹40K - ₹60K/mo',
    description: 'Work on cutting-edge Artificial Intelligence models and algorithms.',
    requirements: 'Strong foundation in Python\nFamiliarity with AI concepts\nEagerness to learn',
    status: 'open' as const,
  },
  {
    title: 'ML Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹40K - ₹60K/mo',
    description: 'Assist in designing, training, and fine-tuning state-of-the-art machine learning models.',
    requirements: 'Experience with PyTorch or TensorFlow\nSolid understanding of ML fundamentals\nStrong mathematical background',
    status: 'open' as const,
  },
  {
    title: 'Agentic AI Intern',
    department: 'Research',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹50K - ₹70K/mo',
    description: 'Push the boundaries of autonomous AI agents capable of planning and executing complex workflows.',
    requirements: 'Deep understanding of LLM reasoning capabilities\nExperience building multi-agent systems\nCreative problem-solving skills',
    status: 'open' as const,
  },
  {
    title: 'Gen AI Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹45K - ₹65K/mo',
    description: 'Build applications utilizing the latest Generative AI models (LLMs, Diffusion).',
    requirements: 'Experience with LangChain or LlamaIndex\nFamiliarity with prompt engineering\nUnderstanding of RAG architectures',
    status: 'open' as const,
  },
  {
    title: 'Full Stack Development Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹30K - ₹50K/mo',
    description: 'Build fast, responsive, and beautiful user interfaces and robust APIs.',
    requirements: 'Proficiency in React and Node.js\nExperience with TypeScript\nDatabase knowledge',
    status: 'open' as const,
  },
  {
    title: 'Backend Development Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹30K - ₹50K/mo',
    description: 'Develop scalable backend services and architect database schemas.',
    requirements: 'Experience with Node.js, Python, or Go\nUnderstanding of REST/GraphQL APIs\nKnowledge of PostgreSQL or MongoDB',
    status: 'open' as const,
  },
  {
    title: 'Data Science Intern',
    department: 'Data',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹40K - ₹60K/mo',
    description: 'Analyze large datasets, extract insights, and prepare high-quality data for model training.',
    requirements: 'Strong SQL and Python skills\nExperience with Pandas, NumPy\nStatistical analysis background',
    status: 'open' as const,
  },
  {
    title: 'Data Analytics Intern',
    department: 'Data',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹30K - ₹50K/mo',
    description: 'Create dashboards, track KPIs, and help drive data-informed business decisions.',
    requirements: 'Proficiency in SQL\nExperience with visualization tools (Tableau, PowerBI)\nStrong analytical skills',
    status: 'open' as const,
  },
  {
    title: 'Cyber Security Intern',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹35K - ₹55K/mo',
    description: 'Help secure our AI infrastructure and perform vulnerability assessments.',
    requirements: 'Knowledge of network security principles\nFamiliarity with penetration testing tools\nUnderstanding of cloud security',
    status: 'open' as const,
  },
  {
    title: 'Embedded System Intern',
    department: 'Hardware',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹35K - ₹55K/mo',
    description: 'Work on deploying lightweight AI models to edge devices and microcontrollers.',
    requirements: 'Strong C/C++ programming skills\nExperience with microcontrollers (ARM, ESP32)\nUnderstanding of RTOS',
    status: 'open' as const,
  },
];

const defaultBlogPosts = [
  {
    title: 'Building Production-Ready AI Agents with RAG',
    slug: 'building-production-ready-ai-agents-with-rag',
    excerpt: 'Learn the best practices and architecture patterns for building robust retrieval-augmented generation (RAG) agents for enterprise applications.',
    content: 'Retrieval-Augmented Generation (RAG) has emerged as the industry standard for bridging the gap between large language models and proprietary enterprise data. In this article, we dive deep into the architecture of production-ready AI agents, including hybrid search, semantic reranking, and agentic loop patterns that guarantee reliability and accuracy.',
    category: 'AI',
    author: 'Sarah Johnson',
    authorRole: 'CEO & Head of AI',
    readTime: '6 min read',
    featuredImage: '/manus-storage/global-network-connection_7a1d6ee4.jpg',
    tags: JSON.stringify(['AI', 'RAG', 'Vector DB', 'LLM']),
    seoTitle: 'Production RAG & AI Agents Architecture Guide | REDDOT AI',
    seoDescription: 'Discover how to build reliable, enterprise-grade AI agents using retrieval-augmented generation (RAG), semantic reranking, and agentic routing.',
    published: true,
    publishedAt: new Date(),
  },
  {
    title: 'The Future of Edge Computing and Embedded AI',
    slug: 'future-edge-computing-embedded-ai',
    excerpt: 'How running small language models on-device is revolutionizing privacy, latency, and operational efficiency.',
    content: 'The paradigm of artificial intelligence is shifting from massive cloud clusters to on-device edge computing. With the rise of optimized SLMs (Small Language Models) like Phi-3 and Llama-3-8B, devices can now perform advanced text, voice, and vision intelligence completely offline, opening new horizons for IoT, healthcare, and smart factories.',
    category: 'IoT',
    author: 'David Park',
    authorRole: 'VP Engineering',
    readTime: '8 min read',
    featuredImage: '/manus-storage/office-workspace-modern_6bd09c07.jpg',
    tags: JSON.stringify(['Edge AI', 'IoT', 'Embedded Systems', 'SLM']),
    seoTitle: 'Edge Computing & Embedded AI Innovation | REDDOT AI',
    seoDescription: 'Explore the rise of edge AI and small language models running on-device for improved latency, security, and offline support.',
    published: true,
    publishedAt: new Date(),
  },
  {
    title: 'Implementing Zero-Trust Security in Cloud-Native AI Workloads',
    slug: 'zero-trust-security-cloud-native-ai',
    excerpt: 'Safeguard your neural networks and user request data using container isolation, API gateways, and dynamic credentials.',
    content: 'As AI workflows handle sensitive corporate data and personal user profiles, securing these pipelines becomes paramount. This guide outlines how to configure Kubernetes clusters, Istio service meshes, and KMS-encrypted databases to achieve a complete zero-trust profile for generative AI applications.',
    category: 'Cybersecurity',
    author: 'Michael Chen',
    authorRole: 'Chief Technology Officer',
    readTime: '5 min read',
    featuredImage: '/manus-storage/team-meeting-discussion_7d6c4463.jpg',
    tags: JSON.stringify(['Security', 'Zero Trust', 'Cloud Native', 'Kubernetes']),
    seoTitle: 'Zero-Trust Security for Enterprise AI Workloads | REDDOT AI',
    seoDescription: 'Learn how to secure generative AI models and sensitive pipelines using container policies and zero-trust identity controls.',
    published: true,
    publishedAt: new Date(),
  },
];

const defaultTestimonials = [
  {
    clientName: 'Sarah Johnson',
    company: 'TechCorp',
    quote: 'REDDOT transformed our business operations with their AI solutions. The results exceeded our expectations.',
    role: 'CEO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    clientName: 'Michael Chen',
    company: 'FinanceHub',
    quote: 'Working with REDDOT was seamless. Their team understood our needs and delivered exceptional results.',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    clientName: 'Emily Rodriguez',
    company: 'RetailCo',
    quote: 'The AI automation platform has reduced our operational costs by 40%. Highly recommended!',
    role: 'Director of Operations',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
  {
    clientName: 'David Park',
    company: 'HealthTech',
    quote: "REDDOT's expertise in machine learning is unmatched. They delivered exactly what we needed.",
    role: 'VP Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
  },
];

const defaultCaseStudies = [
  {
    title: 'Healthcare AI Platform',
    industry: 'Healthcare',
    problem: 'Manual patient data processing was time-consuming and error-prone',
    solution: 'Deployed AI-powered document processing system',
    result: '85% reduction in processing time',
    imageUrl: '/manus-storage/team-meeting-discussion_7d6c4463.jpg',
  },
  {
    title: 'Financial Risk Analytics',
    industry: 'Finance',
    problem: 'Real-time risk assessment was not possible due to slow legacy batch flows',
    solution: 'Built ML-powered risk prediction engine with sub-second analysis',
    result: 'Risk detection accuracy improved to 94%, preventing $50M+ in losses',
    imageUrl: '/manus-storage/global-network-connection_7a1d6ee4.jpg',
  },
  {
    title: 'Manufacturing Automation',
    industry: 'Manufacturing',
    problem: 'Production line inefficiencies causing delays and high product rejection rates',
    solution: 'Implemented computer vision quality control systems on key assembly tracks',
    result: '40% increase in production efficiency and 92% reduction in defects',
    imageUrl: '/manus-storage/office-workspace-modern_6bd09c07.jpg',
  },
  {
    title: 'Retail Personalization',
    industry: 'Retail',
    problem: 'Generic product recommendations leading to low conversion rates',
    solution: 'Deployed personalized AI recommendation engine powered by real-time embedding match',
    result: 'Customer engagement increased by 156% and revenue uplift of $5M annually',
    imageUrl: '/manus-storage/hero-team-collaboration_69278f24.jpg',
  },
];

async function seed() {
  console.log('[Seed] Starting database seed...');
  const db = await getDb();
  if (!db) {
    console.error('[Seed] Database not available (DATABASE_URL not configured).');
    process.exit(1);
  }

  try {
    // 1. Seed Jobs
    console.log('[Seed] Seeding jobs...');
    await db.delete(jobs);
    for (const job of defaultJobs) {
      await db.insert(jobs).values(job);
    }
    console.log(`[Seed] Seeded ${defaultJobs.length} jobs.`);

    // 2. Seed Blog Posts
    console.log('[Seed] Seeding blog posts...');
    await db.delete(blogPosts);
    for (const post of defaultBlogPosts) {
      await db.insert(blogPosts).values(post);
    }
    console.log(`[Seed] Seeded ${defaultBlogPosts.length} blog posts.`);

    // 3. Seed Testimonials
    console.log('[Seed] Seeding testimonials...');
    await db.delete(testimonials);
    for (const testimonial of defaultTestimonials) {
      await db.insert(testimonials).values(testimonial);
    }
    console.log(`[Seed] Seeded ${defaultTestimonials.length} testimonials.`);

    // 4. Seed Case Studies
    console.log('[Seed] Seeding case studies...');
    await db.delete(caseStudies);
    for (const study of defaultCaseStudies) {
      await db.insert(caseStudies).values(study);
    }
    console.log(`[Seed] Seeded ${defaultCaseStudies.length} case studies.`);

    console.log('[Seed] Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('[Seed] Error during seeding:', error);
    process.exit(1);
  }
}

seed();
