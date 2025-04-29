import {type ChangeEvent, type InputHTMLAttributes, memo} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {VStack} from '../Stack'
import * as s from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  readOnly?: boolean
  type?: string
  className?: string
  label?: string
  value?: string | number
  onChange?: ((value: string) => void) | undefined
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    label = '',
    type = 'text',
    value = '',
    onChange,
    readOnly,
    ...otherProps
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <VStack
      data-testid="input-wrapper"
      gap="3"
      className={cls(s.Input, {}, [className])}
    >
      {label ? (
        <div data-testid="input-label">
          {label}
          :
        </div>
      ) : null}
      <input
        data-testid="input"
        value={value}
        className={s.inputEl}
        onChange={onChangeHandler}
        type={type}
        {...otherProps}
        readOnly={readOnly}
      />
    </VStack>
  )
})
