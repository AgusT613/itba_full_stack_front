import Link from 'next/link'
import { ThemeToggle } from '@/src/components/theme/ThemeToggle'
import { getBranchOffices } from '@/src/lib/dataFetch'
import BranchOffices from './branchOffices/BranchOffices'
import FooterInfoContainer from './footerInfoContainer/FooterInfoContainer'
import NewsletterForm from './newsletterForm/NewsletterForm'

export default async function Footer() {
  const branchOffices = await getBranchOffices()

  return (
    <footer
      id='footer'
      className='bg-surface/50 border-t border-surface-border py-12 px-6 sm:px-12 md:px-16 flex flex-col gap-10 backdrop-blur-sm'
    >
      <article className='flex flex-col gap-2 text-center max-w-2xl mx-auto'>
        <p className='text-sm sm:text-base font-medium text-balance text-foreground/90'>
          ¡Gracias por confiar en ITBANK! Estamos comprometidos en hacer que tu
          experiencia en el mundo financiero sea más simple, transparente y
          conveniente.
        </p>
        <p className='text-xs sm:text-sm text-foreground/70'>
          Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
          contacto con nosotros.
        </p>
      </article>

      {branchOffices?.length > 0 && (
        <FooterInfoContainer
          title='Contactanos'
          description='De Lunes a Viernes de 8 a 20hs'
        >
          <BranchOffices branchOfficesList={branchOffices} />
        </FooterInfoContainer>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-4'>
        <FooterInfoContainer
          title='Suscribite'
          description='Enterate de todas las novedades y beneficios que tenemos para vos.'
        >
          <NewsletterForm />
        </FooterInfoContainer>

        <FooterInfoContainer
          title='Links Útiles'
          description='Descubre más acerca de nuestros servicios'
        >
          <div className='flex flex-wrap gap-2.5'>
            <Link
              href='/legal/faq'
              target='_blank'
              className='px-3.5 py-2 rounded-md bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-xs sm:text-sm font-medium transition-colors border border-surface-border'
            >
              Preguntas frecuentes
            </Link>
            <Link
              href='/legal/privacidad'
              target='_blank'
              className='px-3.5 py-2 rounded-md bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-xs sm:text-sm font-medium transition-colors border border-surface-border'
            >
              Privacidad
            </Link>
            <Link
              href='/legal/terminos'
              target='_blank'
              className='px-3.5 py-2 rounded-md bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 text-xs sm:text-sm font-medium transition-colors border border-surface-border'
            >
              Términos y Condiciones
            </Link>
          </div>
        </FooterInfoContainer>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between border-t border-surface-border pt-6 gap-4'>
        <p className='text-xs text-foreground/60'>
          © {new Date().getFullYear()} ITBANK S.A. Todos los derechos
          reservados.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
