import { type CSSProperties, memo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  radius?: string
  marginTop?: string | number
  margin?: string | number
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    radius = '10px',
    marginTop = 0,
    margin = 0,
  } = props
  const styles: CSSProperties = {
    height,
    width,
    borderRadius: radius,
    marginTop,
    margin,
  }

  return <div style={styles} className={cls(s.Skeleton, {}, [className])} />
})
