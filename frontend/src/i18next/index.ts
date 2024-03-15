import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const setupI18n = (): unknown => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      debug: true,
      resources: {
        en: {
          translation: {
            templeName: 'Dharmrajeshwar',
          },
        },
        hi: {
          translation: {
            templeName: 'धर्मराजेश्वर',
          },
        },
      },
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
      detection: {
        order: ['path', 'cookie', 'htmlTag'],
        caches: ['cookie'],
      },
      load: 'languageOnly',
    });
  return i18n;
};
