'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { imagesList } from '@/utils/imagesList'

export default function AutoImagesCarrousel() {
  const [imageIndex, setImageIndex] = useState(0)
  const [image, setImage] = useState(imagesList[imageIndex])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setImage(imagesList[imageIndex])
  }, [imageIndex])

  return (
    <Image
      src={image.url}
      alt={image.alt}
      className='object-cover object-center max-h-[1024px] w-full h-full'
      priority
    />
  )
}
