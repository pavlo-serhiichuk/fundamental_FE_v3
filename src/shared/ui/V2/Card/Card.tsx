import { type FC, HTMLAttributes, type ReactNode } from 'react'
import { cls, Mods } from '@/shared/lib/cls/cls'
import * as s from './Card.module.scss'

type BgType = 'main' | 'secondary'
type CardPadding = '0' | '8' | '12' | '16' | '20' | '32'
type CardRadius = '0' | '8' | '12' | '16' | '20' | '32'
type PaddingClass = Record<CardPadding, string>
type RadiusClass = Record<CardRadius, string>

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  withPadding?: boolean
  children: ReactNode
  testId?: string
  bgType?: BgType
  padding?: CardPadding
  radius?: CardRadius
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    testId = 'Card',
    bgType = 'main',
    padding = '12',
    radius = '32',
    ...otherProps
  } = props

  const paddingClass: PaddingClass = {
    '0': s.padding0,
    '8': s.padding8,
    '12': s.padding12,
    '16': s.padding16,
    '20': s.padding20,
    '32': s.padding32,
  }

  const radiusClass: RadiusClass = {
    '0': s.radius0,
    '8': s.radius8,
    '12': s.radius12,
    '16': s.radius16,
    '20': s.radius20,
    '32': s.radius32,
  }
  return (
    <div
      data-testid={testId}
      className={cls(s.Card, {}, [
        className,
        s[bgType],
        paddingClass[padding],
        radiusClass[radius],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
