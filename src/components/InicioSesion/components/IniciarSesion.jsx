import { useContext, useState } from 'react'
import { UsuarioContexto } from '../../../context/usuarioContexto'
import styles from './Formulario.module.css'

export default function IniciarSesion () {
  const { setUsuario } = useContext(UsuarioContexto)
  const [email, setEmail] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  const leerEmail = e => setEmail(e.target.value)
  const leerContrasenia = e => setContrasenia(e.target.value)

  function IniciarSesionUsuario (e) {
    e.preventDefault()
    if (contrasenia.length > 0 && email.length > 0) {
      // Valor por defecto hasta que se verifique la cuenta
      setUsuario(false)
      // Si se encuentra el mail en localStorage pero la contraseña no concuerda con la puesta en localStorage aviso que la contraseña es incorrecta
      if (
        window.localStorage.getItem(email) &&
        JSON.parse(window.localStorage.getItem(email)).contrasenia !== contrasenia
      ) {
        window.alert('Contraseña incorrecta')
        // Si se encuentra el mail en localstorage y concuerda la contraseña=>redirigo a la página
      } else if (
        window.localStorage.getItem(email) &&
        JSON.parse(window.localStorage.getItem(email)).contrasenia === contrasenia
      ) {
        // Variable para redireccionar a la página principal
        setUsuario(true)
        // Si no se encuentra el correo en localStorage aviso que no existe la cuenta
      } else if (!window.localStorage.getItem(email)) {
        window.alert('No existe la cuenta')
      }
      e.target.reset()
    } else {
      window.alert('Complete los campos')
    }
  }

  return (
    <form onSubmit={IniciarSesionUsuario} className={styles.formulario}>
      {/* Email */}
      <div>
        <label className={styles.label_descripcion} htmlFor='email'>Correo Electrónico</label>
        <input
          className={styles.campo_datos}
          name='email'
          type='email'
          onChange={leerEmail}
          placeholder='mariano@ejemplo.com'
        />
      </div>
      {/* Contraseña */}
      <div>
        <label className={styles.label_descripcion} htmlFor='contrasenia'>Contraseña</label>
        <input
          className={styles.campo_datos}
          name='contrasenia'
          type='password'
          onChange={leerContrasenia}
          placeholder='123456'
        />
      </div>
      <div>
        <input
          className={styles.btn_enviar_datos}
          type='submit'
          value='Iniciar Sesion'
        />
      </div>
    </form>
  )
}
