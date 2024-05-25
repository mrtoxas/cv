import { z, defineCollection } from "astro:content";

const mainCollection = defineCollection({
  type: "data",
  schema: z.object({

    hero: z.object({
      fullname: z.string().trim(),
      position: z.string().trim(),
    }),

    about: z.object({
      title: z.string().trim().optional(),
      ariaLabel: z.string().trim().optional(),
      summary: z.string().trim(),
    }),

    contacts: z.object({
      title: z.string().trim().optional(),
      ariaLabel: z.string().trim().optional(),
      links: z.array(
        z.object({
          href: z.string().trim(),
          text: z.string().trim(),
          title: z.string().trim(),
          icon: z.string().trim()
        })
      )
    }),

    skills: z.object({
      title: z.string().trim().optional(),
      ariaLabel: z.string().trim().optional(),
      list: z.array(
        z.object({
          title: z.string().trim(),
          list: z.array(
            z.string().trim()
          )
        })
      )
    })
  })
});

export const collections = {
  main: mainCollection,
};
