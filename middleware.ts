import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const isAuth = (await cookies()).get('session_token')

  if (!isAuth)
    return NextResponse.redirect(new URL('/login/iniciar-sesion', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: '/inicio/:path*',
}
