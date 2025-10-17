import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    typeCheck: true,
  },

  css: ['~/assets/base.css'],
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/eslint'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'ci',
        dir: './app/assets/icons',
      },
    ],
    collections: ['mdi'],
    size: '24px',
    clientBundle: {
      scan: true,
    },
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Rubik',
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },
})
