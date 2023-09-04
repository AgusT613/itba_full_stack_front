import '../Usuarios.css'

export default function IniciarSesion ({ funcionEmail, funcionContraseña, funcionBoton2 }) {
  return (
    <div className='contenedor2'>
      <form className='formulario2'>
        {/* Email */}
        <div className='divEmail2'>
          <label className='labelEmail2'>Correo Electrónico</label>
          <input
            type='email'
            className='email2'
            onChange={e => { funcionEmail(e) }}
          />
        </div>
        {/* Contraseña */}
        <div className='divContraseña2'>
          <label className='labelContraeña2'>Contraseña</label>
          <input
            type='password'
            className='contraseña2'
            onChange={e => { funcionContraseña(e) }}
          />
        </div>
        <div className='divBoton2'>
          <button
            className='boton2'
            onClick={e => { funcionBoton2(e) }}
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  )
}
