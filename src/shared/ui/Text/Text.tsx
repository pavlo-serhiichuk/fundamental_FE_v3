import {memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
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
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = 'content', size = 'text_size_m', fontStyle = 'normal-fs',
  } = props

  return (
    <div className={cls('', {[s[theme]]: true}, [className, s[size], s[fontStyle]])}>
      {title ? <p>{title}</p> : null}
      {text ? <span>{text}</span> : null}
    </div>
  )
})
