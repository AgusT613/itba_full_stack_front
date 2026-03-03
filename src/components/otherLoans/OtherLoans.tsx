import { TLoan } from '@/src/types/loan'
import Loan from '../loan/Loan'

export default function OtherLoans({ loansList }: { loansList: TLoan[] }) {
  return loansList.length > 0 ? (
    loansList.map((loan) => {
      return <Loan key={loan.id} loan={loan} />
    })
  ) : (
    <p>No hay prestamos registrados</p>
  )
}
