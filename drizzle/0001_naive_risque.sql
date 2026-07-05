CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`slug` varchar(500) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`category` varchar(100),
	`author` varchar(255),
	`authorRole` varchar(255),
	`readTime` varchar(50),
	`featuredImage` varchar(1000),
	`tags` text,
	`seoTitle` varchar(500),
	`seoDescription` text,
	`published` boolean NOT NULL DEFAULT false,
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `case_studies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`industry` varchar(255) NOT NULL,
	`problem` text NOT NULL,
	`solution` text NOT NULL,
	`result` text NOT NULL,
	`imageUrl` varchar(1000),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `case_studies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `consultation_bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`company` varchar(255),
	`phone` varchar(50),
	`serviceType` varchar(100),
	`preferredDate` varchar(50),
	`preferredTime` varchar(50),
	`notes` text,
	`status` enum('pending','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
	`bookedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `consultation_bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contact_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`company` varchar(255),
	`message` text NOT NULL,
	`service` varchar(100),
	`submittedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_submissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `job_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`jobId` int NOT NULL,
	`applicantName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`linkedinUrl` varchar(500),
	`resumeUrl` varchar(1000),
	`coverLetter` text,
	`status` enum('received','reviewing','interview','offered','rejected') NOT NULL DEFAULT 'received',
	`appliedAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `job_applications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`department` varchar(100) NOT NULL,
	`location` varchar(255) NOT NULL,
	`type` varchar(100) NOT NULL DEFAULT 'Full-time',
	`salaryRange` varchar(100),
	`description` text NOT NULL,
	`requirements` text NOT NULL,
	`status` enum('open','closed','draft') NOT NULL DEFAULT 'open',
	`postedAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `jobs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`eventType` varchar(100) NOT NULL,
	`recipientEmail` varchar(320),
	`data` text NOT NULL,
	`status` varchar(50) NOT NULL DEFAULT 'pending',
	`sentAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`clientName` varchar(255) NOT NULL,
	`company` varchar(255) NOT NULL,
	`quote` text NOT NULL,
	`role` varchar(255),
	`imageUrl` varchar(1000),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
