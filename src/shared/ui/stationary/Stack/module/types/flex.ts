export type FlexJustify = 'start' | 'end' | 'between' | 'center'
export type FlexDirection = 'row' | 'column'
export type FlexAlign = 'start' | 'end' | 'center'
export type FlexGap = '3' | '8' | '10' | '12' | '16' | '32'

export interface CommonFlexProps {
  justify?: FlexJustify
  direction?: FlexDirection
  align?: FlexAlign
  gap?: FlexGap
}
