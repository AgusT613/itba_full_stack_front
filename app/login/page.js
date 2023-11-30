import HeaderHome from '@/components/HeaderHome/HeaderHome'
import IniciarSesion from '@/components/IniciarSesion/IniciarSesion'
import ToggleForm from '@/components/IniciarSesion/ToggleForm'
import '../../components/IniciarSesion/Usuarios.css'

export const metadata = {
  title: 'Inicio de sesión - ITBANK',
  description: 'Inicia sesión en nuestro portal bancario protegido por medidas de seguridad avanzadas. Administra tus finanzas, realiza transferencias y verifica tus saldos con confianza.'
}

export default function Page () {
  return (
    <>
      <HeaderHome isAction />
      <main id='contenedor_registro_usuario'>
        <div>
          <section>
            <h2>Iniciar Sesion</h2>
            <IniciarSesion />
            <ToggleForm to='/register'>Deseas crearte una cuenta? Registrate aquí</ToggleForm>
          </section>
        </div>
      </main>
    </>
  )
}
