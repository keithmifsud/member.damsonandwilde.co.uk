import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({

  modules: [
    'nuxt-graphql-client',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt-hero-icons/outline/nuxt',
    //'@nuxt-hero-icons/solid/nuxt',
  ],

  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:1337/graphql' // overwritten by process.env.GQL_HOST
    }
  },

  tailwindcss: {
    cssPath: '~/assets/index.css',
    exposeConfig: false,
    viewer: false,
  },

  head: {
    //...
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
      },
      {
        rel: 'icon',
        href: '/favicon.gif',
        type: 'image/png',
      }
    ]
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
