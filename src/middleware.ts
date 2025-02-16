// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { authRoutes, publicRoutes } from "./app/routes";

export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = req.cookies.get("token");

  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isLoggedIn = !!token;

  if (!token && !isAuthRoutes && !isPublicRoutes) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (isAuthRoutes) {
    if (isLoggedIn) return NextResponse.redirect(new URL("/", nextUrl));

    return undefined;
  }

  return NextResponse.next();
}

// Specify routes to apply middleware to
export const config = {
  matcher: [
    // Protect all routes, excluding login and public routes
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
