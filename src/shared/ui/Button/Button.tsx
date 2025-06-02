import {
  type ButtonHTMLAttributes, memo, type ReactNode,
} from 'react'
import {cls, Mods} from '@/shared/lib/cls/cls'
import * as s from './Button.module.scss'

export type ButtonTheme = 'default' | 'clear' | 'bordered' | 'sidebar_squad_m' | 'content_squad_m' |'cancel'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  /** responsible for button appearance */
  theme?: ButtonTheme
  disabled?: boolean | undefined
  children?: ReactNode
  testId?: string
  /** responsible for filling all width */
  fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = 'bordered',
    children,
    disabled = false,
    testId,
    fullWidth = false,
    ...otherProps
  } = props

  const mods: Mods = {[s.disabled]: disabled, [s.fullWidth]: fullWidth}
  return (
    <button
      type="button"
      data-testid={testId || 'Button'}
      disabled={disabled}
      className={cls(s.Button, mods, [s[theme], className])}
      {...otherProps}
    >
      {children}
    </button>
  )
})
