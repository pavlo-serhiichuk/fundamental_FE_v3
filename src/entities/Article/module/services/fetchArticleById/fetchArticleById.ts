import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '@/entities/Article'

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>('editArticle/fetchArticleById', async (articleId, thunkAPI) => {
  const { extra } = thunkAPI
  try {
    if (!articleId) {
      throw new Error()
    }
    const response = await extra.api.get(`/articles/${articleId}`, {
      params: {
        _expand: 'user',
      },
    })
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
