'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import styles from '@/components/autoImagesCarrousel/autoImagesCarrousel.module.css'

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

  return <Image src={image.url} alt={image.alt} className={styles.image} />
}
