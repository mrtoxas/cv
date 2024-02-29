enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

enum ThemeColor {
  DARK = '#282828',
  LIGHT = '#ffffff',
}

const themeButtonId = 'themeBtn';
const storageThemeKey = 'theme';
const metaThemeId = 'themeColor';

const getPageTheme = (): Theme | undefined => {
  const htmlElement = document.documentElement;

  if (htmlElement.classList.contains(Theme.DARK)) return Theme.DARK;
  if (htmlElement.classList.contains(Theme.LIGHT)) return Theme.LIGHT;
};

const inverseThemeName = (themeName: Theme): Theme => (themeName === Theme.DARK ? Theme.LIGHT : Theme.DARK);

const changeMetaTheme = (theme: Theme) => {
  const metaTheme = document.getElementById(metaThemeId);
  metaTheme.setAttribute('content', theme === Theme.DARK ? ThemeColor.DARK : ThemeColor.LIGHT);
};

const setTheme = (theme: Theme, replacementTheme?: Theme) => {
  if (replacementTheme) {
    document.documentElement.classList.replace(replacementTheme, theme);
  } else {
    document.documentElement.classList.add(theme);
  }

  localStorage.setItem(storageThemeKey, theme);

  changeMetaTheme(theme);
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
  if (storageTheme) {
    document.documentElement.classList.add(storageTheme as Theme);
    changeMetaTheme(storageTheme as Theme);
  }
};
