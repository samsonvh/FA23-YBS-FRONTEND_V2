import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // request.nextUrl.pathname;

  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // const pathName = request.nextUrl.pathname;
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (session?.role != "ADMIN") {
      return NextResponse.redirect(new URL("/404", request.url));
    }
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/company")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (session?.role != "COMPANY") {
      return NextResponse.redirect(new URL("/404", request.url));
    }
    if (request.nextUrl.pathname === "/company") {
      return NextResponse.redirect(new URL("/company/dashboard", request.url));
    }
  }

  if (request.nextUrl.pathname === "/") {
    if (session?.role == "COMPANY") {
      return NextResponse.redirect(new URL("/company/dashboard", request.url));
    }
    if (session?.role == "ADMIN") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    // if (session?.role == "MEMBER") {
    //   return NextResponse.redirect(new URL("/", request.url));
    // }
  }
  console.log("session in middleware: ", session);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
