import {type ButtonHTMLAttributes, Children, memo, type ReactNode} from 'react'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Button.module.scss'

export type ButtonTheme = 'clear' | 'bordered' | 'sidebar-squad-m' | 'content-squad-m' | 'cancel'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean | undefined
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const { className, theme = 'clear', children, disabled = false, ...otherProps } = props

  return (
    <button
      disabled={disabled}
      className={cls(s.Button, { [s.disabled]: disabled }, [className, s[theme]])}
      {...otherProps}>
      {Children.only(<span>{children}</span>)}
    </button>
  )
})
