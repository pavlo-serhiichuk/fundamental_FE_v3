import React, { FC, memo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>> | string
  width?: number
  height?: number
  onMouseLeave?: () => void
  onMouseEnter?: () => void
  onClick?: () => void
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const { className, Svg, ...otherProps } = props

  return <Svg className={cls(s.Icon, {}, [className])} {...otherProps} />
})
