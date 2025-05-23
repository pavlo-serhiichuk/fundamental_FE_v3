import {useCallback} from 'react'
import {useSearchParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useInitialEffect} from '@/shared/hooks/useInitialEffect'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {Page} from '@/widgets/Page'
import {ArticlesList} from '@/entities/Article'
import {changeListViewActions, getListView} from '@/features/ChangeListView'
import {ArticlesPageFilters} from '../ArticlesPageFilters/ArticlesPageFilters'
import {getArticlesIsLoading} from '../../module/selectors/getArticlesIsLoading'
import {initArticlesList} from '../../module/services/initArticlesList/initArticlesList'
import {fetchNextArticlesList} from '../../module/services/fetchNextArticlesList/fetchNextArticlesList'
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
    dispatch(changeListViewActions.initListView())
  })

  const onScrollEnd = useCallback(() => {
    dispatch(fetchNextArticlesList())
  }, [dispatch])

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onScrollEnd} data-testid="ArticlesPage">
        <ArticlesPageFilters />
        <ArticlesList isLoading={isLoading} articles={articles} listView={listView} />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
