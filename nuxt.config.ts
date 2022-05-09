import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    head: {
        //...
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
            }
        ]
    },

    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/index.css',
        exposeConfig: true
    },
    googleFonts: {
        display: 'swap',
        useStylesheet: true,
        inject: true,
        download: true,
        families: {
            'DM Sans': [300, 400, 500, 600, 700],
            'Roboto Mono': [300, 400, 500, 600, 700],
        }
    },
})
