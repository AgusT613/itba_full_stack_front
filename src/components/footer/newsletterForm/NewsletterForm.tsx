export default function NewsletterForm() {
  return (
    <form className='flex flex-wrap gap-2'>
      <input
        type='email'
        placeholder='Correo electrónico'
        className='flex-1 min-w-[12rem] px-3 py-2 text-sm rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500'
      />
      <select
        name='nw-interests'
        id='newsletter-interests'
        className='px-3 py-2 text-sm rounded-md bg-black/40 text-white border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500'
      >
        <option value='no-selected' className='text-black bg-white'>
          Seleccione un interés
        </option>
        <option value='promotions' className='text-black bg-white'>
          Promociones y Beneficios
        </option>
        <option value='pymes' className='text-black bg-white'>
          Instituto PyMes
        </option>
        <option value='economic-studies' className='text-black bg-white'>
          Estudios Económicos
        </option>
        <option value='bid' className='text-black bg-white'>
          Subastas
        </option>
        <option value='enterprise' className='text-black bg-white'>
          Empresas
        </option>
      </select>
      <input
        type='submit'
        value='Suscribirse'
        className='px-4 py-2 text-sm font-semibold rounded-md bg-primary-600 hover:bg-primary-700 text-white cursor-pointer transition-colors shadow-sm'
      />
    </form>
  )
}
