// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      i18nLocaleCodes: process.env.I18N_LOCALE_CODES || 'en,fr',
      i18nLocaleLanguage: process.env.I18N_LOCALE_LANGUAGE || 'English, Français',
      i18nDefaultLocale: process.env.I18N_DEFAULT_LOCALE || 'en',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
      { code: 'ru', name: 'Русский' },
    ],
    defaultLocale: 'en',
  },
})