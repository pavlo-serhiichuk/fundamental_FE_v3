import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {getAddCommentFormText} from 'features/AddCommentForm/module/selectors/getAddCommentFormSelectors'
import {getUserAuthData} from 'entities/User'
import {getArticleDetailsData} from 'pages/ArticleDetailsPage'
import {
  fetchArticleCommentsById,
} from 'features/ArticleDetailsComments/model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import {addCommentFormSliceActions} from 'features/AddCommentForm/module/slice/addCommentFormSlice'

export const sendArticleComment = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'articleDetails/sendArticleComment',
  async (_, thunkAPI) => {
    const {extra} = thunkAPI
    const commentText = getAddCommentFormText(thunkAPI.getState())
    const user = getUserAuthData(thunkAPI.getState())
    const article = getArticleDetailsData(thunkAPI.getState())

    try {
      const res = await extra.api.post('/comments', {
        text: commentText,
        articleId: article?.id,
        userId: user?.id,
      })
      thunkAPI.dispatch(fetchArticleCommentsById(article?.id))
      thunkAPI.dispatch(addCommentFormSliceActions.setText(''))
      return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
