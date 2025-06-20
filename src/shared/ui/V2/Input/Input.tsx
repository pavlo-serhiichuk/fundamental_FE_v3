import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { cls } from '@/shared/lib/cls/cls'
import { VStack } from '../../stationary/Stack'
import * as s from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  readOnly?: boolean
  type?: string
  className?: string
  label?: string
  value?: string | number
  onChange?: ((value: string) => void) | undefined
  testId?: string
  withSearchIcon?: boolean
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
    ...otherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <VStack
      data-testid="input-wrapper"
      className={cls(s.Input, { [s.readonly]: !!readOnly }, [className])}
      gap="3"
    >
      {label ? <div data-testid="input-label">{label}:</div> : null}
      <input
        data-testid={testId || 'Input'}
        value={value}
        className={cls(s.inputEl, { [s.withSearchIcon]: withSearchIcon })}
        onChange={onChangeHandler}
        type={type}
        readOnly={readOnly}
        {...otherProps}
      />
    </VStack>
  )
})
