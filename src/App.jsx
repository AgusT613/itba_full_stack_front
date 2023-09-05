import { useContext } from 'react'
import { UsuarioContexto } from './context/usuarioContexto'
import { Bienvenida } from './components/Bienvenida/Bienvenida'
import { Homebanking } from './components/Homebanking/Homebanking'
import { Usuarios } from './components/InicioSesion/Usuarios.jsx'
import './App.css'

const App = () => {
  const { usuario } = useContext(UsuarioContexto)
  return (
    <>
      {usuario
        ? (
          <>
            <Bienvenida />
            <Homebanking />
          </>
          )
        : <Usuarios />}
    </>
  )
}

export default App
