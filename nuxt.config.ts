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
  experimental: {
    crossOriginPrefetch: true,
  },
  auth: {
    baseURL: "http://localhost:8080/",
    disableServerSideAuth: false,
    provider: {
      type: "local",
      pages: {
        login: "/login",
      },
      endpoints: {
        signIn: { path: "users/login", method: "post" },
        signOut: { path: "user/logout", method: "post" },
        signUp: { path: "user/register", method: "post" },
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
