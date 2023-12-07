import Registrar from '@/components/IniciarSesion/Registrar'
import ToggleForm from '@/components/IniciarSesion/ToggleForm'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import '../../components/IniciarSesion/Usuarios.css'

export const metadata = {
  title: 'Registro de Usuario- ITBANK',
  description: 'Regístrate en ITBANK y accede a una gama completa de servicios financieros. Garantizamos la seguridad de tus datos y transacciones. Abre una cuenta en línea hoy y disfruta de la comodidad de gestionar tus finanzas desde cualquier lugar.'
}

export default function Page () {
  return (
    <>
      <HeaderHome isAction />
      <main id='contenedor_registro_usuario'>
        <div>
          <section>
            <h2>Registro de Usuario</h2>
            <Registrar />
            <ToggleForm to='/login'>Ya tienes cuenta? Inicia sesión aquí</ToggleForm>
          </section>
        </div>
      </main>
    </>
  )
}
