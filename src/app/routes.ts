export const publicRoutes = [
  "/",
  "/reset",
  "/activities",
  "/about",
  "/support",
  "/profile",
];
export const authRoutes = ["/login", "/signup"];
export const apiAuthPrefix = "/api/auth";
export const redirectUser = "/";
export const organizerRoutes = [
  "/activities/add",
  "user/revenue",
  "user/active",
  "user/joined",
];
export const redirectAdmin = "/admin";
export const adminOnly = "/admin";
export const userOnly = "/user";
export const dynamicPublicRegex = /^\/activities\/(?!add$)[^\/]+$/;
