import {
  type ButtonHTMLAttributes, Children, memo, type ReactNode,
} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import * as s from './Button.module.scss'

export type ButtonTheme = 'default' | 'clear' | 'bordered' | 'sidebar-squad-m' | 'content-squad-m' | 'cancel'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean | undefined
  children?: ReactNode
  testId?: string
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = 'default',
    children,
    disabled = false,
    testId,
    ...otherProps
  } = props

  return (
    <button
      type="button"
      data-testid={testId || 'Button'}
      disabled={disabled}
      className={cls(s.Button, {[s.disabled]: disabled}, [s[theme], className])}
      {...otherProps}
    >
      {Children.only(<span>{children}</span>)}
    </button>
  )
})
