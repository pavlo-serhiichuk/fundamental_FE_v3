import React, {memo} from 'react'
import {useSelector} from 'react-redux'
import {getProfileForm, profileActions} from 'entities/Profile'
import {currencies, type Currency} from 'entities/Currency'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {Select} from 'shared/ui/Select/Select'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
}

const currenciesOptions: Currency[] = Object.keys(currencies) as Currency[]

export const CurrencySelect = memo(({readonly}: CurrencySelectProps) => {
  const form = useSelector(getProfileForm)
  const dispatch = useAppDispatch()
  const onChange = (value: Currency) => {
    dispatch(profileActions.updateProfileForm({currency: value}))
  }

  return (
    <Select
      readonly={!!readonly}
      selectName="Currency"
      value={form?.currency}
      options={currenciesOptions}
      onChange={onChange}
    />
  )
})
