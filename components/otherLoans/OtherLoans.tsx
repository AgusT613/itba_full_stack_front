import Loan from '../loan/Loan'

export default function OtherLoans({ loansList }) {
  return (
    <>
      {loansList.map((loan) => {
        const labels = [
          'Nombre sucursal',
          'Fecha inicio del prestamo',
          'Fecha finalización del prestamo',
          'Monto',
        ]

        const itemList = Object.entries(loan).filter(
          (value) => value[0] !== 'id' && value[0] !== 'type',
        )

        return (
          <Loan
            key={loan.id}
            id={loan.id}
            type={loan.type}
            itemList={itemList}
            labels={labels}
          />
        )
      })}
    </>
  )
}
