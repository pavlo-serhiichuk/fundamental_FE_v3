import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { HStack, VStack } from '../../stationary/Stack'
import * as s from './Input.module.scss'
import SearchIcon from '@/shared/assets/icons/map_search.svg'
import { Icon } from '@/shared/ui/V2/Icon'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>

type InputSize = 'medium' | 'large'
type InputTheme = 'bordered' | 'clear'

interface InputProps extends HTMLInputProps {
  readOnly?: boolean
  type?: string
  className?: string
  label?: string
  value?: string | number
  onChange?: ((value: string) => void) | undefined
  testId?: string
  withSearchIcon?: boolean
  size?: InputSize
  theme?: InputTheme
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    label = '',
    type = 'text',
    value = '',
    onChange,
    readOnly,
    testId,
    withSearchIcon = false,
    size = 'medium',
    theme = 'bordered',
    ...otherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <HStack
      data-testid="input-wrapper"
      className={cls(s.Input, { [s.readonly]: !!readOnly }, [className])}
      gap="8"
      align="center"
    >
      {label ? (
        <div data-testid="input-label" className={s.label}>
          {label}:
        </div>
      ) : null}
      {withSearchIcon && <Icon Svg={SearchIcon} className={s.searchIcon} />}
      <input
        data-testid={testId || 'Input'}
        value={value}
        className={cls(s.inputEl, { [s.withSearchIcon]: withSearchIcon }, [
          s[size],
          s[theme],
        ])}
        onChange={onChangeHandler}
        type={type}
        readOnly={readOnly}
        {...otherProps}
      />
    </HStack>
  )
})
