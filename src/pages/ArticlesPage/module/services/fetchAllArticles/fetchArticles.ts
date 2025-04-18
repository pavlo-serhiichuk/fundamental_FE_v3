import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article/model/types/article'

export const fetchArticles = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
  'articles/fetchAllArticles',
  async (_, thunkAPI) => {
    const {extra} = thunkAPI
    try {
      const response = await extra.api.get('/articles')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
