import {type ThunkConfig} from '@/app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Comment} from '@/entities/Comment'

export const fetchArticleCommentsById = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'articleDetailsComments/fetchArticleCommentsById',
  async (articleId, thunkAPI) => {
    const {extra} = thunkAPI
    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
