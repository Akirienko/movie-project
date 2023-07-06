// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  // srcDir: "src",
  modules: [
    '@nuxtjs/tailwindcss',
    ["@pinia/nuxt", {
      autoImports:["defineStore", "acceptHMRUpdate"]
    }],,
  ],
  tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
	},
  imports: {
    dirs:["stores"]
  }
})
