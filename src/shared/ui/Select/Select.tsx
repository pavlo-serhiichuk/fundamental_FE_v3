import {type ChangeEvent, memo, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {cls} from 'shared/lib/cls/cls'
import * as s from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  options: SelectOption<T>[]
  onChange?: (value: T) => void
  value?: T
  selectName: string
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {t} = useTranslation()
  const {
    className, options, onChange, selectName, value, readonly,
  } = props

  const optionsList = useMemo(() => options.map((opt) => (
    <option value={opt.value} key={opt.value}>{opt.content}</option>
  )), [options])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }
  return (
    <div className={cls(s.SelectWrapper, {}, [className])}>
      <span>
        {t(selectName)}
        :
      </span>
      <select value={value} disabled={readonly} onChange={handleChange}>
        {optionsList}
      </select>
    </div>
  )
}
