import { defineConfig, passthroughImageService  } from "astro/config";
import UnoCSS from 'unocss/astro'
import compress from '@playform/compress';

export default defineConfig({
  site: 'https://mrtoxas.github.io',
  base: '/cv',
  devToolbar: {
    enabled: false
  },
  image: {
    service: passthroughImageService(),
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
