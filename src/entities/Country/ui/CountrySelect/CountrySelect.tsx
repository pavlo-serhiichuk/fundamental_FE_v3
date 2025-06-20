import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from '@/shared/ui/V2/Popups'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { countries, type Country } from '../../model/Country'
import * as s from './CountrySelect.module.scss'
import { ToggleFeature } from '@/shared/lib/features'

interface CountrySelectProps {
  readonly?: boolean
  value?: Country
  onChange?: (value: Country) => void
}

const countriesOptions = Object.entries(countries).map(
  ([value, content]) =>
    ({ value, content }) as { value: Country; content: Country },
)

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { readonly, value, onChange = () => {} } = props
  const { t } = useTranslation()
  return (
    <ToggleFeature
      feature="isV2"
      on={
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
      }
      off={
        <ListBoxDeprecated<Country>
          testId="CountrySelect"
          readonly={readonly}
          value={value}
          onChange={onChange}
          items={countriesOptions}
          defaultValue={t('Select country')}
          label={t('Select country')}
          className={s.CountrySelect}
        />
      }
    />
  )
})
