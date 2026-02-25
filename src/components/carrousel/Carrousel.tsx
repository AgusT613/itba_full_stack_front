import Link from 'next/link'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { GoDot, GoDotFill } from 'react-icons/go'

import styles from './carrousel.module.css'

export default function Carrousel({
  children,
  itemList,
  handleNext,
  handlePrevious,
  itemIndex,
  setItemIndex,
  href,
}) {
  return (
    <>
      <div className={styles.cards}>
        <BiLeftArrow
          onClick={handlePrevious}
          className={styles.nextPreviousBtn}
        />
        <Link href={href} className={styles.link}>
          {children}
        </Link>
        <BiRightArrow onClick={handleNext} className={styles.nextPreviousBtn} />
      </div>

      <div className={styles.positions}>
        {itemList.length &&
          itemList.map((item, index) =>
            index === itemIndex ? (
              <GoDotFill key={item.id} className={styles.dotPosition} />
            ) : (
              <GoDot
                key={item.id}
                className={styles.dotPosition}
                onClick={() => setItemIndex(index)}
              />
            ),
          )}
      </div>
    </>
  )
}
