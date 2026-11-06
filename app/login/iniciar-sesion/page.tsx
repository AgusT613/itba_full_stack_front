import SignInForm from '@/src/components/login/SignInForm'
import ToggleForm from '@/src/components/login/toggleForm/ToggleForm'

export const metadata = {
  title: 'Inicio de sesión - ITBANK',
  description:
    'Inicia sesión en nuestro portal bancario protegido por medidas de seguridad avanzadas. Administra tus finanzas, realiza transferencias y verifica tus saldos con confianza.',
}

export default function Page() {
  return (
    <>
      <h2 className='text-2xl font-bold text-center'>Iniciar Sesión</h2>
      <SignInForm />
      <ToggleForm to='/login/registrarse'>
        ¿Deseas crearte una cuenta? Regístrate aquí
      </ToggleForm>
    </>
  )
}
