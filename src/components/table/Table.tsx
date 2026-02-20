import Link from 'next/link'

import { ITable } from '@/src/types/table'

import styles from './table.module.css'

export function Table({ header, data, itemLink }: ITable) {
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
            {Object.keys(value).map((entry) => {
              if (itemLink?.matchHeader === entry) {
                return (
                  <td
                    className={`${styles.bodyRow} ${styles.link}`}
                    key={value[entry]}
                  >
                    <Link href={itemLink.href + value.id}>{value[entry]}</Link>
                  </td>
                )
              }

              return (
                <td key={value[entry]} className={styles.bodyRow}>
                  {value[entry]}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
