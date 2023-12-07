'use client'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { obtenerInicioSesion } from '@/context/services'
import styles from './Formulario.module.css'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'

export default function IniciarSesion () {
  const [usuario, setNombreUsuario] = useState('')
  const [contrasenia, setContrasenia] = useState('')
  // Evita llamar a la api cuando se ingresa al formulario por primera vez
  const [formularioEnviado, setFormularioEnviado] = useState(false)
  const { setDatosUsuario } = useContext(DatosUsuarioContexto)
  const router = useRouter()

  useEffect(() => {
    const username = window.localStorage.getItem('username')
    const password = window.localStorage.getItem('password')
    if (formularioEnviado && username === null && password === null) {
      obtenerInicioSesion(usuario, contrasenia)
        .then(response => {
          window.localStorage.setItem('username', usuario)
          window.localStorage.setItem('password', contrasenia)
          window.localStorage.setItem('auth', 'true')
          window.localStorage.setItem('user_id', response.user.id)
          setDatosUsuario({
            username: usuario,
            password: contrasenia,
            userId: response.user.id
          })
          window.alert(response.message)
          router.push('/inicio')
        })
        .catch(error => {
          window.alert(error.message)
          console.log(error)
        })
      setFormularioEnviado(false)
    }
    if (username !== null && password !== null) {
      window.alert('El usuario ya inicio sesión anteriormente. Puede navegar a su homebanking')
    }
  }, [formularioEnviado, usuario, contrasenia])

  const iniciarSesionUsuario = (e) => {
    e.preventDefault()
    setFormularioEnviado(true)
    const valoresFormulario = Object.fromEntries(new FormData(e.target))
    setNombreUsuario(valoresFormulario.username)
    setContrasenia(valoresFormulario.password)
  }

  return (
    <form onSubmit={iniciarSesionUsuario} className={styles.formulario}>
      {/* Usuario */}
      <div>
        <label className={styles.label_descripcion} htmlFor='username'>Nombre de usuario</label>
        <input
          className={styles.campo_datos}
          name='username'
          type='text'
          placeholder='agust613'
        />
      </div>
      {/* Contraseña */}
      <div>
        <label className={styles.label_descripcion} htmlFor='password'>Contraseña</label>
        <input
          className={styles.campo_datos}
          name='password'
          type='password'
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
