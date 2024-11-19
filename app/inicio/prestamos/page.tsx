'use client'

import CalculadoraPrestamos from '@/components/CalculadoraPrestamos/CalculadoraPrestamos'
import FormularioSolicitarPrestamo from '@/components/solicitarPrestamo/SolicitarPrestamo'
import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

import {
  Card,
  DeleteButton,
  Grid,
  H2,
  H3,
  Section,
  Span,
  Strong,
} from './page.panda'

export default function Page() {
  const prestamosITBANK = USER.loan.filter(
    (prestamo) => prestamo.branchOffice === 'ITBANK',
  )
  const prestamosOtrasSucursales = USER.loan.filter(
    (prestamo) => prestamo.branchOffice !== 'ITBANK',
  )

  const handleEliminarPrestamo = (prestamoId) => {
    return prestamoId
  }

  return (
    <>
      <Section>
        <H2>Solicitar un Prestamo</H2>
        <FormularioSolicitarPrestamo />
      </Section>
      <Section>
        <H2>Listado Prestamos ITBANK</H2>
        <Span>Dirección: {BRANCH_OFFICE[0].address}</Span>
        <Grid>
          {prestamosITBANK.map((prestamo) => (
            <Card key={prestamo.id}>
              <H3>Prestamo {prestamo.type}</H3>
              <p>
                <strong>Fecha inicio del prestamo:</strong> {prestamo.grandDate}
              </p>
              <p>
                <strong>Fecha finalizacion del prestamo:</strong>{' '}
                {prestamo.expirationDate}
              </p>
              <Strong>Monto: ${prestamo.amount}</Strong>
              <DeleteButton onClick={() => handleEliminarPrestamo(prestamo.id)}>
                Dar de Baja
              </DeleteButton>
            </Card>
          ))}
        </Grid>
      </Section>
      <Section>
        <H2>Listado Prestamos por Sucursal</H2>
        <Grid>
          {prestamosOtrasSucursales.map((prestamo) => (
            <Card key={prestamo.id}>
              <H3>Prestamo {prestamo.type}</H3>
              <p>
                <strong>Nombre sucursal:</strong> {BRANCH_OFFICE[1].name}
              </p>
              <p>
                <strong>Direccion sucursal:</strong> {BRANCH_OFFICE[1].address}
              </p>
              <p>
                <strong>Fecha inicio del prestamo:</strong> {prestamo.grandDate}
              </p>
              <p>
                <strong>Fecha finalizacion del prestamo:</strong>{' '}
                {prestamo.expirationDate}
              </p>
              <Strong>Monto: ${prestamo.amount}</Strong>
              <DeleteButton onClick={() => handleEliminarPrestamo(prestamo.id)}>
                Dar de Baja
              </DeleteButton>
            </Card>
          ))}
        </Grid>
      </Section>
      <Section>
        <H2>Calculadora de Prestamos</H2>
        <CalculadoraPrestamos />
      </Section>
    </>
  )
}
