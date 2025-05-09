import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ThunkConfig} from '@/app/providers/StoreProvider'
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList'
import {articlesPageActions} from '../../slice/articlesPageSlice'
import {getArticlesPageNumber} from '../../selectors/getArticlesPageNumber'
import {getArticlesPageHasMore} from '../../selectors/getArticlesPageHasMore'
import {getArticlesIsLoading} from '../../selectors/getArticlesIsLoading'

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
