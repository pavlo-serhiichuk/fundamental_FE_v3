import {memo} from 'react'
import {useSelector} from 'react-redux'
import {getProfileForm, profileActions} from 'entities/Profile'
import {countries, type Country} from 'entities/Country'
import {Select} from 'shared/ui/Select/Select'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const countriesOptions = Object.entries(countries).map(([value, content]) => ({value, content}))

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {readonly, value, onChange} = props

  return (
    <Select
      readonly={readonly}
      selectName="Country"
      value={value}
      options={countriesOptions}
      onChange={onChange}
    />
  )
})
