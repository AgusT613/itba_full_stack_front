import { cache } from 'react'
import { api } from '@/src/lib/api/client'
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

export const getHomebankingData = cache(async (): Promise<HomeBankingData> => {
  const { data, error } = await api.GET('/api/homebanking/')

  if (error || !data) {
    throw new Error('Failed to fetch homebanking data')
  }

  return data as unknown as HomeBankingData
})

export const getBranchOffices = cache(
  async (): Promise<TBranchOffice[] | null> => {
    try {
      const { data, error } = await api.GET('/api/itbank/branch-offices')

      if (error || !data) {
        return null
      }

      return data as unknown as TBranchOffice[]
    } catch {
      return null
    }
  },
)

export const getCards = cache(async (): Promise<TCard[]> => {
  const { data, error } = await api.GET('/api/homebanking/cards/')

  if (error || !data) {
    throw new Error('Failed to fetch cards data')
  }

  return data as unknown as TCard[]
})

export const getAccounts = cache(async (): Promise<TUserBankAccount[]> => {
  const { data, error } = await api.GET('/api/homebanking/accounts/')

  if (error || !data) {
    throw new Error('Failed to fetch accounts data')
  }

  return data as unknown as TUserBankAccount[]
})

export const getAccountById = cache(
  async (accountId: string): Promise<TUserBankAccount> => {
    const { data, error } = await api.GET('/api/homebanking/accounts/by/', {
      params: {
        query: { acc_id: Number(accountId) },
      },
    })

    if (error || !data) {
      throw new Error(`Failed to fetch account with id ${accountId}`)
    }

    return data as unknown as TUserBankAccount
  },
)

export const getAccountAliases = cache(async (): Promise<TAccountAlias[]> => {
  const { data, error } = await api.GET('/api/homebanking/alias/all')

  if (error || !data) {
    throw new Error('Failed to fetch account aliases')
  }

  return data as unknown as TAccountAlias[]
})

export const getUserSavedAliases = cache(
  async (): Promise<TUserSavedAlias[]> => {
    const { data, error } = await api.GET('/api/homebanking/alias/save')

    if (error || !data) {
      throw new Error('Failed to fetch user saved aliases')
    }

    return data as unknown as TUserSavedAlias[]
  },
)

export const getTransfers = cache(async (): Promise<TTransferHistory[]> => {
  const { data, error } = await api.GET('/api/homebanking/transfers/')

  if (error || !data) {
    throw new Error('Failed to fetch transfers data')
  }

  return data as unknown as TTransferHistory[]
})

export const getLoans = cache(async (): Promise<TLoan[]> => {
  const { data, error } = await api.GET('/api/homebanking/loans/')

  if (error || !data) {
    throw new Error('Failed to fetch loans data')
  }

  return data as unknown as TLoan[]
})
