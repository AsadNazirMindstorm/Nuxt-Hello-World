// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  build:{
    transpile: [
      '@jsonforms/core',
      '@jsonforms/vue',
      '@jsonforms/vue-vanilla'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 

  modules: ['vuetify-nuxt-module']
})
