import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function proxy(request: NextRequest) {
  const isAuth = (await cookies()).get('session_token')

  if (!isAuth)
    return NextResponse.redirect(new URL('/login/iniciar-sesion', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: '/inicio/:path*',
}
