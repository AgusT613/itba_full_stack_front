export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const PUBLIC_ENDPOINT = new URL('/api/itbank/', BASE_URL)
export const BRANCH_OFFICES_ENDPOINT = new URL(
  'branch-offices',
  PUBLIC_ENDPOINT,
)

export const HOMEBANKING_ENDPOINT = new URL('/api/homebanking/', BASE_URL)
export const CURRENT_USER_ENDPOINT = new URL('me', HOMEBANKING_ENDPOINT)
export const ACCOUNTS_ENDPOINT = new URL('accounts', HOMEBANKING_ENDPOINT)
export const TRANSFERS_ENDPOINT = new URL('transfers', HOMEBANKING_ENDPOINT)
export const CARDS_ENDPOINT = new URL('cards', HOMEBANKING_ENDPOINT)
export const LOANS_ENDPOINT = new URL('loans', HOMEBANKING_ENDPOINT)

export const AUTH_ENDPOINT = new URL('/api/auth/', BASE_URL)
export const LOGIN_USER_ENDPOINT = new URL('token', AUTH_ENDPOINT)
export const REGISTER_USER_ENDPOINT = new URL('register', AUTH_ENDPOINT)
