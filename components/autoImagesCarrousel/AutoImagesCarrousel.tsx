'use client'

import Image from 'next/image'
import styles from '@/components/hero/hero.module.css'
import { useEffect, useRef, useState } from 'react'
import { imagesList } from '../../utils/imagesList'

export default function AutoImagesCarrousel() {
  const imageIndex = useRef(0)
  const [image, setImage] = useState(imagesList[imageIndex.current])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageIndex.current === imagesList.length - 1) {
        imageIndex.current = 0
      } else {
        imageIndex.current += 1
      }

      setImage(imagesList[imageIndex.current])
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Image
      className={styles.heroSection__image}
      width={500}
      height={500}
      src={image.url}
      alt={image.alt}
    />
  )
}
