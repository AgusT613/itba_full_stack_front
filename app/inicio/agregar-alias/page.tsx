import AddAliasForm from '@/src/components/addAliasForm/AddAliasForm'

export default function Page() {
  return (
    <div className='flex flex-col gap-2 max-w-xl text-foreground'>
      <h1 className='text-3xl font-bold'>Agregar Alias</h1>
      <p className='text-sm sm:text-base text-foreground/70'>
        Aquí podés registrar alias de destinatarios frecuentes para realizar
        transferencias rápidamente.
      </p>

      <AddAliasForm />
    </div>
  )
}
