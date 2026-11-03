import Loan from '../loan/Loan'

export default function ITBANKLoans({ loansList }) {
  return (
    <>
      {loansList.map((loan) => {
        const { id, type } = loan
        const labels = [
          'Fecha inicio del prestamo',
          'Fecha finalización del prestamo',
          'Monto',
        ]
        const itemList = Object.entries(loan).filter(
          (value) =>
            value[0] !== 'id' &&
            value[0] !== 'type' &&
            value[0] !== 'branchOffice',
        )

        return <Loan key={type} loan={loan} />
      })}
    </>
  )
}
