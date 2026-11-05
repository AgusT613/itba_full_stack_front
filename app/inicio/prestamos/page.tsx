import LoanCalculator from '@/src/components/loanCalculator/LoanCalculator'
import LoanRequestForm from '@/src/components/loanRequestForm/LoanRequestForm'
import OtherLoans from '@/src/components/otherLoans/OtherLoans'
import SectionDivider2 from '@/src/components/sectionDivider2/SectionDivider2'
import { getAccounts, getBranchOffices, getLoans } from '@/src/lib/dataFetch'
import styles from './page.module.css'

export default async function Page() {
  const branchOfficesList = await getBranchOffices()
  const bankAccounts = await getAccounts()
  const loanList = await getLoans()

  return (
    <>
      <SectionDivider2 title='Solicitar un Prestamo'>
        <LoanRequestForm
          branchOfficesList={branchOfficesList}
          bankAccounts={bankAccounts}
        />
      </SectionDivider2>

      <SectionDivider2 title='Listado Prestamos'>
        <div className={styles.wrapper}>
          <OtherLoans loansList={loanList} />
        </div>
      </SectionDivider2>

      <SectionDivider2 title='Calculadora de Prestamos'>
        <LoanCalculator />
      </SectionDivider2>
    </>
  )
}
