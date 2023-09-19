import { ProveedorUsuario } from '@/context/usuarioContexto'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import IniciarSesion from '@/components/IniciarSesion/IniciarSesion'
import ToggleForm from '@/components/IniciarSesion/ToggleForm'
import '../../components/IniciarSesion/Usuarios.css'

export default function Page () {
  return (
    <>
      <HeaderHome isAction />
      <main id='contenedor_registro_usuario'>
        <div>
          <section>
            <h2>Iniciar Sesion</h2>
            <ProveedorUsuario>
              <IniciarSesion />
            </ProveedorUsuario>
            <ToggleForm to='/register'>Deseas crearte una cuenta? Registrate aquí</ToggleForm>
          </section>
        </div>
      </main>
    </>
  )
}
