import { type FC, HTMLAttributes, type ReactNode } from 'react'
import { cls, Mods } from '@/shared/lib/cls/cls'
import * as s from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  withPadding?: boolean
  children: ReactNode
  testId?: string
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    withPadding = false,
    children,
    testId = 'Card',
    ...otherProps
  } = props

  const mods: Mods = { [s.withPadding]: withPadding }

  return (
    <div
      data-testid={testId}
      className={cls(s.Card, mods, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
