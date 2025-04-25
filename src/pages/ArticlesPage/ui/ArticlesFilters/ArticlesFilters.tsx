import {memo, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {
  getFiltersOrder,
  getFiltersSearchValue,
  getFiltersSortBy,
  getFiltersTopicType,
  OrderBy,
  SearchByName,
  SortBy,
} from 'entities/Filters'
import {ChangeListView} from 'features/ChangeListView'
import {articlesPageActions} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import {useDebounce} from 'shared/hooks/useDebounce'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {Tabs} from 'entities/Filters/ui/Tabs/Tabs'
import {ArticleTopicType} from 'entities/Article'
import {AppRouteNames} from 'shared/config/routesConfig/routesConfig'
import * as s from './ArticlesFilters.module.scss'

interface ArticlesFiltersProps {
  className?: string
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {className} = props
  const dispatch = useAppDispatch()
  const order = useSelector(getFiltersOrder)
  const sortBy = useSelector(getFiltersSortBy)
  const searchValue = useSelector(getFiltersSearchValue)
  const topicType = useSelector(getFiltersTopicType)

  const fetchFilteredArticlesList = useCallback(() => {
    dispatch(articlesPageActions.setPageNumber(1))
    dispatch(fetchArticlesList({replace: true}))
  }, [dispatch, order, searchValue, sortBy, topicType])

  const debouncedFilteredArticlesList = useDebounce(fetchFilteredArticlesList, 500)
  return (
    <div className={cls(s.ArticlesFilters, {}, [className])}>
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
