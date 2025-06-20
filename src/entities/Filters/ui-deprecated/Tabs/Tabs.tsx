import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { HStack, VStack } from '@/shared/ui/stationary/Stack'
import { cls } from '@/shared/lib/cls/cls'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getFiltersTopicType } from '../../module/selectors/getFiltersState'
import { filtersActions } from '../../module/slice/filtersSlice'
import * as s from './Tabs.module.scss'
import { TopicType } from '../../module/types/FiltersSchema'
import { AppRouteNames } from '@/shared/const/routers'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { Card } from '@/shared/ui/V2/Card'

export interface TabOption<T extends string> {
  value: T
  content: string
}

export interface TabsProps {
  className?: string
  page: AppRouteNames
  fetchData?: () => void
  options: TabOption<TopicType>[]
}

/**
 * @deprecated, there is new components from V2 folder
 * */

export const Tabs = (props: TabsProps) => {
  const { className, fetchData, options, page } = props
  const dispatch = useAppDispatch()
  const topicType = useSelector(getFiltersTopicType)

  const onChangeTab = useCallback(
    (value: TopicType) => () => {
      dispatch(filtersActions.setTopicType(value))
      fetchData?.()
    },
    [dispatch, fetchData],
  )

  return (
    <HStack gap="10" className={cls('', {}, [className])}>
      {options?.map((option) => (
        <CardDeprecated
          className={cls(s.tab, {
            [s.selected]: topicType === option.value,
          })}
          onClick={onChangeTab(option.value)}
          key={option.value}
        >
          {option.content}
        </CardDeprecated>
      ))}
    </HStack>
  )
}
