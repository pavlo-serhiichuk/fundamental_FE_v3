import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
} from '@/shared/ui/stationary/Stack/module/types/flex'
import * as s from './flexStyles.module.scss'

export const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  end: s.justifyEnd,
  between: s.justifyBetween,
  center: s.justifyCenter,
}

export const alignClasses: Record<FlexAlign, string> = {
  start: s.alignStart,
  end: s.alignEnd,
  center: s.alignCenter,
}

export const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
}

export const gapClasses: Record<FlexGap, string> = {
  3: s.gap3,
  8: s.gap8,
  10: s.gap10,
  12: s.gap12,
  16: s.gap16,
  32: s.gap32,
}
