import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/vars.scss" as *;',
        }
      }
    },
    plugins: [
      svgLoader(),
    ],
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      Inter: [400, 600],
    }
  }
})
