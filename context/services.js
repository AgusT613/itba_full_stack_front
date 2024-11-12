const LOGIN_USER_API = 'http://localhost:8000/api/users/'
export const TARJETAS_USER_API = 'http://localhost:8000/api/tarjetas/'
export const CUENTAS_USER_API = 'http://localhost:8000/api/cuentas/'
export const PAGOS_USER_API = 'http://localhost:8000/api/pagos/'
export const FACTURAS_USER_API = 'http://localhost:8000/api/facturas/'
export const PRESTAMOS_USER_API = 'http://localhost:8000/api/prestamos/'
const SUCURSALES_API = 'http://localhost:8000/api/sucursales/'
export const PRESTAMO_POR_SUCURSAL_ID_API =
  'http://localhost:8000/api/prestamo-sucursal-id/'

const headerAuth = (nombreUsuario, contrasenia) => {
  const basicAuth = `Basic ${btoa(`${nombreUsuario}:${contrasenia}`)}`
  return { headers: { Authorization: basicAuth } }
}

export async function obtenerDatosUsuario(nombreUsuario, contrasenia) {
  const userUrl = `${LOGIN_USER_API}?username=${nombreUsuario}`
  const userResponse = await fetch(
    userUrl,
    headerAuth(nombreUsuario, contrasenia),
  )
  const userData = await userResponse.json()
  return userData[0]
}

export async function obtenerInicioSesion(usuario, contrasenia) {
  const response = await fetch(LOGIN_USER_API, headerAuth(usuario, contrasenia))

  if (response.status === 401 && usuario === '' && contrasenia === '') {
    throw new Error('Acceso denegado. Completar los campos')
  } else if (response.status === 401) {
    throw new Error('Acceso denegado. Datos incorrectos')
  } else if (response.status === 200) {
    const userData = await obtenerDatosUsuario(usuario, contrasenia)
    return {
      message:
        'Inicio de sesión correcto. Al aceptar se redirigira al homebanking',
      user: userData,
    }
  } else {
    return {
      status: response.status,
      message: response.text,
    }
  }
}

export async function obtenerListado(userId, api, nombreUsuario, contrasenia) {
  const userUrl = `${api}?user_id=${userId}`
  const response = await fetch(userUrl, headerAuth(nombreUsuario, contrasenia))
  const data = await response.json()
  return data
}

export async function obtenerSucursales() {
  const response = await fetch(SUCURSALES_API)
  const sucursales = await response.json()
  return sucursales
}

export async function crearNuevoPrestamo(api, body) {
  const nombreUsuario = window.localStorage.getItem('username')
  const contraseniaUsuario = window.localStorage.getItem('password')
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${nombreUsuario}:${contraseniaUsuario}`)}`,
    },
  }

  const response = await fetch(api, options)
  if (response.status === 401) {
    throw new Error('Usuario no autorizado, inicie sesión nuevamente')
  }
  if (response.status === 400) {
    throw new Error(
      'Error en el envio. Asegurese de completar todos los campos',
    )
  }
  const dataSent = await response.json()
  if (response.status === 201) {
    return {
      dataSent,
      status: response.status,
      message:
        'Nuevo prestamo creado correctamente. Por favor, recargue la página para visualizar los cambios',
    }
  }
  return { dataSent, status: response.status }
}

export async function eliminarPrestamo(api) {
  const nombreUsuario = window.localStorage.getItem('username')
  const contraseniaUsuario = window.localStorage.getItem('password')
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${nombreUsuario}:${contraseniaUsuario}`)}`,
    },
  }

  const response = await fetch(api, options)
  if (response.status === 401) {
    throw new Error('Usuario no autorizado, inicie sesión nuevamente.')
  }
  if (response.status === 404) {
    throw new Error(
      'Este prestamo ya fue eliminado. Al recargar la página desaparecerá.',
    )
  }
  if (response.status === 204) {
    return {
      response,
      status: response.status,
      message:
        'El prestamo se ha eliminado correctamente. Porfavor recargue la pagina para visualizar los cambios.',
    }
  }
  return response
}
