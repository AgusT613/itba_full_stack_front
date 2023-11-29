'use client'
import { obtenerDatosUsuario, obtenerListado, CUENTAS_USER_API, TARJETAS_USER_API, PAGOS_USER_API, FACTURAS_USER_API, PRESTAMOS_USER_API } from '@/context/api_urls'

export const datos = {
  fotoPerfil: 'https://randomuser.me/api/portraits/med/men/36.jpg',
  nombre: undefined,
  saldoEnCuenta: 0,
  tarjetas: [],
  cuentas: [],
  pagos: [],
  facturas: [],
  prestamos: []
}

const nombreUsuario = window.localStorage.getItem('username')
const contraseniaUsuario = window.localStorage.getItem('password')
const AUTH = { headers: { Authorization: `Basic ${btoa(`${nombreUsuario}:${contraseniaUsuario}`)}` } }
obtenerDatosUsuario(nombreUsuario, AUTH)
  .then(data => {
    const { username, id } = data
    datos.nombre = username
    // ----
    obtenerListado(id, AUTH, TARJETAS_USER_API)
      .then(tarjetas => { datos.tarjetas = tarjetas })
      .catch(error => console.log(error))
    // ----
    obtenerListado(id, AUTH, CUENTAS_USER_API)
      .then(cuentas => { datos.cuentas = cuentas })
      .catch(error => console.log(error))
    // ----
    obtenerListado(id, AUTH, PAGOS_USER_API)
      .then(pagos => { datos.pagos = pagos })
      .catch(error => console.log(error))
    // ----
    obtenerListado(id, AUTH, FACTURAS_USER_API)
      .then(facturas => { datos.facturas = facturas })
      .catch(error => console.log(error))
    obtenerListado(id, AUTH, PRESTAMOS_USER_API)
      .then(prestamos => { datos.prestamos = prestamos })
      .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
