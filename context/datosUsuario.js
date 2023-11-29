'use client'
import { LOGIN_USER_API, TARJETAS_USER_API } from '@/context/api_urls'

async function obtenerDatosUsuario (nombreUsuario, auth) {
  const userUrl = `${LOGIN_USER_API}?username=${nombreUsuario}`
  const userResponse = await fetch(userUrl, auth)
  const userData = await userResponse.json()
  return userData[0]
}

async function obtenerTarjetas (userId, auth) {
  const userUrl = `${TARJETAS_USER_API}?user_id=${userId}`
  const response = await fetch(userUrl, auth)
  const data = await response.json()
  return data
}

export const datos = {
  fotoPerfil: 'https://randomuser.me/api/portraits/med/men/36.jpg',
  nombre: undefined,
  saldoEnCuenta: undefined,
  tarjetas: [],
  facturas: [
    {
      id: '10001',
      payee: 'ABC Eléctrica',
      description: 'Factura de electricidad mensual',
      dueDate: '2023-10-15',
      amount: 3000.00
    },
    {
      id: '10002',
      payee: 'Compañía de Agua',
      description: 'Factura de agua trimestral',
      dueDate: '2023-09-28',
      amount: 1500.00
    },
    {
      id: '10003',
      payee: 'Gas Natural de la Ciudad',
      description: 'Servicio de gas natural',
      dueDate: '2023-10-05',
      amount: 2000.00
    },
    {
      id: '10004',
      payee: 'Proveedor de Internet',
      description: 'Suscripción mensual de internet',
      dueDate: '2023-09-30',
      amount: 2500.00
    },
    {
      id: '10005',
      payee: 'Compañía de Tarjetas de Crédito',
      description: 'Pago de tarjeta de crédito',
      dueDate: '2023-10-10',
      amount: 5000.00
    },
    {
      id: '10006',
      payee: 'Factura de Teléfono Inc.',
      description: 'Factura mensual de teléfono',
      dueDate: '2023-10-20',
      amount: 1000.00
    },
    {
      id: '10007',
      payee: 'Corporación de Préstamos de Autos',
      description: 'Cuota mensual de préstamo de auto',
      dueDate: '2023-10-25',
      amount: 8000.00
    },
    {
      id: '10008',
      payee: 'Compañía de Seguro de Salud',
      description: 'Prima mensual de seguro de salud',
      dueDate: '2023-10-08',
      amount: 3500.00
    },
    {
      id: '10009',
      payee: 'Gestión de Alquiler',
      description: 'Pago mensual de alquiler',
      dueDate: '2023-09-29',
      amount: 12000.00
    },
    {
      id: '10010',
      payee: 'Servicios de Préstamos Estudiantiles',
      description: 'Pago de préstamo estudiantil',
      dueDate: '2023-10-12',
      amount: 6000.00
    }
  ]
}

const nombreUsuario = window.localStorage.getItem('username')
const contraseniaUsuario = window.localStorage.getItem('password')
const AUTH = { headers: { Authorization: `Basic ${btoa(`${nombreUsuario}:${contraseniaUsuario}`)}` } }
obtenerDatosUsuario(nombreUsuario, AUTH)
  .then(data => {
    const { username, id } = data
    datos.nombre = username
    obtenerTarjetas(id, AUTH)
      .then(tarjetas => {
        datos.tarjetas = tarjetas
      })
  })
