// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // ES Lint
    '@nuxtjs/eslint-module',
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://pinceau.dev
    // 'pinceau/nuxt',
    // Google fonts module
    // '@nuxtjs/google-fonts',
    // Radix UI
    'radix-vue/nuxt',
    // Tailwind CSS
    // '@nuxtjs/tailwindcss'
  ],
  content: {
    documentDriven: true
  },
  // pinceau: {
  //   studio: true
  // },
  typescript: {
    includeWorkspace: true
  },
})
