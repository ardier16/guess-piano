export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  googleAnalytics: {
    id: 'G-EYFXFL450R'
  },
  gtm: {
    id: 'G-EYFXFL450R'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '#GuessPiano - Угадай Песню',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '#GuessPiano - музыкальная игра, где нужно угадать песню, сыгранную на пианино'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '#GuessPiano - Угадай Песню'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: '#GuessPiano - музыкальная игра, где нужно угадать песню, сыгранную на пианино'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons',
        rel: 'stylesheet',
        type: 'text/css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-gtag' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  styleResources: {
    scss: [
      '~/styles/schemes.scss',
      '~/styles/ui.scss',
      '~/styles/reset.scss'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-logrocket',
    '@nuxtjs/gtm'
  ],

  logRocket: {
    // configure LogRocket
    logRocketId: 'guesspiano/guesspiano',
    devModeAllowed: false,
    config: {
      //
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: '#GuessPiano',
      short_name: '#GuessPiano'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
