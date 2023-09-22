'use client'
import { createContext, useState } from 'react'

export const UsuarioContexto = createContext()

export const ProveedorUsuario = ({ children }) => {
  const [usuario, setUsuario] = useState(false)
  return (
    <UsuarioContexto.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContexto.Provider>
  )
}
