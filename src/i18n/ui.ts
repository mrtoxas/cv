export type Lang = 'en' | 'ua' | 'ru';

export const defaultLang: Lang = 'en';

type Ui = {
 [key in Lang]: Record<string, string>;
};

export const ui:Ui = {
  en: {
    'page.meta.title': 'CV: Anton Bojko',
    'page.meta.description': 'Professional developer portfolio',
    'bar.downloadBtn.title': 'Download PDF version',
    'bar.printBtn.title': 'Print this page',
    'bar.themeButton.title': 'Dark/Light mode',
  },
  ua: {
    'page.meta.title': 'Резюме: Антон Бойко',
    'page.meta.description': 'Професійне резюме розробника',
    'bar.downloadBtn.title': 'Завантажити PDF-версiю',
    'bar.printBtn.title': 'Роздрукувати цю сторiнку',
    'bar.themeButton.title': 'Темна/Свiтла тема',
  },
  ru: {
    'page.meta.title': 'Резюме: Антон Бойко',
    'page.meta.description': 'Профессиональное резюме разработчика',
    'bar.downloadBtn.title': 'Скачать PDF-версию',
    'bar.printBtn.title': 'Распечатать эту страницу',
    'bar.themeButton.title': 'Тёмная/Светлая тема',
  },
} as const;

export const formatLangCode = (code: string) => {
  return code.split('-')[0].toLowerCase() as Lang;
}

export const useTranslations = (lang?: string) => {
  const t = (key: string) => ui[lang ? formatLangCode(lang) : defaultLang][key];
  return t;
}