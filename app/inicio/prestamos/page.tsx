import ITBANKLoans from '@/components/itbankLoans/ITBANKLoans'
import LoanCalculator from '@/components/loanCalculator/LoanCalculator'
import LoanRequestForm from '@/components/loanRequestForm/LoanRequestForm'
import OtherLoans from '@/components/otherLoans/OtherLoans'
import SectionDivider2 from '@/components/sectionDivider2/SectionDivider2'
import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page() {
  const ITBANKLoansList = USER.loan.filter(
    (loan) => loan.branchOffice === 'ITBANK',
  )
  const otherLoansList = USER.loan.filter(
    (loan) => loan.branchOffice !== 'ITBANK',
  )

  return (
    <>
      <SectionDivider2 title='Solicitar un Prestamo'>
        <LoanRequestForm />
      </SectionDivider2>

      <SectionDivider2
        title='Listado Prestamos ITBANK'
        subtitle={`Dirección: ${BRANCH_OFFICE[0].address}`}
      >
        <div className={styles.wrapper}>
          <ITBANKLoans loansList={ITBANKLoansList} />
        </div>
      </SectionDivider2>

      <SectionDivider2 title='Listado Prestamos por Sucursal'>
        <div className={styles.wrapper}>
          <OtherLoans loansList={otherLoansList} />
        </div>
      </SectionDivider2>

      <SectionDivider2 title='Calculadora de Prestamos'>
        <LoanCalculator />
      </SectionDivider2>
    </>
  )
}
