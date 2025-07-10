import { CommonFlexProps } from '../types/flex'
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses,
} from '../../styles/flexStyles'
import * as s from '../../styles/flexStyles.module.scss'

type HStackProps = Omit<CommonFlexProps, 'direction'>

export function getHStack(props: HStackProps) {
  const { justify, align, gap } = props

  return [
    s.flex,
    justify && justifyClasses[justify],
    directionClasses.row,
    align && alignClasses[align],
    gap && gapClasses[gap],
  ]
}

export function getHStackString(props: HStackProps) {
  const { justify, align, gap } = props

  return [
    s.flex,
    justify && justifyClasses[justify],
    directionClasses.row,
    align && alignClasses[align],
    gap && gapClasses[gap],
  ].join(' ')
}
