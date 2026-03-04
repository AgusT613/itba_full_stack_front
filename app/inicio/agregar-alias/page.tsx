import AddAliasForm from '@/src/components/addAliasForm/AddAliasForm'

export default function Page() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Agregar Alias</h1>
      <p className='text-lg'>
        Aqui puedes agregar alias de destinatarios que podras utilizar para
        realizar transferencias.
      </p>

      <AddAliasForm />
    </div>
  )
}
