import { styled } from '@/styled-system/jsx'
import { BRANCH_OFFICE } from '@/utils/userDataModel'

const H2 = styled.h2`
  font-size: 2rem;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`

const Article = styled.article`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default async function ListadoSucursales() {
  return (
    <>
      <H2>Todas las Sucursales Disponibles</H2>
      <Section>
        {BRANCH_OFFICE.map(
          (sucursal) =>
            BRANCH_OFFICE.length && (
              <Article key={sucursal.name}>
                <h3>
                  <strong>Nombre sucursal:</strong> {sucursal.name}
                </h3>
                <p>
                  <strong>Dirección:</strong> {sucursal.address}
                </p>
                <p>
                  <strong>Contact Number:</strong> {sucursal.contactNumber}
                </p>
              </Article>
            ),
        )}
      </Section>
    </>
  )
}
