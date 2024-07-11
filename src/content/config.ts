import { z, defineCollection } from "astro:content";

export const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
