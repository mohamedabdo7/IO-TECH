import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Check for protected routes
  const pathname = request.nextUrl.pathname;

  const isProtectedRoute =
    pathname.includes("/exams") || pathname.includes("/mcqs");

  if (isProtectedRoute) {
    const token = request.cookies.get("auth-token");

    if (!token) {
      const locale = pathname.split("/")[1] || "en";
      const redirectUrl = new URL(`/${locale}/login`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/mcqs/:path*",
    "/:locale/mcqs/:path*",
  ],
};
