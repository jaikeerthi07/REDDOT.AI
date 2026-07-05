import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import fs from "fs";
import path from "path";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import {
  contactSubmissions,
  jobApplications,
  consultationBookings,
  blogPosts,
  jobs,
  notifications,
} from "../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";

const fallbackJobs = [
  {
    id: 1,
    title: 'AI Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹40K - ₹60K/mo',
    description: 'Work on cutting-edge Artificial Intelligence models and algorithms.',
    requirements: 'Strong foundation in Python\nFamiliarity with AI concepts\nEagerness to learn',
    status: 'open',
  },
  {
    id: 2,
    title: 'ML Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹40K - ₹60K/mo',
    description: 'Assist in designing, training, and fine-tuning state-of-the-art machine learning models.',
    requirements: 'Experience with PyTorch or TensorFlow\nSolid understanding of ML fundamentals\nStrong mathematical background',
    status: 'open',
  },
  {
    id: 3,
    title: 'Agentic AI Intern',
    department: 'Research',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹50K - ₹70K/mo',
    description: 'Push the boundaries of autonomous AI agents capable of planning and executing complex workflows.',
    requirements: 'Deep understanding of LLM reasoning capabilities\nExperience building multi-agent systems\nCreative problem-solving skills',
    status: 'open',
  },
  {
    id: 4,
    title: 'Gen AI Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹45K - ₹65K/mo',
    description: 'Build applications utilizing the latest Generative AI models (LLMs, Diffusion).',
    requirements: 'Experience with LangChain or LlamaIndex\nFamiliarity with prompt engineering\nUnderstanding of RAG architectures',
    status: 'open',
  },
  {
    id: 5,
    title: 'Full Stack Development Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹30K - ₹50K/mo',
    description: 'Build fast, responsive, and beautiful user interfaces and robust APIs.',
    requirements: 'Proficiency in React and Node.js\nExperience with TypeScript\nDatabase knowledge',
    status: 'open',
  },
  {
    id: 6,
    title: 'Backend Development Intern',
    department: 'Engineering',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹30K - ₹50K/mo',
    description: 'Develop scalable backend services and architect database schemas.',
    requirements: 'Experience with Node.js, Python, or Go\nUnderstanding of REST/GraphQL APIs\nKnowledge of PostgreSQL or MongoDB',
    status: 'open',
  },
  {
    id: 7,
    title: 'Data Science Intern',
    department: 'Data',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹40K - ₹60K/mo',
    description: 'Analyze large datasets, extract insights, and prepare high-quality data for model training.',
    requirements: 'Strong SQL and Python skills\nExperience with Pandas, NumPy\nStatistical analysis background',
    status: 'open',
  },
  {
    id: 8,
    title: 'Data Analytics Intern',
    department: 'Data',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹30K - ₹50K/mo',
    description: 'Create dashboards, track KPIs, and help drive data-informed business decisions.',
    requirements: 'Proficiency in SQL\nExperience with visualization tools (Tableau, PowerBI)\nStrong analytical skills',
    status: 'open',
  },
  {
    id: 9,
    title: 'Cyber Security Intern',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹35K - ₹55K/mo',
    description: 'Help secure our AI infrastructure and perform vulnerability assessments.',
    requirements: 'Knowledge of network security principles\nFamiliarity with penetration testing tools\nUnderstanding of cloud security',
    status: 'open',
  },
  {
    id: 10,
    title: 'Embedded System Intern',
    department: 'Hardware',
    location: 'Remote',
    type: 'Internship',
    salaryRange: 'Stipend: ₹35K - ₹55K/mo',
    description: 'Work on deploying lightweight AI models to edge devices and microcontrollers.',
    requirements: 'Strong C/C++ programming skills\nExperience with microcontrollers (ARM, ESP32)\nUnderstanding of RTOS',
    status: 'open',
  },
];

async function handleNotification(eventType: string, data: Record<string, any>, title: string, content: string) {
  const db = await getDb();
  let status = "pending";
  try {
    const success = await notifyOwner({ title, content });
    status = success ? "sent" : "failed";
  } catch (error) {
    console.error("[Notification] notifyOwner error:", error);
    status = "failed";
  }

  if (db) {
    try {
      await db.insert(notifications).values({
        eventType,
        recipientEmail: null,
        data: JSON.stringify(data),
        status,
      });
    } catch (dbError) {
      console.error("[Notification] Failed to log in DB:", dbError);
    }
  }
}


export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ─── Contact ────────────────────────────────────────────────────────────────
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name is required"),
          email: z.string().email("Valid email required"),
          phone: z.string().optional(),
          company: z.string().optional(),
          message: z.string().min(10, "Message must be at least 10 characters"),
          service: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(contactSubmissions).values({
            name: input.name,
            email: input.email,
            phone: input.phone ?? null,
            company: input.company ?? null,
            message: input.message,
            service: input.service ?? null,
          });
        }
        await handleNotification(
          "contact_submission",
          input,
          `New Contact Submission from ${input.name}`,
          `Name: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company ?? 'N/A'}\nPhone: ${input.phone ?? 'N/A'}\nService: ${input.service ?? 'N/A'}\nMessage: ${input.message}`
        );
        return { success: true, message: "Thank you! We'll get back to you within 24 hours." };
      }),
  }),

  // ─── Careers & Job Applications ─────────────────────────────────────────────
  career: router({
    getJobs: publicProcedure.query(async () => {
      const db = await getDb();
      let results;
      if (db) {
        results = await db.select().from(jobs).where(eq(jobs.status as any, "open") as any);
      } else {
        results = fallbackJobs;
      }
      return results.map(j => ({
        ...j,
        requirements: j.requirements ? j.requirements.split("\n").filter(r => r.trim().length > 0) : [],
      }));
    }),
    submitApplication: publicProcedure
      .input(
        z.object({
          jobId: z.number(),
          applicantName: z.string().min(2, "Full name required"),
          email: z.string().email("Valid email required"),
          phone: z.string().optional(),
          linkedinUrl: z.string().url().optional().or(z.literal("")),
          resumeUrl: z.string().optional(), // This will now carry the base64 data url
          coverLetter: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        // Decode base64 resume and save to disk
        let savedResumePath = input.resumeUrl ?? '';
        if (input.resumeUrl && input.resumeUrl.startsWith('data:')) {
          const match = input.resumeUrl.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);name=(.+);base64,(.+)$/);
          if (match) {
            const originalName = match[2];
            const buffer = Buffer.from(match[3], 'base64');
            const uploadDir = path.join(process.cwd(), 'uploads');
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
            const fileName = `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
            savedResumePath = path.join(uploadDir, fileName);
            fs.writeFileSync(savedResumePath, buffer);
          }
        }

        const db = await getDb();
        if (db) {
          await db.insert(jobApplications).values({
            jobId: input.jobId,
            applicantName: input.applicantName,
            email: input.email,
            phone: input.phone ?? null,
            linkedinUrl: input.linkedinUrl || null,
            resumeUrl: savedResumePath,
            coverLetter: null,
          });
        }
        await handleNotification(
          "job_application",
          input,
          `New Job Application for Job ID ${input.jobId} from ${input.applicantName}`,
          `Applicant Name: ${input.applicantName}\nEmail: ${input.email}\nPhone: ${input.phone ?? 'N/A'}\nLinkedIn: ${input.linkedinUrl ?? 'N/A'}\nResume Path: ${savedResumePath}\n`
        );

        // Export to Excel-compatible CSV
        try {
          const csvPath = path.join(process.cwd(), 'applications.csv');
          if (!fs.existsSync(csvPath)) {
            fs.writeFileSync(csvPath, '"Job ID","Applicant Name","Email","Phone","LinkedIn","Resume Path","Date"\n');
          }
          const safeName = input.applicantName.replace(/"/g, '""');
          const safeResumePath = savedResumePath.replace(/"/g, '""');
          const csvLine = `"${input.jobId}","${safeName}","${input.email}","${input.phone ?? ''}","${input.linkedinUrl ?? ''}","${safeResumePath}","${new Date().toISOString()}"\n`;
          fs.appendFileSync(csvPath, csvLine);
        } catch (csvError) {
          console.error("Failed to write to applications.csv", csvError);
        }

        return { success: true, message: "Application submitted! We'll review it and get back to you." };
      }),
  }),

  // ─── Consultation Booking ───────────────────────────────────────────────────
  booking: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(2),
          email: z.string().email(),
          company: z.string().optional(),
          phone: z.string().optional(),
          serviceType: z.string().optional(),
          preferredDate: z.string().optional(),
          preferredTime: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (db) {
          await db.insert(consultationBookings).values({
            name: input.name,
            email: input.email,
            company: input.company ?? null,
            phone: input.phone ?? null,
            serviceType: input.serviceType ?? null,
            preferredDate: input.preferredDate ?? null,
            preferredTime: input.preferredTime ?? null,
            notes: input.notes ?? null,
          });
        }
        await handleNotification(
          "consultation_booking",
          input,
          `New Consultation Booking from ${input.name}`,
          `Client: ${input.name}\nEmail: ${input.email}\nCompany: ${input.company ?? 'N/A'}\nPhone: ${input.phone ?? 'N/A'}\nService: ${input.serviceType ?? 'N/A'}\nPreferred Date: ${input.preferredDate ?? 'N/A'}\nPreferred Time: ${input.preferredTime ?? 'N/A'}\nNotes: ${input.notes ?? 'N/A'}`
        );
        return { success: true, message: "Booking confirmed! Check your email for details." };
      }),
  }),

  // ─── Blog ───────────────────────────────────────────────────────────────────
  blog: router({
    list: publicProcedure
      .input(
        z.object({
          category: z.string().optional(),
          limit: z.number().min(1).max(50).default(12),
        })
      )
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        const results = await db
          .select()
          .from(blogPosts)
          .where(eq(blogPosts.published as any, true) as any)
          .orderBy(desc(blogPosts.publishedAt as any) as any)
          .limit(input.limit);
        return results;
      }),
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        const results = await db
          .select()
          .from(blogPosts)
          .where(and(eq(blogPosts.slug as any, input.slug), eq(blogPosts.published as any, true)) as any)
          .limit(1);
        return results[0] ?? null;
      }),
  }),
});

export type AppRouter = typeof appRouter;
