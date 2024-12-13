import styles from './formMessage.module.css'

export default function FormMessage({ message, success }) {
  return (
    <div
      className={styles.messageContainer}
      style={{ color: `${success ? '#62cb62' : '#ff3355'}` }}
    >
      {message}
    </div>
  )
}
