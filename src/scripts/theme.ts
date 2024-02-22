enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const themeButtonId = 'themeBtn';
const storageThemeKey = 'theme';

const setThemeForPage = (theme: Theme) => {
  document.documentElement.classList.remove(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  document.documentElement.classList.add(theme);
};

const getSystemTheme = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.DARK : Theme.LIGHT;
};

const toggleTheme = () => {
  const storageTheme = localStorage.getItem(storageThemeKey);

  const theme = storageTheme ? (storageTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK) : getSystemTheme();

  setThemeForPage(theme);
  localStorage.setItem(storageThemeKey, theme);
};

const themeButtonInit = () => {
  const themeButton = document.getElementById(themeButtonId);
  if (!themeButton) return;

  themeButton.addEventListener('click', toggleTheme);
};

export const themeInitialize = () => {
  themeButtonInit();

  const storageTheme = localStorage.getItem(storageThemeKey);

  const pageTheme =
    document.documentElement.className.split(' ').find((item: string) => item === Theme.DARK || item === Theme.LIGHT) ||
    null;

  if (storageTheme && !pageTheme) {
    setThemeForPage(storageTheme as Theme);
  } else if (!storageTheme && !pageTheme) {
    const systemTheme = getSystemTheme();
    setThemeForPage(systemTheme);
    localStorage.setItem(storageThemeKey, systemTheme);
  } else if (!storageTheme && pageTheme) {
    localStorage.setItem(storageThemeKey, pageTheme);
  }
};
