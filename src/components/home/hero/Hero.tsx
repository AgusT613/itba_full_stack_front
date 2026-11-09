import Link from 'next/link'
import AutoImagesCarrousel from '@/src/components/autoImagesCarrousel/AutoImagesCarrousel'

export default function Hero() {
  return (
    <section
      id='init'
      className='min-h-[80vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 border-b border-surface-border bg-surface/40 backdrop-blur-xs'
    >
      <article className='p-6 sm:p-12 flex flex-col items-center justify-center gap-6 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground'>
          Banco Online ITBANK
        </h1>
        <div className='flex flex-col items-center gap-1'>
          <h2 className='text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-300'>
            Homebanking
          </h2>
          <span className='text-xs sm:text-sm text-foreground/80 font-medium'>
            Tu banco al alcance de tu celular
          </span>
        </div>
        <p className='text-xs sm:text-sm leading-relaxed max-w-lg text-balance text-foreground/80 font-normal'>
          Nos enorgullece brindarte una experiencia bancaria en línea que es
          conveniente, segura y fácil de usar. Nuestro portal de Homebanking
          está diseñado para ofrecerte un acceso completo y personalizado a tus
          cuentas financieras, permitiéndote administrar tus finanzas desde la
          comodidad de tu hogar o cualquier lugar donde te encuentres.
        </p>
        <Link
          href='/inicio'
          className='inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold transition-all hover:scale-105 shadow-md'
        >
          Ingresar a Homebanking
        </Link>
      </article>

      <figure className='w-full h-64 sm:h-96 lg:h-full overflow-hidden'>
        <AutoImagesCarrousel />
      </figure>
    </section>
  )
}
