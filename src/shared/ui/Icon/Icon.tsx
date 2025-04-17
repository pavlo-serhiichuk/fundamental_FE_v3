import React, {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.FC<React.SVGProps<SVGSVGElement>> | string
}

export const Icon = memo((props: IconProps) => {
  const {className, Svg} = props
  return (
    <Svg className={cls(s.Icon, {}, [className])} />
  )
})
