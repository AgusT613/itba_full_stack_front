export type TLoan = {
  id: number
  branch_office_id: number
  user_id: number
  user_account_id: number
  loan_type: string
  start_date: string
  due_date: number
  amount: number
  status: string
  interest_rate: number
  total_repayment: number
  total_installments: number
  remaining_installments: number
}
