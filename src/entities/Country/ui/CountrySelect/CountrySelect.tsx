import React, {memo} from 'react'
import {ListBox} from 'shared/ui/Popups'
import {useTranslation} from 'react-i18next'
import {countries, type Country} from '../../model/Country'
import * as s from './CountrySelect.module.scss'

interface CountrySelectProps {
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const countriesOptions = Object.entries(countries).map(([value, content]) => ({value, content} as {value: Country, content: Country}))

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    readonly,
    value,
    onChange = () => {},
  } = props
  const {t} = useTranslation()
  return (
    <ListBox<Country>
      testId="CountrySelect"
      readonly={readonly}
      value={value}
      onChange={onChange}
      items={countriesOptions}
      defaultValue={t('Select country')}
      label={t('Select country')}
      className={s.CountrySelect}
    />
  )
})
