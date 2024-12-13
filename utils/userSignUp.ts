'use server'

import createAuthCookie from '@/actions/createAuthCookie'
import { IUserList } from '@/types/login'

export default async function userSignUp(
  formData: FormData,
  userList: IUserList[],
) {
  if (userList === null) {
    await createAuthCookie()
    return {
      message: 'Usuario creado, redirigiendo al homebanking',
      success: true,
      urlRedirection: '/inicio',
    }
  }
  if (userList?.some((user) => user.email === formData.get('email'))) {
    return {
      message: 'El usuario ya existe, intente con otro email',
      success: false,
    }
  }

  await createAuthCookie()
  return {
    message: 'Usuario creado, redirigiendo al homebanking',
    success: true,
    urlRedirection: '/inicio',
  }
}
