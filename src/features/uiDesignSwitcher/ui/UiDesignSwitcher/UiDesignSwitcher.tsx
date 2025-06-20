import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ListBox } from '@/shared/ui/V2/Popups'
import { Text } from '@/shared/ui/V2/Text'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import {
  getFeatureFlags,
  updateFeatureFlag,
  ToggleFeature,
} from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/V2/Skeleton'
import { HStack } from '@/shared/ui/stationary/Stack'

export const UiDesignSwitcher = memo(() => {
  const { t } = useTranslation()
  const isV2 = getFeatureFlags('isV2')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const userId = useSelector(getUserAuthData)?.id
  const items = [
    {
      content: t('New'),
      value: 'new',
    },
    {
      content: t('Old'),
      value: 'old',
    },
  ]

  const onChange = async (value: string) => {
    if (userId) {
      setIsLoading(true)
      await dispatch(
        updateFeatureFlag({
          userId,
          features: { isV2: value === 'new' },
        }),
      )
      setIsLoading(false)
    }
  }

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <HStack justify="start" align="center" gap="10">
          <Text text={`${t('SelectDesign')}:`} />
          {isLoading ? (
            <Skeleton height={40} width={100} />
          ) : (
            <ListBox
              items={items}
              value={isV2 ? 'New' : 'Old'}
              onChange={onChange}
            />
          )}
        </HStack>
      }
      off={
        <ListBoxDeprecated
          label="Select design"
          items={items}
          value={isV2 ? 'New' : 'Old'}
          onChange={onChange}
        />
      }
    />
  )
})
