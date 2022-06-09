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
      'graphql-client': {
        clients: {
          default: 'https://clubcms.boldthin.gs/graphql',
          mryum: {
            schema: './schemas/mryum.graphql',
            host: 'https://eu1-stable-api.mryum.com/graphql',//process.env.GQL_MRYUM_HOST,
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNTY5YmFhZi0wNzk1LTRjMGUtYWRhMy0wZjVjYzA1YTBmNjYiLCJzdWIiOiIxMDM5ODRjZi0wZmM2LTQwMTMtYWMxMC03MmViMDdkZDM0YjYiLCJpYXQiOjE2NDY4NjMyMzEsImlzcyI6Imh0dHBzOi8vZXUxLXByb2R1Y3Rpb24tc3RhYmxlLWFwaS5tcnl1bS5jb20iLCJhdWQiOiJodHRwczovL2V1MS1wcm9kdWN0aW9uLXN0YWJsZS1hcGkubXJ5dW0uY29tIiwiZXhwIjoxNjc4Mzk5MjMxfQ.MDTXIszIVWhmbPmplmoRQ6Mv8gMBxk34KRt3vKFfZl0'
            //process.env.GQL_MRYUM_TOKEN,
          }
        },
      },
      //http://localhost:1337/graphql', // overwritten by process.env.GQL_HOST,
      LOGIN_URL: process.env.LOGIN_URL || 'https://mryum.com',
      FALLBACK_VENUE_ID: process.env.FALLBACK_VENUE_ID || 'cpc-testing',
      CMS_BRAND_ID: process.env.CMS_BRAND_ID || 1,
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
        href: 'favicon.gif',
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
