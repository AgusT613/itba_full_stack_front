'use server'

import createAuthCookie from '@/actions/createAuthCookie'
import { IUserList } from '@/types/login'

export default async function userSignIn(
  formData: FormData,
  userList: IUserList[],
) {
  const { email, password } = Object.fromEntries(formData)
  const userExist = userList?.find(
    (user) => user.email === email && user.password === password,
  )

  if (userExist) {
    await createAuthCookie()
    return {
      success: true,
      message: 'Logueado correctamente. Redirigiendo a su homebanking...',
      urlRedirection: '/inicio',
    }
  }

  return {
    success: false,
    message:
      'Ha ocurrido un error. Verifique que todos los campos son correctos',
    urlRedirection: '/login',
  }
}
