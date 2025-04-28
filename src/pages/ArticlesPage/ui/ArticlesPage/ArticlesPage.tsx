import {type FC, useCallback} from 'react'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {Page} from 'widgets/Page/Page'
import {fetchNextArticlesList} from 'pages/ArticlesPage/module/services/fetchNextArticlesList/fetchNextArticlesList'
import {initArticlesList} from 'pages/ArticlesPage/module/services/initArticlesList/initArticlesList'
import {useSearchParams} from 'react-router-dom'
import {ArticlesFilters} from 'pages/ArticlesPage/ui/ArticlesFilters/ArticlesFilters'
import {ArticlesList} from 'entities/Article/ui/ArticlesList/ArticlesList'
import {useSelector} from 'react-redux'
import {getArticlesIsLoading} from 'pages/ArticlesPage/module/selectors/getArticlesIsLoading'
import {getListView} from 'features/ChangeListView'
import {articlesPageReducer, getArticlesList} from '../../module/slice/articlesPageSlice'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const isLoading = useSelector(getArticlesIsLoading)
  const articles = useSelector(getArticlesList.selectAll)
  const listView = useSelector(getListView)

  useInitialEffect(() => {
    dispatch(initArticlesList(searchParams))
  })

  const onScrollEnd = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onScrollEnd}>
        <ArticlesFilters />
        <ArticlesList isLoading={isLoading} articles={articles} listView={listView} />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
