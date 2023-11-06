import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { POST, authOptions } from "./app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // request.nextUrl.pathname;

  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  // const pathName = request.nextUrl.pathname;
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (session?.role != "ADMIN") {
      return NextResponse.redirect(new URL("/404", request.url));
    }
    if (request.nextUrl.pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }
  if (request.nextUrl.pathname.startsWith("/company")) {
    if (session?.role != "COMPANY") {
      return NextResponse.redirect(new URL("/404", request.url));
    }
    if (request.nextUrl.pathname === "/company") {
      return NextResponse.redirect(new URL("/company/dashboard", request.url));
    }
  }

  console.log("session in middleware: ", session);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
