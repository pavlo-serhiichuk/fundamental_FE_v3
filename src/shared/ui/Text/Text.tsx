import { type FC, memo } from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Text.module.scss'

type TextTheme = 'content' | 'error' | 'warn'
type TextSize = 'text_size_s' | 'text_size_m' | 'text_size_l'
interface TextProps {
  className?: string
  title?: string | undefined
  text?: string | undefined
  theme?: TextTheme
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = 'content', size = 'text_size_m' } = props

  return (
    <div className={cls('', { [s[theme]]: true }, [className, s[size]])}>
      {title ? <p>{title}</p> : null}
      {text ? <span>{text}</span> : null}
    </div>
  )
})
