import {type FC, useCallback} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {ChangeListView, getListView} from 'features/ChangeListView'
import {useSelector} from 'react-redux'
import {Page} from 'shared/ui/Page/Page'
import {getArticlesPageHasMore} from 'pages/ArticlesPage/module/selectors/getArticlesPageHasMore'
import {getArticlesIsLoading} from 'pages/ArticlesPage/module/selectors/getArticlesIsLoading'
import {getArticlesPageNumber} from 'pages/ArticlesPage/module/selectors/getArticlesPageNumber'
import {getArticlesPageLimit} from 'pages/ArticlesPage/module/selectors/getArticlesPageLimit'
import {ArticlesList} from '../ArticlesList/ArticlesList'
import {articlesPageActions, articlesPageReducer} from '../../module/slice/articlesPageSlice'
import {fetchArticlesList} from '../../module/services/fetchArticlesList/fetchArticlesList'
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
  const listView = useSelector(getListView)
  const hasMore = useSelector(getArticlesPageHasMore)
  const pageNumber = useSelector(getArticlesPageNumber)
  const limit = useSelector(getArticlesPageLimit)
  const isLoading = useSelector(getArticlesIsLoading)
  useInitialEffect(() => {
    dispatch(articlesPageActions.initArticlesPageState(listView))
    dispatch(fetchArticlesList({page: pageNumber}))
  })

  const onScrollEnd = useCallback(() => {
    if (hasMore && !isLoading && pageNumber) {
      dispatch(articlesPageActions.setPageNumber(pageNumber + 1))
      dispatch(fetchArticlesList({page: pageNumber + 1}))
    }
  }, [hasMore, pageNumber, limit, dispatch, isLoading])

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page onScrollEnd={onScrollEnd} className={cls(s.ArticlesPage, {}, [className])}>
        <div className={s.controllers}>
          <div />
          <ChangeListView />
        </div>
        <ArticlesList />
      </Page>
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
