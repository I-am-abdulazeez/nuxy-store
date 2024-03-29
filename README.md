# Nuxy Store

## Nuxt 3 + Vuetify 3 Project

![Starter Image](/public/starter.png)
Nuxt 3 is now stable. Vuetify 3 is now stable.
This template here will get you up & running with adding the two together :)

## Demo Here

[Online Demo](https://nuxy-store.vercel.app/)

### Pages

<details>
<summary>Click to see the pages added & planned</summary>

- [x] Home
- [x] About
- [x] Products
- [x] Products/{id}

</details>

### Run the app

1. Install the deps

```bash
npm install
```

2. Run the app

```bash
npm run dev
```

### Stuff used

- NuxtJS
- Nuxt Icon
- Sass
- Vuetify
- kevinmarrec/nuxt-pwa
- Vite Plugin Vuetify

### Custom Sass File

The `.scss` file that can be found in the `assets` folder have some gradients & other styles. They can be deleted or updated.

### Utils Folder

The utils folder contains the custom stuff for the Vuetify plugin

#### Custom Icons - `customIcons.ts`

So I switched from the nuxt-icon module to the @iconify/vue component [here](https://docs.iconify.design/icon-components/vue/). It plays better with Vuetify with custom icons

Here is a link to the docs for this [Creating a custom iconset](https://next.vuetifyjs.com/en/features/icon-fonts/#creating-a-custom-icon-set)

#### Global Defaults - `defaults.ts`

This file here just set global props on different vuetify components. You can learn more here [Global Configuration](https://next.vuetifyjs.com/en/features/global-configuration/)

#### Themes - `themes.ts`

This file will hold all the different themes that you want to use in your app. Feel free to add more crazy schemes lol. Learn more here: [Vuetify Themes](https://next.vuetifyjs.com/en/features/theme/)
