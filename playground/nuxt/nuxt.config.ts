export default defineNuxtConfig({
  modules: ['@barbapapazes/huchet-vue/nuxt'],
  css: ['~/assets/css/main.css'],
  huchet: {
    prefix: 'U',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
