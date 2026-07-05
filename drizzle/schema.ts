import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Jobs ────────────────────────────────────────────────────────────────────
export const jobs = mysqlTable("jobs", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  department: varchar("department", { length: 100 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  type: varchar("type", { length: 100 }).notNull().default("Full-time"),
  salaryRange: varchar("salaryRange", { length: 100 }),
  description: text("description").notNull(),
  requirements: text("requirements").notNull(),
  status: mysqlEnum("status", ["open", "closed", "draft"])
    .default("open")
    .notNull(),
  postedAt: timestamp("postedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Job = typeof jobs.$inferSelect;
export type InsertJob = typeof jobs.$inferInsert;

// ─── Job Applications ─────────────────────────────────────────────────────────
export const jobApplications = mysqlTable("job_applications", {
  id: int("id").autoincrement().primaryKey(),
  jobId: int("jobId").notNull(),
  applicantName: varchar("applicantName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  linkedinUrl: varchar("linkedinUrl", { length: 500 }),
  resumeUrl: varchar("resumeUrl", { length: 1000 }),
  coverLetter: text("coverLetter"),
  status: mysqlEnum("status", [
    "received",
    "reviewing",
    "interview",
    "offered",
    "rejected",
  ])
    .default("received")
    .notNull(),
  appliedAt: timestamp("appliedAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = typeof jobApplications.$inferInsert;

// ─── Contact Submissions ─────────────────────────────────────────────────────
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  company: varchar("company", { length: 255 }),
  message: text("message").notNull(),
  service: varchar("service", { length: 100 }),
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

// ─── Consultation Bookings ────────────────────────────────────────────────────
export const consultationBookings = mysqlTable("consultation_bookings", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: varchar("company", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  serviceType: varchar("serviceType", { length: 100 }),
  preferredDate: varchar("preferredDate", { length: 50 }),
  preferredTime: varchar("preferredTime", { length: 50 }),
  notes: text("notes"),
  status: mysqlEnum("status", [
    "pending",
    "confirmed",
    "completed",
    "cancelled",
  ])
    .default("pending")
    .notNull(),
  bookedAt: timestamp("bookedAt").defaultNow().notNull(),
});

export type ConsultationBooking = typeof consultationBookings.$inferSelect;
export type InsertConsultationBooking =
  typeof consultationBookings.$inferInsert;

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 500 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  category: varchar("category", { length: 100 }),
  author: varchar("author", { length: 255 }),
  authorRole: varchar("authorRole", { length: 255 }),
  readTime: varchar("readTime", { length: 50 }),
  featuredImage: varchar("featuredImage", { length: 1000 }),
  tags: text("tags"), // JSON array stored as text
  seoTitle: varchar("seoTitle", { length: 500 }),
  seoDescription: text("seoDescription"),
  published: boolean("published").default(false).notNull(),
  publishedAt: timestamp("publishedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  quote: text("quote").notNull(),
  role: varchar("role", { length: 255 }),
  imageUrl: varchar("imageUrl", { length: 1000 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

// ─── Case Studies ──────────────────────────────────────────────────────────────
export const caseStudies = mysqlTable("case_studies", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  industry: varchar("industry", { length: 255 }).notNull(),
  problem: text("problem").notNull(),
  solution: text("solution").notNull(),
  result: text("result").notNull(),
  imageUrl: varchar("imageUrl", { length: 1000 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = typeof caseStudies.$inferInsert;

// ─── Notifications ────────────────────────────────────────────────────────────
export const notifications = mysqlTable("notifications", {
  id: int("id").autoincrement().primaryKey(),
  eventType: varchar("eventType", { length: 100 }).notNull(),
  recipientEmail: varchar("recipientEmail", { length: 320 }),
  data: text("data").notNull(), // JSON string representing event details
  status: varchar("status", { length: 50 }).default("pending").notNull(), // pending, sent, failed
  sentAt: timestamp("sentAt").defaultNow().notNull(),
});

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;
