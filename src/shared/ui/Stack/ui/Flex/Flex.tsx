import React, {FC, ReactNode} from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Flex.module.scss'

export type FlexJustify = 'start' | 'end' | 'between' | 'center'
export type FlexDirection = 'row' | 'column'
export type FlexAlign = 'start' | 'end' | 'center'
export type FlexGap = '3' | '8' | '10' | '12' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  end: s.justifyEnd,
  between: s.justifyBetween,
  center: s.justifyCenter,

}

const alignClasses: Record<FlexAlign, string> = {
  start: s.alignStart,
  end: s.alignEnd,
  center: s.alignCenter,
}

const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  3: s.gap3,
  8: s.gap8,
  10: s.gap10,
  12: s.gap12,
  16: s.gap16,
  32: s.gap32,
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps{
  className?: string
  children: ReactNode
  justify?: FlexJustify
  direction?: FlexDirection
  align?: FlexAlign
  gap?: FlexGap
  max?: boolean
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    direction = 'row',
    align,
    gap,
    max,
    ...otherProps
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    directionClasses[direction],
    align && alignClasses[align],
    gap && gapClasses[gap],
  ]

  return (
    <div
      className={cls(s.Flex, {[s.max]: !!max}, classes)}
      {...otherProps}
    >
      {children}
    </div>
  )
}
