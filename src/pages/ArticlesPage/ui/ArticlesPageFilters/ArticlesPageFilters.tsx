import {memo, useCallback} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {
  OrderBy, SearchByName, SortBy, Tabs,
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

  const fetchFilteredArticlesList = useCallback(() => {
    dispatch(articlesPageActions.setPageNumber(1))
    dispatch(fetchArticlesList({replace: true}))
  }, [dispatch])

  const debouncedFilteredArticlesList = useDebounce(fetchFilteredArticlesList, 500)

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
      />
    </div>
  )
})
