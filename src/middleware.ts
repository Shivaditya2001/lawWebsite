// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log visit
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      ip: request.ip,
      userAgent: request.headers.get('user-agent'),
      path: request.nextUrl.pathname
    })
  }).catch(console.error);

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*'
};
