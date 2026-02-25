'use client'

import Image from 'next/image'

import SectionDivider from '@/src/components/sectionDivider/SectionDivider'
import { USER } from '@/utils/userDataModel'

import styles from './userProfile.module.css'
import { TUser } from '@/src/types/homebanking'
import { toCapitalize } from '@/utils/toCapitalize'

export function UserProfile({ user }: { user: TUser }) {
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
      <h3>Bienvenido {toCapitalize(user.username)}!</h3>
    </SectionDivider>
  )
}
