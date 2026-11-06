import { BANK_ACTIONS } from '@/utils/userDataModel'
import BankActionContainer from './bankActionContainer/BankActionContainer'

export default function BankActionWrapper() {
  return (
    <section className='flex flex-col' id='actions'>
      {BANK_ACTIONS.map((action, index) => (
        <BankActionContainer
          bankAction={action}
          index={index}
          key={action.description}
        />
      ))}
    </section>
  )
}
