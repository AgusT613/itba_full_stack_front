import ITBANKLoans from '@/src/components/itbankLoans/ITBANKLoans'
import LoanCalculator from '@/src/components/loanCalculator/LoanCalculator'
import LoanRequestForm from '@/src/components/loanRequestForm/LoanRequestForm'
import OtherLoans from '@/src/components/otherLoans/OtherLoans'
import SectionDivider2 from '@/src/components/sectionDivider2/SectionDivider2'
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
