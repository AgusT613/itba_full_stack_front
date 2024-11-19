import HeaderHome from '@/components/HeaderHome/HeaderHome'
import ListadoSucursales from '@/components/Sucursales/Sucursales'
import { styled } from '@/styled-system/jsx'

const Section = styled.section`
  min-heigth: 100dvh;
  padding: 4rem;
`

export default function Sucursales() {
  return (
    <>
      <HeaderHome isAction />
      <main id='contenedor_registro_usuario'>
        <Section>
          <ListadoSucursales />
        </Section>
      </main>
    </>
  )
}
