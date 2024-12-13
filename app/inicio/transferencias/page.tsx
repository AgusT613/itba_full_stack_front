import styles from './page.module.css'

export const metadata = {
  title: 'Transferencias - ITBANK',
  description:
    'Realiza transferencias seguras y rápidas en línea con nuestro servicio de banca en línea. Confía en nuestra plataforma segura para gestionar tus transferencias bancarias de forma eficiente y proteger tu patrimonio financiero.',
}

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Realizar Transferencia</h2>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor='receiver' className={styles.label}>
              Receptor
            </label>
            <input
              id='receiver'
              type='text'
              name='receiver'
              className={styles.input}
              placeholder='Alias o CVU'
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='money' className={styles.label}>
              Monto
            </label>
            <input
              id='money'
              type='text'
              name='money'
              className={styles.input}
              placeholder='$1000'
            />
          </div>
          <input
            type='submit'
            className={styles.inputSubmit}
            value='Realizar Transferencia'
          />
        </form>
      </section>

      <section className={styles.wrapper}>
        <h2 className={styles.title}>Historial de Transferencias</h2>
        <form className={styles.form}>
          <div className={styles.inputDateWrapper}>
            <div className={styles.inputWrapper}>
              <label htmlFor='dateFrom' className={styles.label}>
                Desde
              </label>
              <input
                id='dateFrom'
                type='date'
                name='dateFrom'
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor='dateTo' className={styles.label}>
                Hasta
              </label>
              <input
                id='dateTo'
                type='date'
                name='dateTo'
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor='type' className={styles.label}>
              Tipo
            </label>
            <select id='type' name='type' className={styles.input}>
              <option value='text'>Realizadas</option>
              <option value='text'>Recibidas</option>
            </select>
          </div>
          <input type='submit' className={styles.inputSubmit} value='Filtrar' />
        </form>
      </section>
    </div>
  )
}
