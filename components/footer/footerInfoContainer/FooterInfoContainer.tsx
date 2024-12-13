import styles from '@/components/footer/footerInfoContainer/footerInfoContainer.module.css'

export default function FooterInfoContainer({
  title,
  description,
  children,
  className,
}) {
  return (
    <div className={className}>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
      {children}
    </div>
  )
}
