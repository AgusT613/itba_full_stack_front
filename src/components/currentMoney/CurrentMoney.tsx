'use client'

import { useState } from 'react'
import styles from './currentMoney.module.css'

export default function CurrentMoney({ balance }: { balance: number }) {
  const [isVisibled, setVisibled] = useState<boolean>(false)
  const reveal = () => setVisibled((prevState) => !prevState)

  return (
    <article className={styles.container}>
      <span>$ {isVisibled ? balance : '***'}</span>
      <button
        type='button'
        onClick={reveal}
        className={isVisibled ? styles.visibled : styles.noVisibled}
      />
    </article>
  )
}
