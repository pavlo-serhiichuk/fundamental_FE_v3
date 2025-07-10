import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '../../types/article'
import { getCreateArticleData } from '../../selectors/getCreateArticleData'
import { getUserAuthData } from '@/entities/User'

export const createNewArticle = createAsyncThunk<
  Article,
  void,
  ThunkConfig<string>
>('createArticle/createNewArticle', async (_, thunkAPI) => {
  const { extra, getState } = thunkAPI
  const newArticle = getCreateArticleData(getState())
  const userId = getUserAuthData(getState())?.id
  try {
    const response = await extra.api.post(`/articles`, {
      ...newArticle,
      userId,
    })
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
