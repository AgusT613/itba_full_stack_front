export default function Page() {
  return (
    <div className='max-w-4xl mx-auto p-6 sm:p-10 my-8 bg-surface rounded-2xl border border-surface-border shadow-lg flex flex-col gap-8'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center tracking-tight'>
        Preguntas Frecuentes (FAQ)
      </h1>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          ¿Qué es Homebanking?
        </h2>
        <h3 className='text-base font-medium text-primary-300'>
          ¿Qué es la plataforma de Homebanking?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Homebanking es un servicio en línea que le permite realizar
          operaciones bancarias a través de Internet. Desde consultar saldos y
          movimientos hasta realizar transferencias y pagar servicios, todo
          desde la comodidad de su hogar.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Acceso y Seguridad
        </h2>
        <h3 className='text-base font-medium text-primary-300'>
          ¿Cómo puedo acceder a mi cuenta?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Puede acceder a su cuenta ingresando su nombre de usuario y contraseña
          a través de nuestra plataforma. Si aún no tiene una cuenta, puede
          registrarse fácilmente en la página de inicio.
        </p>

        <h3 className='text-base font-medium text-primary-300'>
          ¿Es seguro utilizar la plataforma?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Sí, tomamos muy en serio la seguridad de su información. Utilizamos
          protocolos de encriptación y autenticación de dos factores para
          proteger su cuenta y datos personales.
        </p>

        <h3 className='text-base font-medium text-primary-300'>
          He olvidado mi contraseña. ¿Qué debo hacer?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Si ha olvidado su contraseña, haga clic en el enlace &quot;Olvidé mi
          contraseña&quot; en la página de inicio de sesión. Le enviaremos
          instrucciones para restablecer su contraseña de forma segura.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Operaciones y Funcionalidades
        </h2>
        <h3 className='text-base font-medium text-primary-300'>
          ¿Cómo puedo hacer una transferencia bancaria?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Para realizar una transferencia, ingrese a la sección
          &quot;Transferencias&quot; de la plataforma, elija el destinatario,
          ingrese el monto y confirme la operación. Puede transferir entre
          cuentas dentro del mismo banco o a cuentas de otros bancos.
        </p>

        <h3 className='text-base font-medium text-primary-300'>
          ¿Puedo pagar servicios a través de la plataforma?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Sí, ofrecemos la opción de pagar varios servicios como electricidad,
          agua, internet, y más. Solo debe seleccionar el servicio, ingresar el
          monto y confirmar el pago.
        </p>

        <h3 className='text-base font-medium text-primary-300'>
          ¿Cómo puedo ver el historial de mis transacciones?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          El historial de sus transacciones está disponible en la sección
          &quot;Movimientos&quot; de su cuenta. Allí podrá consultar todos los
          pagos, transferencias y otras operaciones realizadas desde su cuenta.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Soporte y Ayuda
        </h2>
        <h3 className='text-base font-medium text-primary-300'>
          ¿Cómo puedo contactar con el soporte al cliente?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Si necesita ayuda, puede contactar con nuestro equipo de soporte a
          través de la sección &quot;Ayuda&quot; en la plataforma, o bien
          enviándonos un correo electrónico a soporte@suempresa.com.
        </p>

        <h3 className='text-base font-medium text-primary-300'>
          ¿Hay algún teléfono de contacto?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Sí, puede llamarnos al +34 900 123 456 de lunes a viernes, de 9:00 AM
          a 6:00 PM, y estaremos encantados de asistirle.
        </p>
      </section>

      <section className='flex flex-col gap-3'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-white/20 pb-2'>
          Otras Preguntas
        </h2>
        <h3 className='text-base font-medium text-primary-300'>
          ¿Cómo puedo actualizar mis datos personales?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Para actualizar su información personal, ingrese a la sección &quot;Mi
          Perfil&quot; dentro de la plataforma y edite los campos
          correspondientes. Asegúrese de guardar los cambios para que se
          actualicen correctamente.
        </p>

        <h3 className='text-base font-medium text-primary-300'>
          ¿Qué sucede si detecto una transacción no autorizada?
        </h3>
        <p className='text-sm text-foreground/80 leading-relaxed'>
          Si detecta una transacción no autorizada en su cuenta, le recomendamos
          que nos contacte inmediatamente a través de la sección de soporte o al
          correo electrónico para que podamos investigar el problema y tomar las
          medidas adecuadas.
        </p>
      </section>
    </div>
  )
}
