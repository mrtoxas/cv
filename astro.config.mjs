import { defineConfig } from "astro/config";
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["ru", "en", "ua"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "src/styles/theme/theme.scss";
          `,
        },
      },
    },
  },
});
