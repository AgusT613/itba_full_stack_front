'use client'
import { useState } from 'react'
import styles from './Formulario.module.css'

export default function Registrar () {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  const leerNombre = e => setNombre(e.target.value)
  const leerEmail = e => setEmail(e.target.value)
  const leerContrasenia = e => setContrasenia(e.target.value)

  function RegistrarUsuario (e) {
    e.preventDefault()

    console.log(nombre, email, contrasenia)
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
