import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    username: "",
    password: "",
  }),
  actions: {
    login(encodedUsername: string, encodedPassword: string) {
      const username = atob(encodedUsername);
      const password = atob(encodedPassword);

      this.username = username;
      this.password = password;

      // Store Base64-encoded values in localStorage
      localStorage.setItem("encodedUsername", encodedUsername);
      localStorage.setItem("encodedPassword", encodedPassword);
    },
    loadFromLocalStorage() {
      const encodedUsername = localStorage.getItem("encodedUsername") ?? "";
      const encodedPassword = localStorage.getItem("encodedPassword") ?? "";

      if (encodedUsername && encodedPassword) {
        this.username = atob(encodedUsername);
        this.password = atob(encodedPassword);
      }
    },
    clearCredentials() {
      this.username = "";
      this.password = "";
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    },
  },
});
