import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article/model/types/article'
import {getArticlesPageNumber} from 'pages/ArticlesPage/module/selectors/getArticlesPageNumber'
import {getArticlesPageLimit} from 'pages/ArticlesPage/module/selectors/getArticlesPageLimit'

export const fetchArticlesList = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (props, thunkAPI) => {
    const {extra, getState} = thunkAPI
    const pageNumber = getArticlesPageNumber(getState())
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _page: pageNumber,
          _limit: limit,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
