import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type Article } from '../../types/article'
import { getEditArticleData } from '../../selectors/getEditArticleData'

export const editArticleById = createAsyncThunk<
  Article,
  void,
  ThunkConfig<string>
>('articleDetails/editArticleById', async (_, thunkAPI) => {
  const { extra, getState } = thunkAPI
  const editedArticle = getEditArticleData(getState())
  try {
    if (editedArticle?.id) {
      const response = await extra.api.put(
        `/articles/${editedArticle?.id}`,
        editedArticle,
      )
      return response.data
    }
    throw new Error()
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
