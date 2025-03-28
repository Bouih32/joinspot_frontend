export const publicRoutes = [
  "/",
  "/reset",
  "/activities",
  "/about",
  "/community",
  "/support",
];
export const authRoutes = ["/login", "/signup"];
export const apiAuthPrefix = "/api/auth";
export const redirectUser = "/";
export const organizerRoutes = ["/activities/add"];
export const redirectAdmin = "/account/admin";
export const adminOnly = "/admin";
export const userOnly = "/user";
export const dynamicPublicRegex = /^\/activities\/(?!add$)[^\/]+$/;
