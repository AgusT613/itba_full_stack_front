'use client'

import useUserData from '@/hooks/useUserData'
import { createContext } from 'react'

const datos = {
  userId: undefined,
  username: undefined,
  password: undefined,
}

export const DatosUsuarioContexto = createContext()

export const ProveedorDatosUsuario = ({ children }) => {
  const { datosUsuario, setDatosUsuario } = useUserData(datos)

  return (
    <DatosUsuarioContexto.Provider value={{ datosUsuario, setDatosUsuario }}>
      {children}
    </DatosUsuarioContexto.Provider>
  )
}
