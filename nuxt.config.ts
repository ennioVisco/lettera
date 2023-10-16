// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
    '@nuxt/content',
    // https://pinceau.dev
    'pinceau/nuxt',
    // Google fonts module
    '@nuxtjs/google-fonts'
  ],
  content: {
    documentDriven: true
  },
  pinceau: {
    studio: true
  },
  typescript: {
    includeWorkspace: true
  },
  googleFonts: {
    families: {
      Lato: {
        wght: [100, 300, 400, 700, 900],
        ital: [400, 900]
      }

    }
  }
})
