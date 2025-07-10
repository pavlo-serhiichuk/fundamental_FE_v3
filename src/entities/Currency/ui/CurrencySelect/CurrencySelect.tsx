import React, { memo } from 'react'
import { ListBox } from '@/shared/ui/V2/Popups'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { type ListBoxItem } from '@/shared/ui/deprecated/Popups'
import { type Currency } from '../../model/types/Currency'
import { currencies } from '../../model/consts/consts'
import * as s from './CurrencySelect.module.scss'
import { ToggleFeature } from '@/shared/lib/features'

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
    <ToggleFeature
      feature="isV2"
      on={
        <ListBox<Currency>
          readonly={!!readonly}
          value={value}
          items={currenciesOptions}
          onChange={onChange}
          label="Select currency"
          className={s.CurrencySelect}
          testId="CurrencySelect"
        />
      }
      off={
        <ListBoxDeprecated<Currency>
          readonly={!!readonly}
          value={value}
          items={currenciesOptions}
          onChange={onChange}
          label="Select currency"
          className={s.CurrencySelect}
          testId="CurrencySelect"
        />
      }
    />
  )
})
