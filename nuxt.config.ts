import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: { shim: false, strict: true },
  experimental: { reactivityTransform: true },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-monaco-editor',
  ],
  unocss: { preflight: true },
})
