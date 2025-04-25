import {type FC, useCallback} from 'react'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {Page} from 'widgets/Page/Page'
import {fetchNextArticlesList} from 'pages/ArticlesPage/module/services/fetchNextArticlesList/fetchNextArticlesList'
import {initArticlesList} from 'pages/ArticlesPage/module/services/initArticlesList/initArticlesList'
import {useSearchParams} from 'react-router-dom'
import {ArticlesFilters} from 'pages/ArticlesPage/ui/ArticlesFilters/ArticlesFilters'
import {ArticlesList} from '../ArticlesList/ArticlesList'
import {articlesPageReducer} from '../../module/slice/articlesPageSlice'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const dispatch = useAppDispatch()
  const {className} = props
  const [searchParams] = useSearchParams()

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
        <ArticlesList />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
