import { cache } from 'react'
import {
  ACCOUNTS_ENDPOINT,
  ALIAS_ENDPOINT,
  BRANCH_OFFICES_ENDPOINT,
  CARDS_ENDPOINT,
  HOMEBANKING_ENDPOINT,
  LOANS_ENDPOINT,
  TRANSFERS_ENDPOINT,
} from '@/utils/apiEndpoints'
import type { TAccountAlias } from '../types/alias'
import type { TBranchOffice } from '../types/branchOffice'
import type {
  HomeBankingData,
  TCard,
  TUserBankAccount,
} from '../types/homebanking'
import type { TLoan } from '../types/loan'
import type { TTransferHistory } from '../types/transferHistory'
import type { TUserSavedAlias } from '../types/userSavedAlias'
import { getSessionToken } from './getSessionToken'
import { isServerAlive } from './pingServer'

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

export const getAccountById = cache(
  async (accountId: string): Promise<TUserBankAccount> => {
    const token = await getSessionToken()
    const res = await fetch(
      `${ACCOUNTS_ENDPOINT.toString()}/by/?acc_id=${accountId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return res.json()
  },
)

export const getAccountAliases = cache(async (): Promise<TAccountAlias[]> => {
  const token = await getSessionToken()
  const res = await fetch(`${ALIAS_ENDPOINT.toString()}/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch account aliases')
  }

  return res.json()
})

export const getUserSavedAliases = cache(
  async (): Promise<TUserSavedAlias[]> => {
    const token = await getSessionToken()
    const res = await fetch(`${ALIAS_ENDPOINT.toString()}/save`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    // TODO: Add "if (!res.ok)" check server error

    return res.json()
  },
)

export const getTransfers = cache(async (): Promise<TTransferHistory[]> => {
  const token = await getSessionToken()
  const res = await fetch(TRANSFERS_ENDPOINT.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch transfers data')
  }

  return res.json()
})

export const getLoans = cache(async (): Promise<TLoan[]> => {
  const token = await getSessionToken()
  const res = await fetch(LOANS_ENDPOINT.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch loans data')
  }

  return res.json()
})
