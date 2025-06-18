import { type CSSProperties, type FC, useMemo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { AppImage } from '../../stationary/AppImage'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
  className?: string
  src: string | undefined
  alt: string | undefined
  size: number
}

/**
 * @deprecated, there is new components from V2 folder
 * */

export const Avatar: FC<AvatarProps> = (props) => {
  const { src = '', alt = 'default', size, className } = props

  const styles = useMemo<CSSProperties>(
    () => ({
      minWidth: size,
      minHeight: size,
      maxWidth: size,
      maxHeight: size,
      borderRadius: '50%',
      objectFit: 'cover',
      backgroundColor: 'grey',
    }),
    [size],
  )

  const fallbackProps = useMemo(
    () => ({
      width: size,
      height: size,
      radius: '50%',
    }),
    [size],
  )

  return (
    <div className={cls('', {}, [className])}>
      <AppImage
        isAvatar
        src={src}
        alt={alt}
        style={styles}
        width={size}
        height={size}
        fallback={<Skeleton {...fallbackProps} />}
      />
    </div>
  )
}
