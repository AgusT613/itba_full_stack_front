import { obtenerSucursales } from '@/context/services'

export default async function ListadoSucursales () {
  const listadoSucursales = await obtenerSucursales()

  return (
    <>
      <h2 className='text-3xl font-medium '>Todas las Sucursales Disponibles</h2>
      <section className='grid grid-cols-2 gap-2 my-4'>
        {listadoSucursales.map(sucursal => listadoSucursales.length && (
          <article key={sucursal.nombre} className='bg-[rgba(0,0,0,.4)] p-4 rounded-lg flex flex-col gap-3'>
            <h2><strong>Nombre sucursal:</strong> {sucursal.nombre}</h2>
            <p><strong>Dirección:</strong> {sucursal.direccion}</p>
          </article>
        ))}
      </section>
    </>
  )
}
