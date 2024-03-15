import { createIcons, Sun, Moon, Minimize2, Maximize2, ChevronDown, Download } from 'lucide';

export const iconsInit = () => {
  createIcons({
    icons: {
      Sun,
      Moon,
      Minimize2,
      Maximize2,
      ChevronDown,
      Download,
    },
    attrs: {
      stroke: 'currentColor',
    },
    nameAttr: 'data-icon',
  });
};
