import styles from './userAction.module.css'

export default function UserAction({ actionName, className }) {
  return (
    <div className={styles.container}>
      <span className={`${styles.icon} ${className}`} />
      <p className={styles.text}>{actionName}</p>
    </div>
  )
}
