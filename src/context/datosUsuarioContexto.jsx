import { createContext, useState } from 'react'
import { datos } from './datosUsuario'

export const DatosUsuarioContexto = createContext()

export const ProveedorDatosUsuario = ({ children }) => {
  const [datosUsuario, setDatosUsuario] = useState(datos)
  const [saldoVisible, setSaldoVisible] = useState(true)

  const revelarSaldo = () => setSaldoVisible(!saldoVisible)
  return (
    <DatosUsuarioContexto.Provider value={{ datosUsuario, saldoVisible, revelarSaldo }}>
      {children}
    </DatosUsuarioContexto.Provider>
  )
}
