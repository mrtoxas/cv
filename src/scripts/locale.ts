import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from 'locales/en.json';
import ruTranslation from 'locales/ru.json';
import uaTranslation from 'locales/ua.json';

export const locales = () => {
  const i18nextInit = () => {
    i18next
      .use(LanguageDetector)
      .init({
        resources: {
          en: {
            translation: enTranslation,
          },
          ru: {
            translation: ruTranslation,
          },
          ua: {
            translation: uaTranslation,
          },
        },
      })
      .then(() => changeLanguage());
  };

  const changeLanguage = (locale?: string) => {
    i18next.changeLanguage(locale, (err) => {
      if (err) return console.error('Error loading translations:', err);

      document.querySelectorAll('[data-i18n]').forEach((element) => {
        element.textContent = i18next.t(element.getAttribute('data-i18n'));
      });
    });
  };

  const toggleLanguage = () => {
    if (i18next.language) {
      const langs = ['en-US', 'ua-UA', 'ru-RU'];
      const nextLangIndex = (langs.findIndex((item) => item === i18next.language) + 1) % langs.length;
      const newLang = langs[nextLangIndex];
      changeLanguage(newLang);

      return newLang; // Возвращаем новый язык
    }
  };

  return { i18nextInit, changeLanguage, toggleLanguage };
};
