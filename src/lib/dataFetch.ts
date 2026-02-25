import { cache } from 'react'
import {
  BRANCH_OFFICES_ENDPOINT,
  CARDS_ENDPOINT,
  HOMEBANKING_ENDPOINT,
} from '@/utils/apiEndpoints'
import { cookies } from 'next/headers'
import { HomeBankingData, TCard } from '../types/homebanking'
import { TBranchOffice } from '../types/branchOffice'
import { isServerAlive } from './pingServer'

export const getHomebankingData = cache(async (): Promise<HomeBankingData> => {
  const token = (await cookies()).get('session_token').value
  const res = await fetch(HOMEBANKING_ENDPOINT.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch homebanking data')
  }

  return res.json()
})

export const getBranchOffices = cache(
  async (): Promise<TBranchOffice[] | null> => {
    if (await isServerAlive()) {
      const res = await fetch(BRANCH_OFFICES_ENDPOINT.toString())

      if (!res.ok) {
        throw new Error('Failed to fetch branch offices data')
      }

      return res.json()
    }

    return new Promise((resolve) => resolve(null))
  },
)

export const getCards = cache(async (): Promise<TCard[]> => {
  const token = (await cookies()).get('session_token').value
  const res = await fetch(CARDS_ENDPOINT.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch cards data')
  }

  return res.json()
})
