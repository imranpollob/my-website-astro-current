import { defineCollection, z } from "astro:content"

// Structured site content (research, projects, experience) lives in src/data.
const legal = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { legal }
