import styles from '@/components/bankActionContainer/bankActionContainer.module.css'
import Image from 'next/image'

export default function BankActionContainer({ bankAction }) {
  const { title, description, btn, href, image, alt } = bankAction

  return (
    <>
      <Image
        src={image}
        alt={alt}
        className={styles.actionContainer__img}
        height={300}
      />
      <div className={styles.actionContainer__content}>
        <div>
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={href}>{btn}</a>
        </div>
      </div>
    </>
  )
}
