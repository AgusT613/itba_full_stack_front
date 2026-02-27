import { cache } from 'react'
import {
  ACCOUNTS_ENDPOINT,
  BRANCH_OFFICES_ENDPOINT,
  CARDS_ENDPOINT,
  HOMEBANKING_ENDPOINT,
} from '@/utils/apiEndpoints'
import { cookies } from 'next/headers'
import { HomeBankingData, TCard, TUserBankAccount } from '../types/homebanking'
import { TBranchOffice } from '../types/branchOffice'
import { isServerAlive } from './pingServer'
import { getSessionToken } from './getSessionToken'

export const getHomebankingData = cache(async (): Promise<HomeBankingData> => {
  const token = await getSessionToken()
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
  const token = await getSessionToken()
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

export const getAccounts = cache(async (): Promise<TUserBankAccount[]> => {
  const token = await getSessionToken()
  const res = await fetch(ACCOUNTS_ENDPOINT.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch accounts data')
  }

  return res.json()
})
