import {
  Children, type FC, HTMLAttributes, type ReactNode,
} from 'react'
import {cls, Mods} from '@/shared/lib/cls/cls'
import * as s from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string
  withPadding?: boolean
  children: ReactNode
}

export const Card: FC<CardProps> = (props) => {
  const {
    className, withPadding = false, children, ...otherProps
  } = props

  const mods: Mods = {[s.withPadding]: withPadding}

  return (
    <div
      className={cls(s.Card, mods, [className])}
      {...otherProps}
    >
      {Children.only(<>{children}</>)}
    </div>
  )
}
