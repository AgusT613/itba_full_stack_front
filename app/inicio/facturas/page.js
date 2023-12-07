'use client'
import Link from 'next/link'
import styles from '@/styles/Facturas.module.css'
import { useContext, useEffect, useState } from 'react'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { FACTURAS_USER_API, obtenerListado } from '@/context/services'

// export const metadata = {
//   title: 'Facturas - ITBANK',
//   description: 'Accede a tus facturas de manera rápida y segura. Consulta y descarga tus documentos financieros, verifica los detalles de tus transacciones y realiza un seguimiento de tus registros financieros con facilidad en nuestra plataforma bancaria.'
// }

export default function Page () {
  const [listaFacturas, setListaFacturas] = useState([])
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, FACTURAS_USER_API, username, password)
      .then(facturas => setListaFacturas(facturas))
      .catch(error => console.log(error))
  }, [])

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
                  <td>{factura.empresa}</td>
                  <td className={styles.celda_descripcion}>
                    <Link key={factura.id} href={rutaDinamica}>
                      {factura.descripcion}
                    </Link>
                  </td>
                  <td>{factura.vencimiento}</td>
                  <td>${factura.monto}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  )
}
