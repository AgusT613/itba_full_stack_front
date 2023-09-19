import { ProveedorUsuario } from '@/context/usuarioContexto'
import Registrar from '@/components/IniciarSesion/Registrar'
import ToggleForm from '@/components/IniciarSesion/ToggleForm'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import '../../components/IniciarSesion/Usuarios.css'

export default function Page () {
  return (
    <>
      <HeaderHome isAction />
      <main id='contenedor_registro_usuario'>
        <div>
          <section>
            <h2>Registro de Usuario</h2>
            <ProveedorUsuario>
              <Registrar />
            </ProveedorUsuario>
            <ToggleForm to='/login'>Ya tienes cuenta? Inicia sesión aquí</ToggleForm>
          </section>
        </div>
      </main>
    </>
  )
}
