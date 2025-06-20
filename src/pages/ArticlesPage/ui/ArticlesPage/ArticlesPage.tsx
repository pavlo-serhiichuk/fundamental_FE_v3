import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArticlesPageGreeting } from '@/features/ArticlesPageGreeting'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import DynamicReducerLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { Page } from '@/widgets/Page'
import { ArticlesList } from '@/entities/Article'
import {
  ChangeListView,
  changeListViewActions,
  getListView,
} from '@/features/ChangeListView'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { getArticlesIsLoading } from '../../module/selectors/getArticlesIsLoading'
import { initArticlesList } from '../../module/services/initArticlesList/initArticlesList'
import { fetchNextArticlesList } from '../../module/services/fetchNextArticlesList/fetchNextArticlesList'
import {
  articlesPageReducer,
  getArticlesList,
} from '../../module/slice/articlesPageSlice'
import { ToggleFeature } from '@/shared/lib/features/ToggleFeature/ToggleFeature'
import { ContentStickyLayout } from '@/shared/layouts/ContentStickyLayout'

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
      <ArticlesPageGreeting />
      <ToggleFeature
        feature="isV2"
        on={
          <ContentStickyLayout
            content={
              <Page onScrollEnd={onScrollEnd} data-testid="ArticlesPage">
                <ArticlesList
                  isLoading={isLoading}
                  articles={articles}
                  listView={listView}
                />
              </Page>
            }
            right={<ArticlesPageFilters />}
            left={<ChangeListView />}
          />
        }
        off={
          <Page onScrollEnd={onScrollEnd} data-testid="ArticlesPage">
            <ArticlesPageGreeting />
            <ArticlesPageFilters />
            <ArticlesList
              isLoading={isLoading}
              articles={articles}
              listView={listView}
            />
          </Page>
        }
      />
    </DynamicReducerLoader>
  )
}

export default ArticlesPage
