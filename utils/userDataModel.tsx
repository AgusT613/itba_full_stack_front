import { BsCash } from 'react-icons/bs'
import { CiShop } from 'react-icons/ci'
import { FaRegBuilding } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi2'
import { MdOutlineSavings, MdWorkOutline } from 'react-icons/md'

import BANNER_1 from '@/public/banner_1.jpeg'
import BANNER_2 from '@/public/banner_2.jpeg'
import BANNER_3 from '@/public/banner_3.jpeg'

export const USER = {
  customer: {
    id: 0,
    name: 'Lucas',
    lastName: 'Gonzalez',
    dni: 47806975,
    age: 26,
    balance: 1000,
    img: 'https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png',
  },
  accounts: [
    {
      number: '1800 1555 6301 0114',
      balance: 500000,
      type: 'gold',
      currency: 'pesos',
    },
    {
      number: '1556 4477 2387 4777',
      balance: 1000,
      type: 'black',
      currency: 'dollar',
    },
  ],
  cards: [
    {
      id: 0,
      number: '1600 0000 4444 8888',
      cvv: 430,
      grandDate: '15/10/19',
      expirationDate: '15/10/25',
      type: 'credit',
      brand: 'mastercard',
    },
    {
      id: 1,
      number: '1747 1020 1325 7777',
      cvv: 478,
      grandDate: '15/10/19',
      expirationDate: '15/10/25',
      type: 'debit',
      brand: 'visa',
    },
  ],
  paymentRecords: [
    {
      id: 'asfasf1531a56f16a',
      service: 'EDESUR',
      amount: 500,
      paymentDate: '17/03/2022',
    },
  ],
  activity: [
    {
      accountNumber: '1800 1555 6301 0114',
      amount: 10000,
      operationType: 'transfer',
      date: '17/12/24',
    },
  ],
  billPayment: [
    {
      id: 0,
      recipient: 'EDESUR',
      description: 'Pago de tarifa de luz',
      expirationDate: '20/05/25',
      amount: 5000,
    },
  ],
  loan: [
    {
      id: 0,
      branchOffice: 'ITBANK',
      type: 'hipotecario',
      grandDate: '10/12/24',
      expirationDate: '10/12/26',
      amount: 500000,
    },
    {
      id: 1,
      branchOffice: 'Alises',
      type: 'personal',
      grandDate: '10/12/24',
      expirationDate: '10/12/26',
      amount: 100000,
    },
    {
      id: 2,
      branchOffice: 'Alises',
      type: 'prendario',
      grandDate: '10/12/24',
      expirationDate: '10/12/26',
      amount: 120000,
    },
  ],
}

export const BRANCH_OFFICE = [
  {
    id: 0,
    name: 'Sucursal ITBANK',
    address: 'Av. Cochabamba 1078',
    contactNumber: '+54 11 7820-5514',
  },
  {
    id: 1,
    name: 'Sucursal Andes',
    address: 'Av. Maril 1078',
    contactNumber: '+54 11 7720-7714',
  },
  {
    id: 2,
    name: 'Sucursal Central Plaza',
    contactNumber: '+54 11 1234-5678',
    address: 'Av. Central 123, Ciudad Central',
  },
  {
    id: 3,
    name: 'Sucursal Norte Vista',
    contactNumber: '+54 11 2345-6789',
    address: 'Calle Norte 456, Ciudad Norte',
  },
  {
    id: 4,
    name: 'Sucursal Sur Maravilla',
    contactNumber: '+54 11 3456-7890',
    address: 'Av. Sur 789, Ciudad Sur',
  },
  {
    id: 5,
    name: 'Sucursal Este Horizonte',
    contactNumber: '+54 11 4567-8901',
    address: 'Calle Este 101, Ciudad Este',
  },
  {
    id: 6,
    name: 'Sucursal Oeste Jardines',
    contactNumber: '+54 11 5678-9012',
    address: 'Av. Oeste 202, Ciudad Oeste',
  },
  {
    id: 7,
    name: 'Sucursal Villa Verde',
    contactNumber: '+54 11 6789-0123',
    address: 'Calle Verde 303, Villa Verde',
  },
  {
    id: 8,
    name: 'Sucursal Las Colinas',
    contactNumber: '+54 11 7890-1234',
    address: 'Calle Colinas 404, Ciudad Colinas',
  },
]

export const BANK_RESOURCES = [
  {
    title: 'Tarjeta de Crédito',
    description:
      'Solicitá tu tarjeta de crédito con renovación bonificada 100% digital.',
    href: '#',
    icon: <MdOutlineSavings />,
  },
  {
    title: 'Prestamo Personal',
    description:
      'Solicitá tu préstamo personal a tasa preferencial y usalo para lo que más quieras.',
    href: '#',
    icon: <BsCash />,
  },
  {
    title: 'Cuenta Sueldo',
    description: 'Pasá tu sueldo al Ciudad y disfrutá de todos los beneficios.',
    href: '#',
    icon: <MdWorkOutline />,
  },
  {
    title: 'Cuenta Jubilación',
    description:
      'Cobrá tu jubilación en el Ciudad y disfrutá de los ahorros que tenemos para vos.',
    href: '#',
    icon: <HiOutlineUsers />,
  },
  {
    title: 'Cuenta Consorcio',
    description:
      '¡Con la cuenta consorcio del Ciudad reducí el gasto bancario de las expensas!',
    href: '#',
    icon: <FaRegBuilding />,
  },
  {
    title: 'Cuenta Comercio',
    description:
      'La oferta integral que tu comercio necesita, está en el Ciudad.',
    href: '#',
    icon: <CiShop />,
  },
]

export const BANK_ACTIONS = [
  {
    title: 'Turnos online',
    description: 'Solicitalo simple y rápido',
    btn: 'Pedilo ahora',
    href: '#',
    image: BANNER_1,
    alt: 'Una persona pidiendo un turno online con su telefono',
  },
  {
    title: 'Prevención de fraudes',
    description: 'Operá seguro en Canales Digitales',
    btn: 'Conocé más',
    href: '#',
    image: BANNER_2,
    alt: 'Imagen de un candado simbolizando una red segura',
  },
  {
    title: 'Información para personas usuarios de servicios financieros',
    description: 'Consultá lo que dispone el Banco Central',
    btn: 'Ingresa aquí',
    href: '#',
    image: BANNER_3,
    alt: 'Primera vista de un celular',
  },
]
