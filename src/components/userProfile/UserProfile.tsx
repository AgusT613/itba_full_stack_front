'use client'

import Image from 'next/image'

import SectionDivider from '@/src/components/sectionDivider/SectionDivider'
import { USER } from '@/utils/userDataModel'

import styles from './userProfile.module.css'

export function UserProfile() {
  const welcome = `Bienvenido ${USER.customer.name} ${USER.customer.lastName}!`

  return (
    <SectionDivider className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image
          unoptimized
          width={25}
          height={25}
          className={styles.image}
          src={USER.customer.img}
          alt='Su foto de perfil de usuario'
        />
      </figure>
      <h3>{welcome}</h3>
    </SectionDivider>
  )
}
