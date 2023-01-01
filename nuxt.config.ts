import { colors } from "@unocss/preset-mini";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ['@unocss/nuxt','nuxt-icon','@nuxt/image'],
  modules: ['@unocss/nuxt','nuxt-icon','@nuxtjs/color-mode'],
  srcDir: 'src',
  unocss: {
    preflight: true,
    theme: {
      colors: {
        primary: colors!.green
      }
    }
  },
})
