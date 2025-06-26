import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './Flex.module.scss'
import { CommonFlexProps } from '../../module/types/flex'
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses,
} from '../../styles/flexStyles'

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export interface FlexProps extends DivProps, CommonFlexProps {
  className?: string
  children: ReactNode
  fullWidth?: boolean
  fullHeight?: boolean
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    justify = 'start',
    direction = 'row',
    align,
    gap,
    fullWidth,
    fullHeight,
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
      className={cls(
        s.Flex,
        {
          [s.fullWidth]: Boolean(fullWidth),
          [s.fullHeight]: Boolean(fullHeight),
        },
        classes,
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}
