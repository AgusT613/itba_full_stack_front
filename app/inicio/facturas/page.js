import { datos } from '@/context/datosUsuario'
import Link from 'next/link'
import styles from '@/styles/Facturas.module.css'

export const metadata = {
  title: 'Facturas - ITBANK',
  description: 'Accede a tus facturas de manera rápida y segura. Consulta y descarga tus documentos financieros, verifica los detalles de tus transacciones y realiza un seguimiento de tus registros financieros con facilidad en nuestra plataforma bancaria.'
}

export default function Page () {
  const listaFacturas = datos.facturas
  return (
    <>
      <h2>Pantalla Facturas</h2>
      <section className={styles.contenedor_tabla}>
        <table className={styles.tabla_facturas}>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Descripcion</th>
              <th>Vencimiento</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {listaFacturas.map(factura => {
              const rutaDinamica = `/inicio/facturas/${factura.id}`
              return (
                <tr key={factura.id}>
                  <td>{factura.payee}</td>
                  <td className={styles.celda_descripcion}>
                    <Link key={factura.id} href={rutaDinamica}>
                      {factura.description}
                    </Link>
                  </td>
                  <td>{factura.dueDate}</td>
                  <td>${factura.amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  )
}
