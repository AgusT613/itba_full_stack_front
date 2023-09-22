import styles from './Transferencias.module.css'

export const Transferencias = () => {
  return (
    <div style={{ display: 'flex' }}>
      <section className={styles.transferencias}>
        <h2>Realizar transferencias</h2>
        <form className={styles.contenedorFormulario}>
          <div className={styles.contenedorDatos}>
            <label htmlFor='receptor' className={styles.contenedorDescripcionCampo}>Receptor</label>
            <input type='receptor' name='receptor' className={styles.contenedorInputCampo} placeholder='Cuenta, contacto, correo' />
          </div>
          <div className={styles.contenedorDatos}>
            <label htmlFor='monto' className={styles.contenedorDescripcionCampo}>Monto</label>
            <input type='text' name='monto' className={styles.contenedorInputCampo} placeholder='$$$' />
          </div>
          <input type='submit' className={styles.contenedorBotonEnviar} value='Enviar Dinero' />
        </form>
      </section>
      <section className={styles.transferencias}>
        <h2>Historial de transferencias</h2>
        <form action='#' className={styles.contenedorFormulario}>
          <div className={styles.contenedorDatos}>
            <label htmlFor='date' className={styles.contenedorDescripcionCampo}>Desde</label>
            <input type='date' name='fechaInicio' className={styles.contenedorInputCampo} />
          </div>
          <div className={styles.contenedorDatos}>
            <label htmlFor='date' className={styles.contenedorDescripcionCampo}>Hasta</label>
            <input type='date' name='fechaFin' className={styles.contenedorInputCampo} />
          </div>
          <div className={styles.contenedorDatos}>
            <label htmlFor='tipo' className={styles.contenedorDescripcionCampo}>Tipo</label>
            <select name='tipos' className={styles.contenedorInputCampo}>
              <option value='text'>Realizadas</option>
              <option value='text'>Recibidas</option>
            </select>
          </div>
          <input type='submit' className={styles.contenedorBotonEnviar} value='Buscar' />
        </form>
      </section>
    </div>
  )
}
