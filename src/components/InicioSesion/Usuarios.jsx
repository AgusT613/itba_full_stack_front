import { useContext } from 'react'
import { UsuarioContexto } from '../../context/usuarioContexto'
import Registrar from './usuarios/registrar'
import IniciarSesion from './usuarios/iniciarSesion'
import Enlace from './Enlace'

export default function Usuarios () {
  const { setUsuario } = useContext(UsuarioContexto)
  return (
    <main className='contenedor_registro_usuario'>
      <div className='registrarPadre'>
        <Registrar setUsuario={setUsuario} />
      </div>
      <div hidden className='iniciarSesionPadre'>
        <IniciarSesion setUsuario={setUsuario} />
      </div>
      {/* Enlace de registro/inicio de sesión */}
      <div className='divEnlace'>
        <Enlace />
      </div>
    </main>
  )
}
