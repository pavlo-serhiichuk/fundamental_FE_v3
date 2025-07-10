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

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const { className, Svg, onClick, testId, ...otherProps } = props

  return (
    <Svg
      onClick={onClick || undefined}
      data-testid={testId}
      className={cls(s.Icon, { [s.pointer]: Boolean(onClick) }, [className])}
      {...otherProps}
    />
  )
})
