import React, {memo} from 'react'
import {currencies, type Currency} from 'entities/Currency'
import {ListBox} from 'shared/ui/Popups'
import {ListBoxItem} from 'shared/ui/Popups/ui/ListBox/ListBox'
import * as s from './CurrencySelect.module.scss'

interface CurrencySelectProps {
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
  testId: string
}

const currenciesOptions: ListBoxItem<Currency>[] = Object.entries(currencies).map(([value, content]) => ({value, content} as {value: Currency, content: Currency}))

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    readonly,
    onChange,
    value,
    testId = 'testId',
  } = props
  return (
    <ListBox<Currency>
      readonly={!!readonly}
      value={value}
      items={currenciesOptions}
      onChange={onChange}
      label="Currency"
      className={s.CurrencySelect}
      testId={`${testId}.CurrencySelect`}
    />
  )
})
