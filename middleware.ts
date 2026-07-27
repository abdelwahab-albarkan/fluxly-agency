import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(`[Middleware Request Logger]: ${pathname} - at ${new Date().toISOString()}`);

  // Stubs for future authentication flows:
  // if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin')) {
  //   const token = request.cookies.get('auth-token');
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/auth/login', request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
