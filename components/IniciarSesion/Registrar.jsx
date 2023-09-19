'use client'
import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'
import { UsuarioContexto } from '@/context/usuarioContexto'
import styles from './Formulario.module.css'

export default function Registrar () {
  const router = useRouter()
  const { setUsuario } = useContext(UsuarioContexto)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  const leerNombre = e => setNombre(e.target.value)
  const leerEmail = e => setEmail(e.target.value)
  const leerContrasenia = e => setContrasenia(e.target.value)

  function RegistrarUsuario (e) {
    e.preventDefault()
    if (nombre.length >= 1 && email.length >= 1 && contrasenia.length >= 1) {
      // Valor por defecto hasta que se verifique la cuenta
      setUsuario(false)
      // Si al buscar el mail puesto en el input mail, éste existe en localStorage, avisa que la cuenta en uso
      if (window.localStorage.getItem(email)) {
        window.alert('Cuenta en uso')
      } else {
        // Si el mail ingresado no existe en localStorage, se crea
        window.localStorage.setItem(email, JSON.stringify({ nombre, email, contrasenia }))
        setUsuario(true)
        router.push('/inicio')
      }
      // Hago que los valores de los inputs en registrar se 'reinicien'
      e.target.reset()
    } else {
      window.alert('Complete los campos')
    }
  }

  return (
    <form onSubmit={RegistrarUsuario} className={styles.formulario}>
      {/* Nombre */}
      <div>
        <label className={styles.label_descripcion} htmlFor='nombre'>Nombre</label>
        <input
          className={styles.campo_datos}
          name='nombre'
          type='text'
          onChange={leerNombre}
          placeholder='Mariano'
        />
      </div>
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
          placeholder='1235678'
        />
      </div>
      <input
        className={styles.btn_enviar_datos}
        type='submit'
        value='Registrarse'
      />
    </form>
  )
}
