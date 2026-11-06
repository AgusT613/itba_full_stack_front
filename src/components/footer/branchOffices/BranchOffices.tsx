import type { TBranchOffice } from '@/src/types/branchOffice'

export default async function BranchOffices({
  branchOfficesList,
}: {
  branchOfficesList: TBranchOffice[]
}) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {branchOfficesList.map((contact) => (
        <li
          key={contact.id ?? contact.name}
          className='border border-surface-border rounded-lg bg-black/20 p-4 text-sm flex flex-col gap-1'
        >
          <h6 className='font-semibold uppercase text-xs tracking-wider text-primary-300'>
            {contact.name}
          </h6>
          <span className='text-foreground/90'>{contact.address}</span>
          <span className='text-xs text-foreground/60'>{contact.contact}</span>
        </li>
      ))}
    </ul>
  )
}
