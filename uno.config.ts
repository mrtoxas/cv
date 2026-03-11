import { defineConfig, presetIcons } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
  transformers: [transformerVariantGroup()],
  safelist: [
    "i-bxl-gmail",
    "i-bxl-telegram",
    "i-bxl-github",
    "i-bxl-linkedin-square",
    "i-lucide-printer",
    "i-lucide-download",
    "i-lucide:moon",
    "i-lucide-sun",
    "i-lucide-globe",
  ],
  theme: {
    font: {
      inter: "Inter Variable, sans-serif",
    },
    height: {
      "bar-xs": "3rem",
      "bar-md": "2.5rem",
    },
    shadow: {
      "md-top": "0 -1px 3px #0000001a",
    },
    colors: {
      primary: "var(--color-primary)",
      "primary-foreground": "var(--color-primary-foreground)",
      secondary: "var(--color-secondary)",
      "secondary-foreground": "var(--color-secondary-foreground)",
      background: "var(--color-background)",
      foreground: "var(--color-foreground)",
      mute: "var(--color-mute)",
      "mute-foreground": "var(--color-mute-foreground)",
      accent: "var(--color-accent)",
      "accent-foreground": "var(--color-accent-foreground)",
      danger: "var(--color-danger)",
      "danger-foreground": "var(--color-danger-foreground)",
      backplate: "var(--color-backplate)",
      border: "var(--color-border)",
      "primary-start": "var(--color-primary-start)",
      "primary-end": "var(--color-primary-end)",
    },
  },
  presets: [presetWind4(), presetIcons()],
});
