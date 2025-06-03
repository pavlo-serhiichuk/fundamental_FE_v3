import React, { memo } from 'react'
import { ListBox } from '@/shared/ui/Popups'
import { type ListBoxItem } from '@/shared/ui/Popups'
import { type Currency } from '../../model/types/Currency'
import { currencies } from '../../model/consts/consts'
import * as s from './CurrencySelect.module.scss'

interface CurrencySelectProps {
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
}

const currenciesOptions: ListBoxItem<Currency>[] = Object.entries(
  currencies,
).map(
  ([value, content]) =>
    ({ value, content }) as { value: Currency; content: Currency },
)

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { readonly, onChange, value } = props
  return (
    <ListBox<Currency>
      readonly={!!readonly}
      value={value}
      items={currenciesOptions}
      onChange={onChange}
      label="Currency"
      className={s.CurrencySelect}
      testId="CurrencySelect"
    />
  )
})
