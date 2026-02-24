export type TUser = {
  username: string
  email: string
  full_name: string
}

export type TUserBankAccount = {
  account_number: string
  account_type: string
  description: string
  balance: number
  id: number
  user_id: number
}

export type TCard = {
  id: number
  account_id: number
  card_type: string
  last_four: string
  card_holder_name: string
  expiration_date: string
  brand: string
  status: string
}

export type TTransfer = {
  id: number
  receiver_username: string
  balance: number
  transfer_date: string
}

export type HomeBankingData = {
  user: TUser
  itbank_account: TUserBankAccount
  cards: TCard[]
  transfers: TTransfer[]
}
