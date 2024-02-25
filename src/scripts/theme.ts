enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const themeButtonId = 'themeBtn';
const storageThemeKey = 'theme';

const getPageTheme = () =>
  document.documentElement.className.split(' ').find((item) => item === Theme.DARK || item === Theme.LIGHT);

const inverseThemeName = (themeName) => (themeName === Theme.DARK ? Theme.LIGHT : Theme.DARK);

const setTheme = (theme, replacementTheme) => {
  if (replacementTheme) {
    document.documentElement.classList.replace(replacementTheme, theme);
  } else {
    document.documentElement.classList.add(theme);
  }

  localStorage.setItem(storageThemeKey, theme);
};

const toggleTheme = () => {
  const pageTheme = getPageTheme();
  if (pageTheme) {
    setTheme(inverseThemeName(pageTheme), pageTheme);
    return;
  }

  const storageTheme = localStorage.getItem(storageThemeKey);
  if (storageTheme) {
    setTheme(inverseThemeName(storageTheme));
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
