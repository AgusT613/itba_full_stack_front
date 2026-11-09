export default function Page() {
  return (
    <div className='max-w-4xl mx-auto p-6 sm:p-10 my-8 bg-surface rounded-2xl border border-surface-border shadow-lg flex flex-col gap-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center tracking-tight'>
        Política de Privacidad
      </h1>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Introducción
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Esta Política de Privacidad describe cómo recopilamos, usamos y
          protegemos su información personal cuando utiliza nuestra plataforma
          de homebanking. Al acceder y usar nuestra plataforma, usted acepta las
          prácticas descritas en esta política.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Información que Recopilamos
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Recopilamos información personal de nuestros usuarios con el fin de
          ofrecer un servicio más personalizado y seguro. Esto incluye:
        </p>
        <ul className='list-disc list-inside space-y-1 text-sm text-foreground/80'>
          <li>
            Información de identificación, como nombre, correo electrónico,
            dirección y número de teléfono.
          </li>
          <li>
            Información financiera, como números de cuenta y detalles de
            transacciones.
          </li>
          <li>Datos de acceso, como nombre de usuario y contraseñas.</li>
          <li>
            Información técnica, como dirección IP, tipo de dispositivo y
            cookies.
          </li>
        </ul>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Uso de la Información
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Utilizamos su información personal para los siguientes fines:
        </p>
        <ul className='list-disc list-inside space-y-1 text-sm text-foreground/80'>
          <li>
            Proveer nuestros servicios de homebanking y facilitar la gestión de
            su cuenta.
          </li>
          <li>
            Mejorar nuestra plataforma y personalizar su experiencia de usuario.
          </li>
          <li>Realizar transacciones y procesar pagos de manera segura.</li>
          <li>
            Enviarle comunicaciones relacionadas con su cuenta y actualizaciones
            importantes.
          </li>
        </ul>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Protección de la Información
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          La seguridad de su información es nuestra prioridad. Implementamos
          medidas técnicas y organizativas para proteger su información personal
          de accesos no autorizados, divulgación, alteración o destrucción. Sin
          embargo, ningún sistema es completamente seguro y no podemos
          garantizar una protección absoluta.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Cookies
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Utilizamos cookies para mejorar su experiencia en nuestra plataforma.
          Las cookies nos permiten recordar su configuración y preferencias.
          Usted puede controlar el uso de cookies desde su navegador, pero
          deshabilitar ciertas cookies puede afectar el funcionamiento de la
          plataforma.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Compartición de Información
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          No compartimos su información personal con terceros, salvo cuando sea
          necesario para cumplir con los fines descritos en esta política o
          cuando sea requerido por la ley. Podemos compartir su información con
          proveedores de servicios de confianza que nos ayuden a operar la
          plataforma.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Sus Derechos
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Usted tiene derecho a acceder, corregir o eliminar su información
          personal que tenemos en nuestros registros. Si desea ejercer estos
          derechos, puede ponerse en contacto con nosotros en cualquier momento
          a través de los canales indicados en nuestra página de contacto.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Cambios en esta Política
        </h2>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Podemos actualizar esta Política de Privacidad ocasionalmente.
          Cualquier cambio se publicará en esta página, y la fecha de la última
          actualización será indicada al final del documento. Le recomendamos
          que revise esta política regularmente para estar informado sobre cómo
          protegemos su información.
        </p>
      </section>
    </div>
  )
}
