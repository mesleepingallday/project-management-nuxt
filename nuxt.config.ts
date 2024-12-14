// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@sidebase/nuxt-auth",
    "@nuxt/image",
    "@nuxt/icon",
  ],
  auth: {
    originEnvKey: "AUTH_ORIGIN",
    baseURL: process.env.BASE_API_URL,
    provider: {
      type: "local",
      pages: {
        login: "/login",
      },
      endpoints: {
        signIn: { path: "user/login", method: "post" },
      },
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  image: {
    formats: ["webp"],
    quality: 80,
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
