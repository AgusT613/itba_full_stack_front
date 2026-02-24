import { cache } from 'react'
import { HOMEBANKING_ENDPOINT } from '@/utils/apiEndpoints'
import { cookies } from 'next/headers'
import { HomeBankingData } from '../types/homebanking'

export const getHomebankingData = cache(async (): Promise<HomeBankingData> => {
  const token = (await cookies()).get('session_token').value
  const res = await fetch(HOMEBANKING_ENDPOINT.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch account data')
  }

  return res.json()
})
