import { BRANCH_OFFICE } from '@/utils/userDataModel'

export default async function ListadoSucursales() {
  return (
    <>
      <h2 className='text-3xl font-medium '>
        Todas las Sucursales Disponibles
      </h2>
      <section className='grid grid-cols-2 gap-2 my-4'>
        {BRANCH_OFFICE.map(
          (sucursal) =>
            BRANCH_OFFICE.length && (
              <article
                key={sucursal.name}
                className='bg-[rgba(0,0,0,.4)] p-4 rounded-lg flex flex-col gap-3'
              >
                <h2>
                  <strong>Nombre sucursal:</strong> {sucursal.name}
                </h2>
                <p>
                  <strong>Dirección:</strong> {sucursal.address}
                </p>
                <p>
                  <strong>Contact Number:</strong> {sucursal.contactNumber}
                </p>
              </article>
            ),
        )}
      </section>
    </>
  )
}
