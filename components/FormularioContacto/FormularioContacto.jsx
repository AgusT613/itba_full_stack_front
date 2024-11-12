'use client'

import { useState } from 'react'
import styles from '@/styles/FormularioContacto.module.css'

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dni: '',
    telefono: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
  }

  return (
    <>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit} className={styles.formulario_contacto}>
        <div>
          <label htmlFor='firstName' className={styles.label_descripcion}>
            Nombre
          </label>
          <input
            className={styles.campo_datos}
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='lastName' className={styles.label_descripcion}>
            Apellido
          </label>
          <input
            className={styles.campo_datos}
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email' className={styles.label_descripcion}>
            Email
          </label>
          <input
            className={styles.campo_datos}
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='telefono' className={styles.label_descripcion}>
            Número de teléfono
          </label>
          <input
            className={styles.campo_datos}
            type='number'
            id='telefono'
            name='telefono'
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='message' className={styles.label_descripcion}>
            Mensaje
          </label>
          <input
            className={styles.campo_datos}
            type='textarea'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className={styles.btn_enviar_consulta}>
          Enviar
        </button>
      </form>
    </>
  )
}
