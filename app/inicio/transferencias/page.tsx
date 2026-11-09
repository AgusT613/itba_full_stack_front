import { Table } from '@/src/components/table/Table'
import MakeTransferForm from '@/src/components/transfers/makeTransferForm'
import {
  getAccounts,
  getTransfers,
  getUserSavedAliases,
} from '@/src/lib/dataFetch'
import { transferHistoryTableHeader } from '@/utils/tableHeaders'

export const metadata = {
  title: 'Transferencias - ITBANK',
  description:
    'Realiza transferencias seguras y rápidas en línea con nuestro servicio de banca en línea. Confía en nuestra plataforma segura para gestionar tus transferencias bancarias de forma eficiente y proteger tu patrimonio financiero.',
}

export default async function Page() {
  const bankAccountsAlias = await getAccounts()
  const transfersData = await getTransfers()
  const savedAliases = await getUserSavedAliases()

  return (
    <div className='flex flex-col lg:flex-row gap-8 items-start'>
      <section className='w-full lg:max-w-md flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Realizar Transferencia</h2>
        <MakeTransferForm
          bankAccountsAlias={bankAccountsAlias}
          savedAliases={savedAliases}
        />
      </section>

      {transfersData.length > 0 && (
        <section className='w-full flex-1 flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>Historial de Transferencias</h2>
          <Table data={transfersData} header={transferHistoryTableHeader} />
        </section>
      )}
    </div>
  )
}
