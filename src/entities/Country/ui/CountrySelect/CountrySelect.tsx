import {memo} from 'react'
import {useSelector} from 'react-redux'
import {getProfileForm, profileActions} from 'entities/Profile'
import {countries, type Country} from 'entities/Country'
import {Select} from 'shared/ui/Select/Select'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
}

const countriesOptions: Country[] = Object.keys(countries) as Country[]

export const CountrySelect = memo(({readonly}: CountrySelectProps) => {
  const form = useSelector(getProfileForm)
  const dispatch = useAppDispatch()
  const onChange = (value: Country) => {
    dispatch(profileActions.updateProfileForm({country: value}))
  }

  return (
    <Select
      readonly={readonly}
      selectName="Country"
      value={form?.country}
      options={countriesOptions}
      onChange={onChange}
    />
  )
})
