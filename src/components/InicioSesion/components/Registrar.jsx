import '../Usuarios.css'

export default function Registrar ({ funcionNombre, funcionEmail, funcionContraseña, funcionBoton }) {
  return (
    <div className='contenedor'>
      <form className='formulario'>
        {/* Nombre */}
        <div className='divNombre'>
          <label className='labelNombre' name='name'>Nombre</label>
          <input
            type='text'
            className='nombre'
            onChange={e => { funcionNombre(e) }}
          />
        </div>
        {/* Email */}
        <div className='divEmail'>
          <label className='labelEmail'>Correo Electrónico</label>
          <input
            type='email'
            className='email'
            onChange={e => { funcionEmail(e) }}
          />
        </div>
        {/* Contraseña */}
        <div className='divContraseña'>
          <label className='labelContraseña'>Contraseña</label>
          <input
            type='password'
            className='contraseña'
            onChange={e => { funcionContraseña(e) }}
          />
        </div>
        <div className='divBoton'>
          <button
            className='boton'
            onClick={e => { funcionBoton(e) }}
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}
