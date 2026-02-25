import styles from '@/src/components/home/bankResources/bankResourceContainer/bankResourceContainer.module.css'

export default function BankResourceContainer({ resourceList }) {
  const { title, description, href, icon } = resourceList

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <span className={styles.icon}>{icon}</span>
        <h5 className={styles.title}>{title}</h5>
      </div>
      <p className={styles.description}>{description}</p>
      <a href={href} className={styles.moreInfoLink}>
        <span>Conocer Más</span>
        <span>+</span>
      </a>
    </div>
  )
}
