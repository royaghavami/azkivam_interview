// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/base.scss'],
  modules: ['@nuxtjs/eslint-module', '@nuxt/image'],
})
