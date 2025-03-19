import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({ 
    loader: glob({pattern: "**/*.md", base: "src/content/projects"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        featured: z.boolean(),
        demoUrl: z.string().optional(),
        codeUrl: z.string().optional(),
    }),
 });

export const collections = { projects };