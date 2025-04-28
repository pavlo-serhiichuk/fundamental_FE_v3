import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {getArticlesPageNumber} from 'pages/ArticlesPage/module/selectors/getArticlesPageNumber'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import {articlesPageActions} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {getArticlesPageHasMore} from 'pages/ArticlesPage/module/selectors/getArticlesPageHasMore'
import {getArticlesIsLoading} from 'pages/ArticlesPage/module/selectors/getArticlesIsLoading'

export const fetchNextArticlesList = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'articles/fetchNextArticlesList',
  async (_, thunkAPI) => {
    const {dispatch, getState} = thunkAPI
    const hasMore = getArticlesPageHasMore(getState())
    const isLoading = getArticlesIsLoading(getState())
    const pageNumber = getArticlesPageNumber(getState())

    if (hasMore && !isLoading && pageNumber) {
      dispatch(articlesPageActions.setPageNumber(pageNumber + 1))
      dispatch(fetchArticlesList())
    }
  },
)
