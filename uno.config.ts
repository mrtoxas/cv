import { defineConfig, presetIcons, presetWind } from 'unocss'
import presetTheme from 'unocss-preset-theme'
import type { Theme } from 'unocss/preset-uno'

export default defineConfig({
  rules: [
    ['px-container', { 
      'padding-left': 'max(15px, 50vw - 570px)', 
      'padding-right': 'max(15px, 50vw - 570px)'
    }],
    ['safe-area', {
      'padding-left': 'env(safe-area-inset-right);', 
      'padding-right': 'env(safe-area-inset-right);'
    }]
  ],
  safelist: [
    'i-bxl-gmail',
    'i-bxl-telegram',
    'i-bxl-github',
    'i-bxl-linkedin-square'
  ],
  presets: [
    presetWind(),
    presetIcons({
      bxl: () => import('@iconify-json/bxl/icons.json').then(i => i.default),
    }),
    presetTheme({
      theme: {
        dark: {
           colors: {
            'primary': '#fe8d59',
            'primary-foreground': '#ffffff',
            'secondary': '#f4f4f5',
            'secondary-foreground': '#18181b',
            'background': '#ffffff',
            'foreground': '#09090b',
            'accent': '#f4f4f5',
            'accent-foreground': '#18181b',
            'danger': '#f8d7da',
            'danger-foreground': '#721c24',
            'backplate': '#f4f4f5',
            'border': '#e4e4e7',
          },
        },
        light: {
           colors: {
            'primary': '#fe8d59',
            'primary-foreground': '#09090b',
            'secondary': '#27272a',
            'secondary-foreground': '#ffffff',
            'background': '#282828',
            'foreground': '#e3e3e3',
            'accent': '#3c3c3c',
            'accent-foreground': '#fafafa',
            'danger': '#f8d7da',
            'danger-foreground': '#721c24',
            'backplate': '#303030',
            'border': '#46464c',
          },
        },
      }
    })
  ],
})