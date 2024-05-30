import { defineConfig, presetIcons, presetWind } from 'unocss'
import presetTheme from 'unocss-preset-theme'
import type { Theme } from 'unocss/preset-uno'

export default defineConfig<Theme>({
  rules: [
    ['primary-gradient-text', {
      'color': 'transparent',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      'background-image': 'linear-gradient(to right, #fe8d59 0%, #fe8d59 100%)'
    }],
    ['px-container', { 
      'padding-left': 'max(15px, 50vw - 570px)', 
      'padding-right': 'max(15px, 50vw - 570px)'
    }],
    ['safe-area', {
      'padding-left': 'env(safe-area-inset-right);', 
      'padding-right': 'env(safe-area-inset-right);'
    }],
    ['shadow-md-top', {
      'box-shadow': '0 -1px 3px #0000001a',
    }]
  ],
  safelist: [
    'i-bxl-gmail',
    'i-bxl-telegram',
    'i-bxl-github',
    'i-bxl-linkedin-square',
    'i-lucide-printer',
    'i-lucide-download',
    'i-lucide:moon',
    'i-lucide-sun',
    'i-lucide-globe',    
  ],
  theme: {
    fontFamily: {
      inter: 'Inter Variable, sans-serif'          
    },
    height:{
      'bar-xs': '3rem',
      'bar-md': '2.5rem'
    }
  },
  presets: [
    presetWind(),
    presetIcons(),
    presetTheme<Theme>({
      theme: {            
        dark: {
           colors: {
            'primary': '#fe8d59',
            'primary-foreground': '#09090b',
            'primary-start': '#fe8d59',
            'primary-end': '#fe6a26',
            'secondary': '#27272a',
            'secondary-foreground': '#ffffff',
            'background': '#282828',
            'foreground': '#e3e3e3',
            'mute': '#a9a9a9',
            'accent': '#3c3c3c',
            'accent-foreground': '#fafafa',
            'danger': '#f8d7da',
            'danger-foreground': '#721c24',
            'backplate': '#303030',
            'border': '#46464c',
          },
        },
        light: {
          colors: {
            'primary': '#fe8d59',
            'primary-foreground': '#ffffff',
            'primary-start': '#fe8d59',
            'primary-end': '#fe6a26',
            'secondary': '#f4f4f5',
            'secondary-foreground': '#18181b',
            'background': '#ffffff',
            'foreground': '#09090b',
            'mute': '#595959',
            'accent': '#f4f4f5',
            'accent-foreground': '#18181b',
            'danger': '#f8d7da',
            'danger-foreground': '#721c24',
            'backplate': '#f4f4f5',
            'border': '#e4e4e7',
          },
        }
      }
    })
  ],
})