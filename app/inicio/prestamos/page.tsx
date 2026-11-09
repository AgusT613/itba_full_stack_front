import LoanCalculator from '@/src/components/loanCalculator/LoanCalculator'
import LoanRequestForm from '@/src/components/loanRequestForm/LoanRequestForm'
import OtherLoans from '@/src/components/otherLoans/OtherLoans'
import SectionDivider2 from '@/src/components/sectionDivider2/SectionDivider2'
import { getAccounts, getBranchOffices, getLoans } from '@/src/lib/dataFetch'

export default async function Page() {
  const branchOfficesList = await getBranchOffices()
  const bankAccounts = await getAccounts()
  const loanList = await getLoans()

  return (
    <div className='flex flex-col gap-6'>
      <SectionDivider2 title='Solicitar un Préstamo'>
        <LoanRequestForm
          branchOfficesList={branchOfficesList}
          bankAccounts={bankAccounts}
        />
      </SectionDivider2>

      <SectionDivider2 title='Listado Préstamos'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
          <OtherLoans loansList={loanList} />
        </div>
      </SectionDivider2>

      <SectionDivider2 title='Calculadora de Préstamos'>
        <LoanCalculator />
      </SectionDivider2>
    </div>
  )
}
