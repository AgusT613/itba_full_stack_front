import { useContext } from 'react'
import { UsuarioContexto } from './context/usuarioContexto'
import { Bienvenida } from './components/Bienvenida/Bienvenida'
import { Homebanking } from './components/Homebanking/Homebanking'
import Usuarios from './components/InicioSesion/Usuarios'
import './App.css'

const App = () => {
  const { usuario } = useContext(UsuarioContexto)

  return (
    <>
      {usuario
        ? (
          <Homebanking />
          )
        : (
          <article id='pantalla_inicio_sesion'>
            <Bienvenida />
            <Usuarios />
          </article>
          )}
    </>
  )
}

export default App
