astro.config.mjs:

import { defineConfig } from "astro/config";
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["ru", "en", "ua"],
    routing: {
      prefixDefaultLocale: true,      
    },    
  },
});


src\pages\[locale]\index.astro:

---
import Page from "../../layouts/Page.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const pages = await getCollection("main");

  const paths = pages.map((page) => {
    const [locale, ...slug] = page.id.split("/");
    return {
      params: { locale, slug: slug.join("/") || undefined },
      props: page,
    };
  });

  return paths;
}

const { locale, slug } = Astro.params;
const page = Astro.props;
---

<Page>
  <h1>{page.data.name}</h1>
  <div>{locale}</div>
  <div>{slug}</div>
</Page>



src\content\config.ts:

import { z, defineCollection } from "astro:content";
const postsCollection = defineCollection({
    type: 'data',
    schema: z.object({
      name: z.string()         
    })
});

export const collections = {
  main: postsCollection,
};

src\content\main\en\index.yaml:

name: Hellow world!