import { defineConfig } from "astro/config";
import UnoCSS from 'unocss/astro'

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["ru", "en", "ua"],
  },
  integrations: [
    UnoCSS({
      injectReset: true
    }),
  ],
});
