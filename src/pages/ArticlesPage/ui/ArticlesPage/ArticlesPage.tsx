import {type FC, useCallback, useEffect} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {ChangeListView} from 'features/ChangeListView'
import {Page} from 'widgets/Page/Page'
import {fetchNextArticlesList} from 'pages/ArticlesPage/module/services/fetchNextArticlesList/fetchNextArticlesList'
import {initArticlesList} from 'pages/ArticlesPage/module/services/initArticlesList/initArticlesList'
import {OrderBy} from 'features/Filters/ui/OrderBy/OrderBy'
import {SortBy} from 'features/Filters/ui/SortBy/SortBy'
import {SearchByName} from 'features/Filters/ui/SearchByName/SearchByName'
import {useSelector} from 'react-redux'
import {
  getFiltersOrder,
  getFiltersSearchValue,
  getFiltersSortBy,
} from 'features/Filters/module/selectors/getFiltersState'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import {useDebounce} from 'shared/hooks/useDebounce'
import {useSearchParams} from 'react-router-dom'
import {ArticlesList} from '../ArticlesList/ArticlesList'
import {articlesPageActions, articlesPageReducer} from '../../module/slice/articlesPageSlice'
import * as s from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const {className} = props
  const order = useSelector(getFiltersOrder)
  const sortBy = useSelector(getFiltersSortBy)
  const searchValue = useSelector(getFiltersSearchValue)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesList(searchParams))
  })

  const fetchFilteredArticlesList = useCallback(() => {
    dispatch(articlesPageActions.setPageNumber(1))
    dispatch(fetchArticlesList({replace: true}))
  }, [dispatch, order, searchValue, sortBy])

  const debouncedFilteredArticlesList = useDebounce(fetchFilteredArticlesList, 500)

  const onScrollEnd = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onScrollEnd} className={cls(s.ArticlesPage, {}, [className])}>
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
        <ArticlesList />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
