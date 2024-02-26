enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const themeButtonId = 'themeBtn';
const storageThemeKey = 'theme';

const getPageTheme = (): Theme | undefined => {
  const htmlElement = document.documentElement;

  if (htmlElement.classList.contains(Theme.DARK)) return Theme.DARK;
  if (htmlElement.classList.contains(Theme.LIGHT)) return Theme.LIGHT;
};

const inverseThemeName = (themeName: Theme): Theme => (themeName === Theme.DARK ? Theme.LIGHT : Theme.DARK);

const setTheme = (theme: Theme, replacementTheme?: Theme) => {
  if (replacementTheme) {
    document.documentElement.classList.replace(replacementTheme, theme);
  } else {
    document.documentElement.classList.add(theme);
  }

  localStorage.setItem(storageThemeKey, theme);
};

const toggleTheme = () => {
  const pageTheme = getPageTheme() as undefined as Theme;
  if (pageTheme) {
    setTheme(inverseThemeName(pageTheme), pageTheme);
    return;
  }

  const storageTheme = localStorage.getItem(storageThemeKey);
  if (storageTheme) {
    setTheme(inverseThemeName(storageTheme as Theme));
    return;
  }

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;
  setTheme(inverseThemeName(systemTheme));
};

export const themeInitialize = () => {
  const themeButton = document.getElementById(themeButtonId);
  themeButton?.addEventListener('click', toggleTheme);

  const storageTheme = localStorage.getItem(storageThemeKey);
  if (storageTheme) document.documentElement.classList.add(storageTheme);
};
