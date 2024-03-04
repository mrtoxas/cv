import { themeInitialize } from './theme';
import { removePageLoader } from './pageLoader';
import { locales } from './locale';
import { localeSelect } from './locale-select';
import i18next from 'i18next';

const appInitialize = () => {
  const { i18nextInit, changeLanguage, toggleLanguage } = locales();

  themeInitialize();

  i18nextInit();

  localeSelect({
    id: 'select',
    value: i18next.language,
    onChange: (value: string) => changeLanguage(value),
    onKeyDown: () => toggleLanguage(),
  });
};

window.addEventListener('load', removePageLoader);

document.addEventListener('DOMContentLoaded', appInitialize);
