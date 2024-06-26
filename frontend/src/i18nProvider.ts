//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    DownloadTask: { name: 'Download Task', fields: { url: 'Url', id: 'id' } },
    UserPreferences: {
      name: 'User Preferences',
      fields: { targetFolder: 'Target Folder', id: 'id' },
    },
  },
};
const frResources = {
  resources: {
    DownloadTask: {
      name: 'Download Task (fr)',
      fields: { url: 'Url (fr)', id: 'id' },
    },
    UserPreferences: {
      name: 'User Preferences (fr)',
      fields: { targetFolder: 'Target Folder (fr)', id: 'id' },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);
