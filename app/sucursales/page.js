import HeaderHome from '@/components/HeaderHome/HeaderHome'
import ListadoSucursales from '@/components/Sucursales/Sucursales'

export default function Sucursales () {
  return (
    <>
      <HeaderHome isAction />
      <main id='contenedor_registro_usuario'>
        <div>
          <section className='min-h-[calc(100vh-96px)] p-4'>
            <ListadoSucursales />
          </section>
        </div>
      </main>
    </>
  )
}
