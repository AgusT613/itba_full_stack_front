import { useState } from 'react'
import Registrar from './components/Registrar'
import IniciarSesion from './components/IniciarSesion'
import './Usuarios.css'

export default function Usuarios () {
  const [registro, setRegistro] = useState(true)
  const toggleFormulario = () => setRegistro(!registro)

  return (
    <main id='contenedor_registro_usuario'>
      <div>
        <section>
          <h2>
            {registro
              ? 'Registro de Usuario'
              : 'Inicio de Sesión'}
          </h2>

          {registro
            ? <Registrar />
            : <IniciarSesion />}

          <button onClick={toggleFormulario}>
            {registro
              ? 'Ya tienes cuenta? Inicia sesión aquí'
              : 'Deseas crearte una cuenta? Registrate aquí'}
          </button>
        </section>
      </div>
    </main>
  )
}
