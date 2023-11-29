'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './Formulario.module.css'
import { LOGIN_USER_API } from '@/context/api_urls'

export default function IniciarSesion () {
  const [usuario, setNombreUsuario] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  const router = useRouter()

  const leerUsuario = e => setNombreUsuario(e.target.value)
  const leerContrasenia = e => setContrasenia(e.target.value)

  function IniciarSesionUsuario (e) {
    e.preventDefault()

    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa(usuario + ':' + contrasenia)
      }
    }

    fetch(LOGIN_USER_API, options)
      .then(response => {
        if (response.status === 401 && usuario === '' && contrasenia === '') {
          throw new Error('Acceso denegado. Completar los campos')
        } else if (response.status === 401) {
          throw new Error('Acceso denegado. Datos incorrectos')
        } else {
          window.localStorage.setItem('username', usuario)
          window.localStorage.setItem('password', contrasenia)
          window.localStorage.setItem('auth', 'true')
          window.alert('Inicio de sesión correcto. Al aceptar se redirigira al homebanking')
          router.push('/inicio')
        }
      })
      .catch(error => {
        window.alert(error)
      })
  }

  return (
    <form onSubmit={IniciarSesionUsuario} className={styles.formulario}>
      {/* Usuario */}
      <div>
        <label className={styles.label_descripcion} htmlFor='username'>Nombre de usuario</label>
        <input
          className={styles.campo_datos}
          name='username'
          type='text'
          onChange={leerUsuario}
          placeholder='agust613'
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
          placeholder='agustin123'
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
