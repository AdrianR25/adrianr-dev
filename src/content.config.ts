import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const technologies = defineCollection({ 
    loader: glob({pattern: "**/*.json", base: "src/content/technologies"}),
    schema: z.object({
        name: z.string(),
        url: z.string(),
        logoUrl: z.string(),
        role: z.enum(["Frontend framework", "Backend framework", "Frontend programming language", "Backend programming language", "Backend hosting platform"]),
    }),
 });

const projects = defineCollection({ 
    loader: glob({pattern: "**/*.md", base: "src/content/projects"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnailUrl: z.string(),
        featured: z.boolean(),
        demoUrl: z.string().optional(),
        codeUrl: z.string().optional(),
        launchDate: z.date(),
        eolDate: z.date().optional(),
        learnt: z.array(z.string()),
        technologies: z.array(reference('technologies')),
    }),
 });

export const collections = { projects, technologies };