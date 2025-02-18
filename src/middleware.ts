import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("next-auth.session-token");
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");

  if (!session && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard"] };
