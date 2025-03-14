import {Children, type FC, type ReactNode} from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Card.module.scss'

interface CardProps {
  className?: string
  withPadding?: boolean
  children: ReactNode
}

export const Card: FC<CardProps> = (props) => {
  const { className, withPadding = false, children } = props

  return (
    <div className={cls(s.Card, { [s.withPadding]: withPadding }, [className])}>
      {Children.only(children)}
    </div>
  )
}
