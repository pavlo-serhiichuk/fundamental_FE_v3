import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article/model/types/article'

export const fetchArticlesList = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (_, thunkAPI) => {
    const {extra} = thunkAPI
    try {
      const response = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
