import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuth = cookies().get('auth')

  if (!isAuth)
    return NextResponse.redirect(new URL('/login/iniciar-sesion', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: '/inicio/:path*',
}
