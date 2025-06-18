import React, {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react'
import CubeIcon from '../../../assets/icons/_cube.svg'
import { Icon } from '../../deprecated/Icon'
import ErrorFallbackImage from '../../../assets/images/errorFallbackImage.jpg'
import AvatarImage from '../../../assets/images/avatarImage.png'

type FallbackImageType = 'image' | 'icon'
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  src?: string
  alt?: string
  fallback?: ReactElement
  isAvatar?: boolean
  width?: number
  height?: number
  fallbackImageType?: FallbackImageType
}

export const AppImage = memo((props: ImageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    isAvatar,
    width = 30,
    height = 30,
    fallbackImageType = 'image',
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
    return fallbackImageType === 'icon' ? (
      <Icon Svg={CubeIcon} width={width} height={height} />
    ) : (
      <img
        src={isAvatar ? AvatarImage : ErrorFallbackImage}
        alt={alt}
        className={className}
        {...otherProps}
      />
    )
  }

  return <img src={src} alt={alt} className={className} {...otherProps} />
})
