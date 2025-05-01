import React, {memo} from 'react'
import {currencies, type Currency} from 'entities/Currency'
import {ListBox} from 'shared/ui/Popups'
import {ListBoxItem} from 'shared/ui/Popups/ui/ListBox/ListBox'
import * as s from './CurrencySelect.module.scss'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  value?: Currency
  onChange?: (value: Currency) => void
}

const currenciesOptions: ListBoxItem<Currency>[] = Object.entries(currencies).map(([value, content]) => ({value, content} as {value: Currency, content: Currency}))

export const CurrencySelect = memo(({readonly, onChange, value}: CurrencySelectProps) => (
  <ListBox<Currency>
    readonly={!!readonly}
    value={value}
    items={currenciesOptions}
    onChange={onChange}
    label="Currency"
    direction="bottom right"
    className={s.CurrencySelect}
  />
))
