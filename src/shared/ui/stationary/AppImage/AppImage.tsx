import React, {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from 'react'
import CubeIcon from '../../../assets/icons/_cube.svg'
import { Icon as IconDeprecated } from '../../deprecated/Icon'
import ErrorFallbackImage from '../../../assets/images/errorFallbackImage.jpg'
import AvatarImage from '../../../assets/images/avatarImage.png'
import { ToggleFeature } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/V2/Icon'

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
  testId?: string
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
    testId,
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
      <ToggleFeature
        feature="isV2"
        on={<Icon Svg={CubeIcon} width={width} height={height} />}
        off={<IconDeprecated Svg={CubeIcon} width={width} height={height} />}
      />
    ) : (
      <img
        src={isAvatar ? AvatarImage : ErrorFallbackImage}
        alt={alt}
        className={className}
        data-testid={`${testId || 'AppImage'}.hasError`}
        {...otherProps}
      />
    )
  }

  return (
    <img
      data-testid={testId || 'AppImage'}
      src={src}
      alt={alt}
      className={className}
      {...otherProps}
    />
  )
})
