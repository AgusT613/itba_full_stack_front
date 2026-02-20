'use client'

import { useState } from 'react'

import { USER } from '@/utils/userDataModel'

import styles from './currentMoney.module.css'

export default function CurrentMoney() {
  const [isVisibled, setVisibled] = useState<boolean>(false)

  const reveal = () => setVisibled((prevState) => !prevState)

  return (
    <article className={styles.container}>
      <span>$ {isVisibled ? USER.customer.balance : '***'}</span>
      <button
        type='button'
        onClick={reveal}
        className={isVisibled ? styles.visibled : styles.noVisibled}
      />
    </article>
  )
}
