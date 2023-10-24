import vuetify from 'vite-plugin-vuetify';

// PWA Config
const title = 'Nuxy Store';
const shortTitle = 'Nuxy Store';
const description = 'Nuxy Store. Built with Nuxt 3 & Vuetify 3';
const image = 'https://nuxy-store.vercel.app/starter.png';
const url = 'https://nuxy-store.vercel.app/';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ['@/assets/main.scss'],
  devtools: { enabled: true },
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ['vuetify'] },
  modules: [
    '@kevinmarrec/nuxt-pwa',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
      });
    },
  ],

  app: {
    head: {
      title: 'Nuxy Store',
      // titleTemplate: "%s | Vuetify 3 + Nuxt 3 Starter",
      link: [
        // { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap',
        },
        { rel: 'preconnect', href: 'https://rsms.me/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: url },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        { property: 'og:site_name', content: title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: url,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image,
        },
        //Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image,
        },
      ],
    },
  },

  pwa: {
    meta: {
      name: shortTitle,
      author: 'AbdulAzeez Olamide',
      theme_color: '#4f46e5',
      description: description,
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: '#4f46e5',
      description: description,
    },
  },
});
