import styles from './table.module.css'

export function Table({ header, data }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          {header.map((text) => (
            <td key={text} className={styles.bodyRow}>
              {text}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((value) => (
          <tr key={value.id}>
            {Object.keys(value).map((entry) => (
              <td key={value.id} className={styles.bodyRow}>
                {value[entry]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
