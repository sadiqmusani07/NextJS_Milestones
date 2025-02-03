import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Token interface to ensure proper typing
interface Token {
  id: string;
  email: string;
  username: string;
  role: string;
}

export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req }) as Token;  // Type assertion

  if (!token || token.role !== 'admin') {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to homepage if not an admin
  }

  return NextResponse.next(); // Allow request to proceed if the user is an admin
}

// Protect routes starting with /admin/
export const config = {
  matcher: "/admin/:path*", // Protect all routes starting with /admin/
};
