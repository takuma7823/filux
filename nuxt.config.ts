// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/common.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: 'filux | 動画制作',
      meta: [
        { name: 'description', content: 'filuxは映像制作チームです。MV・プロモーション映像・広告映像など、企画から運用までワンストップで対応します。' },
        { property: 'og:title', content: 'filux | 動画制作' },
        { property: 'og:description', content: 'filuxは映像制作チームです。MV・プロモーション映像・広告映像など、企画から運用までワンストップで対応します。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'filux' },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/', '/index2', '/film', '/works', '/services', '/contact',
        ...Array.from({ length: 13 }, (_, i) => `/content/${i}`),
      ],
    },
  },
})