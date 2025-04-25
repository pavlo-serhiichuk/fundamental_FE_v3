import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Card} from 'shared/ui/Card/Card'
import {useCallback, useMemo} from 'react'
import {ArticleTopicType} from 'entities/Article'
import {filtersActions, getFiltersTopicType} from 'entities/Filters'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {AppRouteNames} from 'shared/config/routesConfig/routesConfig'
import * as s from './Tabs.module.scss'
import {TopicType} from '../../module/types/FiltersSchema'

export interface TabOption<T extends string> {
  value: T
  content: string
}

export interface TabsProps {
  className?: string
  page: AppRouteNames
  fetchData?: () => void
}

export const Tabs = (props: TabsProps) => {
  const {
    className,
    fetchData,
  } = props
  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  const topicType = useSelector(getFiltersTopicType)

  const articleOptions = useMemo<TabOption<ArticleTopicType>[]>(() => ([
    {value: 'ALL', content: t('All')},
    {value: 'IT', content: t('IT')},
    {value: 'ECONOMICS', content: t('Economics')},
    {value: 'SCIENCE', content: t('Science')},
  ]), [])
  const options: TabOption<TopicType>[] = AppRouteNames.ARTICLES ? articleOptions : []

  const onChangeTab = useCallback((value: TopicType) => () => {
    dispatch(filtersActions.setTopicType(value))
    fetchData?.()
  }, [dispatch, topicType])

  return (
    <div className={cls(s.Tabs, {}, [className])}>
      {options.map((option) => (
        <Card
          className={cls(s.tab, {[s.selected]: topicType === option.value})}
          onClick={onChangeTab(option.value)}
          key={option.value}
        >
          {option.content}
        </Card>
      ))}
    </div>
  )
}
