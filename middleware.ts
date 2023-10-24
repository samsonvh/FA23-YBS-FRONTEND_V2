import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { POST, authOptions } from "./app/api/auth/[...nextauth]/route";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login"],
};
