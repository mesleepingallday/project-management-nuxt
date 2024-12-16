// middleware/auth-redirect.global.ts
export default defineNuxtRouteMiddleware((to) => {
  if (typeof window !== "undefined") {
    const username = localStorage.getItem("encodedUsername");
    const password = localStorage.getItem("encodedPassword");

    if (
      username &&
      password &&
      (to.path === "/login" || to.path === "/signup")
    ) {
      return navigateTo("/");
    }

    const protectedRoutes = ["/", "/dashboard", "/profile"];
    if (!username || !password) {
      if (protectedRoutes.includes(to.path)) {
        return navigateTo("/login");
      }
    }
  }
});