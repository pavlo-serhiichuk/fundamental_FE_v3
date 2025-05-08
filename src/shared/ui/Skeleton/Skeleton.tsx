import {type CSSProperties, type FC, memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import * as s from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  radius?: string
  marginTop?: string | number
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className, height, width, radius, marginTop,
  } = props

  const styles: CSSProperties = {
    height, width, borderRadius: radius, marginTop,
  }

  return (
    <div
      style={styles}
      className={cls(s.Skeleton, {}, [className])}
    />
  )
})
