import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '@/entities/Article'

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
  const { extra } = thunkAPI
  try {
    if (articleId) {
      const response = await extra.api.get(`/articles/${articleId}`)
      return response.data
    }
    throw new Error()
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
