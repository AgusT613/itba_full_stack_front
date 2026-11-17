import Image, { type StaticImageData } from 'next/image'

export interface IBankAction {
  title: string
  description: string
  btn: string
  href: string
  image: StaticImageData | string
  alt: string
}

export default function BankActionContainer({
  bankAction,
  index,
}: {
  bankAction: IBankAction
  index?: number
}) {
  const { title, description, btn, href, image, alt } = bankAction
  const isReversed = index !== undefined && index % 2 !== 0

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-center bg-surface-card/60 backdrop-blur-sm border-b border-surface-border overflow-hidden ${
        isReversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className='relative h-64 md:h-72 w-full'>
        <Image
          src={image}
          alt={alt}
          className='w-full h-full object-cover'
          fill
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </div>
      <div className='p-8 md:p-12 flex flex-col items-start gap-4'>
        <h4 className='text-2xl font-bold tracking-tight text-foreground'>
          {title}
        </h4>
        <span className='text-sm text-foreground/80 leading-relaxed text-balance'>
          {description}
        </span>
        <a
          href={href}
          className='px-6 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-transform hover:scale-105 shadow-md mt-2'
        >
          {btn}
        </a>
      </div>
    </div>
  )
}
