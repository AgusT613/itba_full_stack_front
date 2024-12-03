import Image from 'next/image'

import styles from '@/components/home/bankActions/bankActionContainer/bankActionContainer.module.css'

export default function BankActionContainer({ bankAction }) {
  const { title, description, btn, href, image, alt } = bankAction

  return (
    <>
      <Image src={image} alt={alt} className={styles.image} height={300} />
      <div className={styles.contentWrapper}>
        <article className={styles.content}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.description}>{description}</span>
          <a href={href} className={styles.moreLink}>
            {btn}
          </a>
        </article>
      </div>
    </>
  )
}
