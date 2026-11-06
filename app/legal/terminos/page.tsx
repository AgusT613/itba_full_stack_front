export default function Page() {
  return (
    <div className='max-w-4xl mx-auto p-6 sm:p-10 my-8 bg-surface rounded-2xl border border-surface-border shadow-lg flex flex-col gap-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center tracking-tight'>
        Términos y Condiciones
      </h1>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Introducción
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Estos términos y condiciones rigen el uso de nuestra plataforma de
          homebanking. Al acceder o utilizar la plataforma, usted acepta cumplir
          con estos términos. Si no está de acuerdo, no utilice la plataforma.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Elegibilidad
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Debe tener al menos 18 años para usar nuestros servicios. Al aceptar
          estos términos, confirma que cumple con este requisito de
          elegibilidad.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Cuenta de Usuario
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Para usar nuestros servicios, debe crear una cuenta. Usted es
          responsable de mantener la confidencialidad de sus credenciales de
          acceso.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Responsabilidades
        </h2>
        <ul className='list-disc list-inside space-y-1 text-sm text-foreground/80'>
          <li>Usted es responsable de toda actividad en su cuenta.</li>
          <li>
            Notifique inmediatamente si sospecha de un acceso no autorizado a su
            cuenta.
          </li>
          <li>
            Siga todas las leyes y regulaciones aplicables mientras utiliza la
            plataforma.
          </li>
        </ul>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Privacidad y Protección de Datos
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Nos tomamos su privacidad muy en serio. Sus datos personales solo se
          utilizarán de acuerdo con nuestra política de privacidad. Por favor,
          revísela para entender cómo recopilamos, usamos y protegemos sus
          datos.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Limitación de Responsabilidad
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          No somos responsables de ningún daño directo o indirecto derivado del
          uso o la imposibilidad de usar la plataforma. Utilice la plataforma
          bajo su propio riesgo.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Cambios en los Términos
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Podemos actualizar estos términos de vez en cuando. Cualquier cambio
          será comunicado a usted, y su uso continuo de la plataforma
          constituirá la aceptación de los términos actualizados.
        </p>
      </section>
    </div>
  )
}
