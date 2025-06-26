import { CommonFlexProps } from '../types/flex'
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses,
} from '../../styles/flexStyles'
import * as s from '../../styles/flexStyles.module.scss'

// interface VStackProps extends Omit<CommonFlexProps, 'direction'> {
//   isAsString?: boolean
// }

type VStackProps = Omit<CommonFlexProps, 'direction'>

export function getVStack(props: VStackProps) {
  const { justify, align, gap } = props
  return [
    s.flex,
    justify && justifyClasses[justify],
    directionClasses.column,
    align && alignClasses[align],
    gap && gapClasses[gap],
  ]
}

export function getVStackString(props: VStackProps) {
  const { justify, align, gap } = props
  return [
    s.flex,
    justify && justifyClasses[justify],
    directionClasses.column,
    align && alignClasses[align],
    gap && gapClasses[gap],
  ].join(' ')
}
