import {useCallback} from 'react'
import {useSelector} from 'react-redux'
import i18n from 'i18next'
import {cls} from '@/shared/lib/cls/cls'
import {Card} from '@/shared/ui/Card'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {HStack} from '@/shared/ui/Stack'
import {getFiltersTopicType} from '../../module/selectors/getFiltersState'
import {filtersActions} from '../../module/slice/filtersSlice'
import * as s from './Tabs.module.scss'
import {TopicType} from '../../module/types/FiltersSchema'
import {AppRouteNames} from '@/shared/const/routers'

export interface TabOption<T extends string> {
  value: T
  content: string
}

export interface TabsProps {
  className?: string
  page: AppRouteNames
  fetchData?: () => void
}

const articleOptions: TabOption<TopicType>[] = [
  {value: 'ALL', content: i18n.t('All')},
  {value: 'IT', content: i18n.t('IT')},
  {value: 'ECONOMICS', content: i18n.t('Economics')},
  {value: 'SCIENCE', content: i18n.t('Science')},
]

export const Tabs = (props: TabsProps) => {
  const {
    className,
    fetchData,
    page,
  } = props
  const dispatch = useAppDispatch()
  const topicType = useSelector(getFiltersTopicType)

  const options: TabOption<TopicType>[] | null = page === AppRouteNames.ARTICLES ? articleOptions : null

  const onChangeTab = useCallback((value: TopicType) => () => {
    dispatch(filtersActions.setTopicType(value))
    fetchData?.()
  }, [dispatch, fetchData])

  return (
    <HStack gap="10" className={cls('', {}, [className])}>
      {options?.map((option) => (
        <Card
          className={cls(s.tab, {[s.selected]: topicType === option.value})}
          onClick={onChangeTab(option.value)}
          key={option.value}
        >
          {option.content}
        </Card>
      ))}
    </HStack>
  )
}
