import React, {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react'
import CubeIcon from '../../assets/icons/_cube.svg'
import { Icon } from '@/shared/ui/Icon'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  src?: string
  alt?: string
  fallback?: ReactElement
  isAvatar?: boolean
}

export const AppImage = memo((props: ImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    isAvatar,
    ...otherProps
  } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''
    img.onload = () => {
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError) {
    // return (
    //   <img
    //     src={isAvatar ? AvatarImage : ErrorFallbackImage}
    //     alt={alt}
    //     className={className}
    //     {...otherProps}
    //   />
    // )
    return <Icon Svg={CubeIcon} width={200} height={200} />
  }

  return <img src={src} alt={alt} className={className} {...otherProps} />
})
