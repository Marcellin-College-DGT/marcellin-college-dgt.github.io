import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every schema is .strict(): a field the site doesn't know (a typo, or something
// kaiako-only like "schedule" or "modelAnswers") stops the build instead of slipping through.

const year = z.number().int().min(7).max(13);
const filePath = z.string().regex(/^\/files\//, 'File paths start with /files/');
const fileLink = z.object({ label: z.string(), path: filePath }).strict();

const overviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/overviews' }),
  schema: z
    .object({
      title: z.string(),
      year,
      curriculum: z.string(),
      summary: z.string(),
      units: z
        .array(
          z
            .object({
              name: z.string(),
              graded: z.boolean(),
              summary: z.string(),
            })
            .strict(),
        )
        .default([]),
      tools: z.array(z.string()).default([]),
      canDo: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    })
    .strict(),
});

const assessments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assessments' }),
  schema: z
    .object({
      title: z.string(),
      year,
      standards: z.array(z.string().regex(/^\d{5}$/, 'A standard is a 5-digit number')).default([]),
      term: z.number().int().min(1).max(4).optional(),
      order: z.number().default(0),
      summary: z.string(),
      handIn: z.string(),
      due: z.string().optional(),     // shown on the page, in weeks ("End of Week 3"), so it fits any rotation
      // this rotation's real due date (YYYY-MM-DD), used only by the Due soon list on Home and
      // shown beside the week until it passes; change it for each new class
      dueDate: z
        .preprocess(
          (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),   // YAML reads 2026-11-13 as a date
          z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Write dueDate as YYYY-MM-DD'),
        )
        .optional(),
      template: z.url().optional(),
      // other links ākonga open, e.g. a MakeCode starter game
      links: z.array(z.object({ label: z.string(), url: z.url() }).strict()).default([]),
      files: z.array(fileLink).default([]),
      slides: filePath.optional(),
      guides: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    })
    .strict(),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z
    .object({
      title: z.string(),
      useWhen: z.string(),
      group: z.string().optional(),   // the heading it's listed under; defaults to its first tool
      tools: z.array(z.string()).min(1),
      years: z.array(year).default([]),   // empty: listed under How-to guides only, on no year page
      pdf: filePath.optional(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    })
    .strict(),
});

export const collections = { overviews, assessments, guides };
