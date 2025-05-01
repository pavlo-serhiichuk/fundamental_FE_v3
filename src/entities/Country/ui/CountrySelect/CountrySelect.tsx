import React, {memo} from 'react'
import {countries, type Country} from 'entities/Country'
import {ListBox} from 'shared/ui/Popups'
import {useTranslation} from 'react-i18next'
import * as s from './CountrySelect.module.scss'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const countriesOptions = Object.entries(countries).map(([value, content]) => ({value, content} as {value: Country, content: Country}))

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {readonly, value, onChange = () => {}} = props
  const {t} = useTranslation()
  return (
    // <Select
    //   readonly={readonly}
    //   selectName="Country"
    //   value={value}
    //   options={countriesOptions}
    //   onChange={onChange}
    // />
    <ListBox<Country>
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
