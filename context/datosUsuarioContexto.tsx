'use client'

import { createContext, useMemo } from 'react'

import useUserData from '@/hooks/useUserData'

const datos = {
  userId: undefined,
  username: undefined,
  password: undefined,
}

export const DatosUsuarioContexto = createContext(null)

export function ProveedorDatosUsuario({ children }) {
  const { datosUsuario, setDatosUsuario } = useUserData(datos)
  const memoData = useMemo(
    () => ({ datosUsuario, setDatosUsuario }),
    [datosUsuario, setDatosUsuario],
  )

  return (
    <DatosUsuarioContexto.Provider value={memoData}>
      {children}
    </DatosUsuarioContexto.Provider>
  )
}
