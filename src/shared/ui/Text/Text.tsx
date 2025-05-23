import {memo} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import * as s from './Text.module.scss'

type TextTheme = 'content' | 'error' | 'warn'
type TextSize = 'text_size_s' | 'text_size_m' | 'text_size_l'
type FontStyle = 'normal-fs' | 'italic-fs'
interface TextProps {
  className?: string
  title?: string | undefined
  text?: string | undefined
  theme?: TextTheme
  size?: TextSize
  fontStyle?: FontStyle
  testId?: string
}

type HeaderTagType = 'h1' | 'h3' | 'h4'
type MapHeaderTag = Record<TextSize, HeaderTagType>

const mapHeaderTag: MapHeaderTag = {
  text_size_s: 'h4',
  text_size_m: 'h3',
  text_size_l: 'h1',
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = 'content',
    size = 'text_size_m',
    fontStyle = 'normal-fs',
    testId = 'testId',
  } = props
  const HeaderTag = mapHeaderTag[size]
  return (
    <div data-testid="text-wrapper-el" className={cls('', {[s[theme]]: true}, [className, s[size], s[fontStyle]])}>
      {title ? <HeaderTag data-testid={`${testId}.Title`}>{title}</HeaderTag> : null}
      {text ? <span data-testid={`${testId}.Text`}>{text}</span> : null}
    </div>
  )
})
