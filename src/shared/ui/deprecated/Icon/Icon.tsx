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
  testId?: string
}

/**
 * @deprecated, there is new components from V2 folder
 * */

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const { className, Svg, testId, ...otherProps } = props

  return (
    <Svg
      className={cls(s.Icon, {}, [className])}
      data-testid={testId}
      {...otherProps}
    />
  )
})
