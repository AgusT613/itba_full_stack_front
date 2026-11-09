import { BANK_RESOURCES } from '@/utils/userDataModel'
import BankResourceContainer from './bankResourceContainer/BankResourceContainer'

export default function BankResourceWrapper() {
  return (
    <section className='py-8' id='resources'>
      <h4 className='py-4 text-center text-2xl font-bold text-foreground'>
        ¿Qué estas buscando?
      </h4>
      <article className='p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {BANK_RESOURCES.map((resource) => (
          <BankResourceContainer
            resourceList={resource}
            key={resource.description}
          />
        ))}
      </article>
    </section>
  )
}
