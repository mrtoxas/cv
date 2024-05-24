import { z, defineCollection } from "astro:content";

const mainCollection = defineCollection({
  type: "data",
  schema: z.object({
    about: z.object({
      fullname: z.string(),
      position: z.string(),
      title: z.string(),
      summary: z.string(),
    }),
  }),
});

export const collections = {
  main: mainCollection,
};
