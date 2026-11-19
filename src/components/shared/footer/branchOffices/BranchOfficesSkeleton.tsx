import FooterInfoContainer from '../footerInfoContainer/FooterInfoContainer'

export default function BranchOfficesSkeleton() {
  return (
    <FooterInfoContainer
      title='Contactanos'
      description='De Lunes a Viernes de 8 a 20hs'
    >
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[1, 2, 3].map((item) => (
          <li
            key={item}
            className='border border-surface-border rounded-lg bg-surface-card p-4 text-sm flex flex-col gap-2.5 shadow-sm animate-pulse'
          >
            <div className='h-3.5 w-3/5 bg-surface-border/80 rounded' />
            <div className='h-3 w-4/5 bg-surface-border/60 rounded' />
            <div className='h-3 w-2/5 bg-surface-border/40 rounded' />
          </li>
        ))}
      </ul>
    </FooterInfoContainer>
  )
}
