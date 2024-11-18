'use client'

import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'
import { useRef, useState } from 'react'

const formularioInicial = {
  error: {
    state: false,
    message: undefined,
  },
  success: {
    message: 'Asegurese de cargar bien los datos',
  },
}

export default function FormularioSolicitarPrestamo() {
  const formCrearPrestamoRef = useRef(null)
  const [resetPage, setResetPage] = useState(false)
  const [error, setError] = useState(formularioInicial.error)
  const [success, setSuccess] = useState(formularioInicial.success)

  const handleFormReset = () => {
    formCrearPrestamoRef.current.reset()
    setError(formularioInicial.error)
    setSuccess(formularioInicial.success)
  }

  const handleResetPage = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    const datosFormulario = Object.fromEntries(new FormData(e.target))

    const body = {
      user: USER.customer.id,
      branchOffice: parseInt(datosFormulario.sucursal),
      loanType: datosFormulario.tipoPrestamo,
      grandDate: datosFormulario.fechaInicioPrestamo,
      expirationDate: datosFormulario.fechaFinalizacionPrestamo,
      amount: datosFormulario.monto,
    }

    console.log(body)
  }

  return (
    <form
      ref={formCrearPrestamoRef}
      className='flex flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,.2)] p-8 rounded-lg'
      onSubmit={handleSubmit}
    >
      <fieldset className='border-gray-200 border-2 p-4 flex flex-col items-center justify-center gap-4'>
        <legend className='mx-8 text-lg'>Prestamo</legend>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor='sucursal'>Sucursal</label>
          <select
            id='sucursal'
            name='sucursal'
            className='min-w-[20rem] px-2 py-1 rounded-md bg-transparent border-2 border-black placeholder:text-[rgba(255,255,255,.7)]'
          >
            {BRANCH_OFFICE.map((sucursal) => (
              <option value={sucursal.id} key={sucursal.id}>
                {sucursal.name}
              </option>
            ))}
          </select>
        </div>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor='tipoPrestamo'>Tipo de prestamo</label>
          <select
            id='tipoPrestamo'
            name='tipoPrestamo'
            className='min-w-[20rem] px-2 py-1 rounded-md bg-transparent border-2 border-black placeholder:text-[rgba(255,255,255,.7)]'
          >
            <option value='hipotecario'>Prestamo hipotecario</option>
            <option value='personal'>Prestamo personal</option>
            <option value='prendario'>Prestamo prendario</option>
          </select>
        </div>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor='fechaInicioPrestamo'>Fecha de inicio prestamo</label>
          <input
            id='fechaInicioPrestamo'
            type='date'
            name='fechaInicioPrestamo'
            className='min-w-[20rem] px-2 py-1 rounded-md bg-transparent border-2 border-black placeholder:text-[rgba(255,255,255,.7)]'
          />
        </div>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor='fechaFinalizacionPrestamo'>
            Fecha de finalizacion prestamo
          </label>
          <input
            id='fechaFinalizacionPrestamo'
            type='date'
            name='fechaFinalizacionPrestamo'
            className='min-w-[20rem] px-2 py-1 rounded-md bg-transparent border-2 border-black placeholder:text-[rgba(255,255,255,.7)]'
          />
        </div>
        <div className='w-full flex justify-between items-center'>
          <label htmlFor='monto'>Monto</label>
          <input
            id='monto'
            type='number'
            name='monto'
            placeholder='500000'
            className='min-w-[20rem] px-2 py-1 rounded-md bg-transparent border-2 border-black placeholder:text-[rgba(255,255,255,.7)]'
          />
        </div>
      </fieldset>
      <div className='self-center justify-self-center flex gap-4'>
        <input
          onClick={handleFormReset}
          type='button'
          className='w-40 rounded-md col-span-2 cursor-pointer p-2 transition-colors hover:bg-[rgba(0,0,0,.6)] bg-[rgba(0,0,0,.2)]'
          value='Reiniciar formulario'
        />
        <input
          type='submit'
          className=' w-40 rounded-md col-span-2 cursor-pointer p-2 transition-colors hover:bg-[rgba(0,0,0,.6)] bg-[rgba(0,0,0,.2)]'
        />
        {resetPage && (
          <input
            onClick={handleResetPage}
            type='button'
            className=' w-40 rounded-md col-span-2 cursor-pointer p-2 transition-colors hover:bg-[rgba(0,0,0,.6)] bg-[rgba(0,0,0,.2)]'
            value='Recargar página'
          />
        )}
      </div>
      {error.state ? (
        <p className='text-red-300 text-sm'>{error.message}</p>
      ) : (
        <p className='text-green-300 text-sm'>{success.message}</p>
      )}
    </form>
  )
}
