'use client'
import { ProveedorDatosUsuario } from '@/context/datosUsuarioContexto'
import './globals.css'

// export const metadata = {
//   title: 'Home - ITBANK',
//   description: 'Bienvenido a ITBANK, donde nuestra prioridad es garantizar la mejor experiencia para vos. Descubre una amplia gama de servicios bancarios en línea, confiables y fácil de usar, diseñada para todos. Confía en nosotros para cumplir tus metas financieras.',
//   keywords: 'homebanking, ITBANK, cuentas bancarias, tarjetas, transferencias, pagos, consulta de saldo, atención en línea, banca en línea, banca online, información financiera, seguridad, accesibilidad, banca segura en línea, gestión financiera en línea, movilidad, finanzas personales en línea, facturas, contacto, conversor de monedas, préstamos, calculador de préstamos, banco, movimientos, consultas financieras online'
// }

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body>
        <ProveedorDatosUsuario>
          {children}
        </ProveedorDatosUsuario>
      </body>
    </html>
  )
}
