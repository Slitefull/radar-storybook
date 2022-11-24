import { useEffect, useState } from 'react'

/*
EXAMPLE

import React, { useEffect, useState } from 'react'
import useImagePreloader from 'hooks/useImagePreloader'

import Image1 from 'images/image1.png'
import Image2 from 'images/image2.jpg'
import Image3 from 'images/image3.svg'

const preloadSrcList: string[] = [
  Image1,
  Image2,
  Image3,
]

export default function Component() {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)

  if (!imagesPreloaded) {
    return <p>Preloading Assets</p>
  }

  return <p>Assets Finished Preloading</p>
}
*/

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function() {
      resolve(img)
    }
    img.onerror = img.onabort = function() {
      reject(src)
    }
    img.src = src
  })
};

export const useImagePreloader = (imageList: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false)

  useEffect(() => {
    let isCancelled = false

    async function effect() {
      console.log('PRELOAD')

      if (isCancelled) {
        return
      }

      const imagesPromiseList: Promise<any>[] = []
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i))
      }

      await Promise.all(imagesPromiseList)

      if (isCancelled) {
        return
      }

      setImagesPreloaded(true)
    }

    effect()

    return () => {
      isCancelled = true
    }
  }, [imageList])

  return { imagesPreloaded }
};