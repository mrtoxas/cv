import { defineConfig } from "astro/config";
import UnoCSS from 'unocss/astro'
import compress from '@playform/compress';

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "en",
    locales: ["ru", "en", "ua"],
  },
  integrations: [
    UnoCSS({
      injectReset: true
    }),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
  ],
});
