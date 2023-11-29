const LOGIN_USER_API = 'http://localhost:8000/api/users/'
export const TARJETAS_USER_API = 'http://localhost:8000/api/tarjetas/'
export const CUENTAS_USER_API = 'http://localhost:8000/api/cuentas/'
export const PAGOS_USER_API = 'http://localhost:8000/api/pagos/'
export const FACTURAS_USER_API = 'http://localhost:8000/api/facturas/'
export const PRESTAMOS_USER_API = 'http://localhost:8000/api/prestamos/'

export async function obtenerDatosUsuario (nombreUsuario, auth) {
  const userUrl = `${LOGIN_USER_API}?username=${nombreUsuario}`
  const userResponse = await fetch(userUrl, auth)
  const userData = await userResponse.json()
  return userData[0]
}

export async function obtenerListado (userId, auth, api) {
  const userUrl = `${api}?user_id=${userId}`
  const response = await fetch(userUrl, auth)
  const data = await response.json()
  return data
}
