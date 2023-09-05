import { useContext } from 'react'
import { UsuarioContexto } from './context/usuarioContexto'
import { Bienvenida } from './components/Bienvenida/Bienvenida'
import { Homebanking } from './components/Homebanking/Homebanking'
import Usuarios from './components/InicioSesion/Usuarios'
import './App.css'

const App = () => {
  const { usuario,setUsuario } = useContext(UsuarioContexto)

  return (
    <>
      {usuario
        ? (
          <>
            <Bienvenida />
            <Homebanking />
          </>
          )
        : <div className="usuario"  ><Usuarios usuario={usuario} setUsuario={setUsuario}/></div>}
    </>
  )
}

export default App
