import {memo, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {OrderBy, SearchByName, SortBy} from 'entities/Filters'
import {ChangeListView} from 'features/ChangeListView'
import {articlesPageActions} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import {useDebounce} from 'shared/hooks/useDebounce'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {Tabs} from 'entities/Filters/ui/Tabs/Tabs'
import {AppRouteNames} from 'shared/config/routesConfig/routesConfig'
import * as s from './ArticlesFilters.module.scss'

export const ArticlesFilters = memo(() => {
  const dispatch = useAppDispatch()

  const fetchFilteredArticlesList = useCallback(() => {
    dispatch(articlesPageActions.setPageNumber(1))
    dispatch(fetchArticlesList({replace: true}))
  }, [dispatch])

  const debouncedFilteredArticlesList = useDebounce(fetchFilteredArticlesList, 500)
  return (
    <div className={cls(s.ArticlesFilters, {})}>
      <div className={s.controllers}>
        <div className={s.sortWrapper}>
          <OrderBy fetchData={debouncedFilteredArticlesList} />
          <SortBy fetchData={debouncedFilteredArticlesList} />
        </div>
        <ChangeListView />
      </div>
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
