'use client'

import styles from './loan.module.css'

export default function Loan({ labels, itemList, id, type }) {
  const handleDeleteLoan = (loanId) => loanId

  return (
    <article className={styles.card}>
      <h3 className={styles.h3}>Prestamo {type}</h3>

      {itemList.map((item, index) =>
        item[0] === 'amount' ? (
          <strong key={item[0]} className={styles.strong}>
            {labels[index]}: ${item[1]}
          </strong>
        ) : (
          <p key={item[0]}>
            <strong>{labels[index]}:</strong> {item[1]}
          </p>
        ),
      )}

      <button
        type='button'
        className={styles.deleteBtn}
        onClick={() => handleDeleteLoan(id)}
      >
        Dar de Baja
      </button>
    </article>
  )
}
