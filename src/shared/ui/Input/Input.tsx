import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import {cls} from 'shared/lib/cls/cls'
// import { useTranslation } from 'react-i18next'
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
  // const { t } = useTranslation()
  const { className, label = '', type = 'text', value = '', onChange, readOnly, ...otherProps } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={cls(s.Input, {}, [className])}>
      {label ? <div>{label}:</div> : null}
        <input
          value={value}
          onChange={onChangeHandler}
          type={type} {...otherProps}
          readOnly={readOnly}
        />
    </div>
  )
})
