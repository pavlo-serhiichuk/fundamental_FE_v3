import {memo, useCallback, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {cls} from '@/shared/lib/cls/cls'
import {
  OrderBy,
  SearchByName,
  SortBy,
  Tabs,
  TopicType,
  TabOption,
} from '@/entities/Filters'
import {ChangeListView} from '@/features/ChangeListView'
import {useDebounce} from '@/shared/hooks/useDebounce'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {HStack} from '@/shared/ui/Stack'
import {fetchArticlesList} from '../../module/services/fetchArticlesList/fetchArticlesList'
import {articlesPageActions} from '../../module/slice/articlesPageSlice'
import * as s from './ArticlesPageFilters.module.scss'
import {AppRouteNames} from '@/shared/const/routers'

export const ArticlesPageFilters = memo(() => {
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  const fetchFilteredArticlesList = useCallback(() => {
    dispatch(articlesPageActions.setPageNumber(1))
    dispatch(fetchArticlesList({replace: true}))
  }, [dispatch])

  const debouncedFilteredArticlesList = useDebounce(fetchFilteredArticlesList, 500)

  const articleOptions: TabOption<TopicType>[] = useMemo(() => ([
    {value: 'ALL', content: t('All')},
    {value: 'IT', content: t('IT')},
    {value: 'ECONOMICS', content: t('Economics')},
    {value: 'SCIENCE', content: t('Science')},
  ]), [t])

  return (
    <div className={cls(s.ArticlesFilters, {})}>
      <HStack justify="between" className={s.controllers}>
        <div className={s.sortWrapper}>
          <OrderBy fetchData={debouncedFilteredArticlesList} />
          <SortBy fetchData={debouncedFilteredArticlesList} />
        </div>
        <ChangeListView />
      </HStack>
      <SearchByName
        fetchData={debouncedFilteredArticlesList}
        className={s.searchArticlesInput}
      />
      <Tabs
        fetchData={fetchFilteredArticlesList}
        page={AppRouteNames.ARTICLES}
        options={articleOptions}
      />
    </div>
  )
})
