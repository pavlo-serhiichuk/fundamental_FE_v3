import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ThunkConfig} from '@/app/providers/StoreProvider'
import {getUserAuthData} from '@/entities/User'
import {getAddCommentFormText, addCommentFormSliceActions} from '@/entities/Comment'
import {
  fetchArticleCommentsById,
} from '../fetchArticleCommentsById/fetchArticleCommentsById'

export const sendArticleComment = createAsyncThunk<void, string | undefined, ThunkConfig<string>>(
  'articleDetails/sendArticleComment',
  async (articleId, thunkAPI) => {
    const {extra} = thunkAPI
    const commentText = getAddCommentFormText(thunkAPI.getState())
    const user = getUserAuthData(thunkAPI.getState())

    try {
      const res = await extra.api.post('/comments', {
        text: commentText,
        articleId,
        userId: user?.id,
      })
      thunkAPI.dispatch(fetchArticleCommentsById(articleId))
      thunkAPI.dispatch(addCommentFormSliceActions.setText(''))
      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
