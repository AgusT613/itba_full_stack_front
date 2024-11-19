'use client'

import { useRef, useState } from 'react'

import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

import {
  Button,
  ButtonRow,
  Fieldset,
  Form,
  FormRow,
  Input,
  Label,
  Legend,
  Message,
  Select,
} from './solicitarPrestamo.panda'

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
    <Form ref={formCrearPrestamoRef} onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>Prestamo</Legend>

        <FormRow>
          <Label htmlFor='sucursal'>Sucursal</Label>
          <Select id='sucursal' name='sucursal'>
            {BRANCH_OFFICE.map((sucursal) => (
              <option value={sucursal.id} key={sucursal.id}>
                {sucursal.name}
              </option>
            ))}
          </Select>
        </FormRow>

        <FormRow>
          <Label htmlFor='tipoPrestamo'>Tipo de prestamo</Label>
          <Select id='tipoPrestamo' name='tipoPrestamo'>
            <option value='hipotecario'>Prestamo hipotecario</option>
            <option value='personal'>Prestamo personal</option>
            <option value='prendario'>Prestamo prendario</option>
          </Select>
        </FormRow>

        <FormRow>
          <Label htmlFor='fechaInicioPrestamo'>Fecha de inicio prestamo</Label>
          <Input
            id='fechaInicioPrestamo'
            type='date'
            name='fechaInicioPrestamo'
          />
        </FormRow>

        <FormRow>
          <Label htmlFor='fechaFinalizacionPrestamo'>
            Fecha de finalizacion prestamo
          </Label>
          <Input
            id='fechaFinalizacionPrestamo'
            type='date'
            name='fechaFinalizacionPrestamo'
          />
        </FormRow>

        <FormRow>
          <Label htmlFor='monto'>Monto</Label>
          <Input id='monto' type='number' name='monto' placeholder='500000' />
        </FormRow>
      </Fieldset>

      <ButtonRow>
        <Button
          type='button'
          onClick={handleFormReset}
          value='Reiniciar formulario'
        />
        <Button type='submit' />
        {resetPage && (
          <Button
            type='button'
            onClick={handleResetPage}
            value='Recargar página'
          />
        )}
      </ButtonRow>

      {error.state ? (
        <Message error>{error.message}</Message>
      ) : (
        <Message>{success.message}</Message>
      )}
    </Form>
  )
}
