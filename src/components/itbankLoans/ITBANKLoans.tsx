import Loan from '../loan/Loan'

export default function ITBANKLoans({ loansList }) {
  return (
    <>
      {loansList.map((loan) => (
        <Loan key={loan.type} loan={loan} />
      ))}
    </>
  )
}
