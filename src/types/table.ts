import { TTransfer } from './homebanking'

interface IBillPayment {
  id: number
  recipient: string
  description: string
  expirationDate: string
  amount: number
}

interface IPaymentRecords {
  id: string
  service: string
  amount: number
  paymentDate: string
}

export interface ITable {
  header: string[]
  data: IBillPayment[] | IPaymentRecords[] | TTransfer[]
  itemLink?: {
    matchHeader: string
    href: string
  }
}
