// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@nuxt/image"],
    googleFonts: {
        families: {
            Rubik: true
        }
    },
    telemetry: {
        enabled: false
    }
})
