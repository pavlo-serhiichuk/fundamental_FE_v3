import React, {memo} from 'react'
import {useSelector} from 'react-redux'
import {getProfileForm, profileActions} from 'entities/Profile'
import {currencies, type Currency} from 'entities/Currency'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {Select} from 'shared/ui/Select/Select'
import {countries} from 'entities/Country'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Currency) => void
}

const currenciesOptions = Object.entries(currencies).map(([value, content]) => ({value, content}))

export const CurrencySelect = memo(({readonly, onChange, value}: CurrencySelectProps) => (
  <Select
    readonly={!!readonly}
    selectName="Currency"
    value={value}
    options={currenciesOptions}
    onChange={onChange}
  />
))
