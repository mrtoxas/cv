import { createIcons, Sun, Moon, Minimize2, Maximize2, ChevronDown, Download, Printer } from 'lucide';

export const iconsInit = () => {
  createIcons({
    icons: {
      Sun,
      Moon,
      Minimize2,
      Maximize2,
      ChevronDown,
      Download,
      Printer,
    },
    attrs: {
      stroke: 'currentColor',
    },
    nameAttr: 'data-icon',
  });
};
