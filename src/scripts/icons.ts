import { createIcons, Sun, Moon, Minimize2, Maximize2, ChevronDown } from 'lucide';

export const iconsInit = () => {
  createIcons({
    icons: {
      Sun,
      Moon,
      Minimize2,
      Maximize2,
      ChevronDown,      
    },
    attrs: {
      stroke: 'currentColor',
    },
    nameAttr: 'data-icon',
  });
};
