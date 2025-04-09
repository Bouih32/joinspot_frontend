// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import {
  authRoutes,
  dynamicPublicRegex,
  organizerRoutes,
  publicRoutes,
} from "./app/routes";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.AUTH_SECRET!);
async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = req.cookies.get("token");

  const decoded = token ? await verifyToken(token.value) : null;
  const role = decoded?.role;

  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isOrganizerRoute = organizerRoutes.includes(nextUrl.pathname);
  const isPublicRoutes =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/reset") ||
    dynamicPublicRegex.test(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/profile");
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

  if (isLoggedIn) {
    if (isOrganizerRoute && role === "VISITOR")
      return NextResponse.redirect(new URL("/activities", nextUrl));

    if (nextUrl.pathname.startsWith("/upgrade") && role === "ORGANISER")
      return NextResponse.redirect(new URL("/user", nextUrl));

    if (nextUrl.pathname.startsWith("/admin") && role !== "ADMIN")
      return NextResponse.redirect(new URL("/user", nextUrl));

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
