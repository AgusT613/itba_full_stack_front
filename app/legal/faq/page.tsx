import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'

export default function Page() {
  return (
    <div className='max-w-4xl mx-auto p-6 sm:p-10 my-8 bg-surface rounded-2xl border border-surface-border shadow-lg flex flex-col gap-8'>
      <header className='text-center flex flex-col gap-2'>
        <h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>
          Preguntas Frecuentes (FAQ)
        </h1>
        <p className='text-sm text-foreground/70'>
          Respuestas a las dudas más comunes sobre la plataforma ITBANK y sus
          servicios
        </p>
      </header>

      <section className='flex flex-col gap-4'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Plataforma y Acceso
        </h2>
        <Accordion type='multiple' className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Qué es la plataforma de Homebanking?
            </AccordionTrigger>
            <AccordionContent>
              Homebanking es un servicio en línea que le permite realizar
              operaciones bancarias a través de Internet. Desde consultar saldos
              y movimientos hasta realizar transferencias y pagar servicios,
              todo desde la comodidad de su hogar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Cómo puedo acceder a mi cuenta?
            </AccordionTrigger>
            <AccordionContent>
              Puede acceder a su cuenta ingresando su nombre de usuario y
              contraseña a través de nuestra plataforma. Si aún no tiene una
              cuenta, puede registrarse fácilmente en la página de inicio.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Es seguro utilizar la plataforma?
            </AccordionTrigger>
            <AccordionContent>
              Sí, tomamos muy en serio la seguridad de su información.
              Utilizamos protocolos de encriptación y autenticación de dos
              factores para proteger su cuenta y datos personales.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-4'>
            <AccordionTrigger className='text-base text-primary-300'>
              He olvidado mi contraseña. ¿Qué debo hacer?
            </AccordionTrigger>
            <AccordionContent>
              Si ha olvidado su contraseña, haga clic en el enlace &quot;Olvidé
              mi contraseña&quot; en la página de inicio de sesión. Le
              enviaremos instrucciones para restablecer su contraseña de forma
              segura.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className='flex flex-col gap-4'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Operaciones y Servicios
        </h2>
        <Accordion type='multiple' className='w-full'>
          <AccordionItem value='item-ops-1'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Cómo puedo hacer una transferencia bancaria?
            </AccordionTrigger>
            <AccordionContent>
              Para realizar una transferencia, ingrese a la sección
              &quot;Transferencias&quot; de la plataforma, elija el
              destinatario, ingrese el monto y confirme la operación. Puede
              transferir entre cuentas dentro del mismo banco o a cuentas de
              otros bancos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-ops-2'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Puedo pagar servicios a través de la plataforma?
            </AccordionTrigger>
            <AccordionContent>
              Sí, ofrecemos la opción de pagar varios servicios como
              electricidad, agua, internet, y más. Solo debe seleccionar el
              servicio, ingresar el monto y confirmar el pago.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-ops-3'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Cómo puedo ver el historial de mis transacciones?
            </AccordionTrigger>
            <AccordionContent>
              El historial de sus transacciones está disponible en la sección
              &quot;Movimientos&quot; de su cuenta. Allí podrá consultar todos
              los pagos, transferencias y otras operaciones realizadas desde su
              cuenta.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className='flex flex-col gap-4'>
        <h2 className='text-xl sm:text-2xl font-semibold border-b border-surface-border pb-2'>
          Soporte y Seguridad
        </h2>
        <Accordion type='multiple' className='w-full'>
          <AccordionItem value='item-sup-1'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Cómo puedo contactar con el soporte al cliente?
            </AccordionTrigger>
            <AccordionContent>
              Si necesita ayuda, puede contactar con nuestro equipo de soporte a
              través de la sección &quot;Ayuda&quot; en la plataforma, o bien
              enviándonos un correo electrónico a soporte@suempresa.com.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-sup-2'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Hay algún teléfono de contacto?
            </AccordionTrigger>
            <AccordionContent>
              Sí, puede llamarnos al +34 900 123 456 de lunes a viernes, de 9:00
              AM a 6:00 PM, y estaremos encantados de asistirle.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-sup-3'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Cómo puedo actualizar mis datos personales?
            </AccordionTrigger>
            <AccordionContent>
              Para actualizar su información personal, ingrese a la sección
              &quot;Mi Perfil&quot; dentro de la plataforma y edite los campos
              correspondientes. Asegúrese de guardar los cambios para que se
              actualicen correctamente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-sup-4'>
            <AccordionTrigger className='text-base text-primary-300'>
              ¿Qué sucede si detecto una transacción no autorizada?
            </AccordionTrigger>
            <AccordionContent>
              Si detecta una transacción no autorizada en su cuenta, le
              recomendamos que nos contacte inmediatamente a través de la
              sección de soporte o al correo electrónico para que podamos
              investigar el problema y tomar las medidas adecuadas.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
