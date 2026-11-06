'use client'

import Image from 'next/image'

import SectionDivider from '@/src/components/sectionDivider/SectionDivider'
import type { TUser } from '@/src/types/homebanking'
import { toCapitalize } from '@/utils/toCapitalize'
import { USER } from '@/utils/userDataModel'

export function UserProfile({ user }: { user: TUser }) {
  return (
    <SectionDivider className='col-span-full flex items-center gap-4 max-[400px]:p-2 max-[400px]:text-base'>
      <figure className='h-auto w-12 shrink-0'>
        <Image
          unoptimized
          width={48}
          height={48}
          className='h-full w-full rounded-full object-cover shadow-sm'
          src={USER.customer.img}
          alt='Su foto de perfil de usuario'
        />
      </figure>
      <h3 className='text-xl font-semibold text-white'>
        Bienvenido {toCapitalize(user.username)}!
      </h3>
    </SectionDivider>
  )
}
