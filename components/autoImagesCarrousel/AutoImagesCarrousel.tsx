'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from '@/components/autoImagesCarrousel/autoImagesCarrousel.module.css'

import { imagesList } from '../../utils/imagesList'

export default function AutoImagesCarrousel() {
  const [imageIndex, setImageIndex] = useState(0)
  const [image, setImage] = useState(imagesList[imageIndex])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imageIndex === imagesList.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex((prevState) => (prevState += 1))
      }

      setImage(imagesList[imageIndex])
    }, 3000)

    return () => clearInterval(intervalId)
  }, [imageIndex])

  return <Image src={image.url} alt={image.alt} className={styles.image} />
}
