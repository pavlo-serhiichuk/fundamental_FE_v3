import { type CSSProperties, type FC, useMemo } from 'react'
import {cls} from 'shared/lib/cls/cls'

interface AvatarProps {
  className?: string
  src: string | undefined
  alt: string
  size: number
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { src = '', alt, size, className } = props

  const styles = useMemo<CSSProperties>(() => ({
    minWidth: size,
    minHeight: size,
    maxWidth: size,
    maxHeight: size,
    borderRadius: '50%',
    objectFit: 'cover',
    backgroundColor: 'grey'
  }), [size])

  return (
    <div style={styles} className={cls('', {}, [className])}>
      {src
        ? <img style={styles} src={src} alt={alt} />
        : <div style={styles}/>}
    </div>
  )
}
