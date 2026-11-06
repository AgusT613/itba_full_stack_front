import AutoImagesCarrousel from '@/src/components/autoImagesCarrousel/AutoImagesCarrousel'

export default function Hero() {
  return (
    <section className='min-h-[80vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2'>
      <article className='bg-gradient-to-t from-black/60 to-transparent p-6 sm:p-12 flex flex-col items-center justify-center gap-6 text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight'>
          Banco Online ITBANK
        </h1>
        <div className='flex flex-col items-center gap-1'>
          <h2 className='text-2xl sm:text-3xl font-semibold opacity-90'>
            Homebanking
          </h2>
          <span className='text-xs sm:text-sm opacity-80'>
            Tu banco al alcance de tu celular
          </span>
        </div>
        <p className='text-xs sm:text-sm leading-relaxed max-w-lg text-balance text-foreground/90 font-light'>
          Nos enorgullece brindarte una experiencia bancaria en línea que es
          conveniente, segura y fácil de usar. Nuestro portal de Homebanking
          está diseñado para ofrecerte un acceso completo y personalizado a tus
          cuentas financieras, permitiéndote administrar tus finanzas desde la
          comodidad de tu hogar o cualquier lugar donde te encuentres.
        </p>
      </article>

      <figure className='w-full h-64 sm:h-96 lg:h-full overflow-hidden'>
        <AutoImagesCarrousel />
      </figure>
    </section>
  )
}
