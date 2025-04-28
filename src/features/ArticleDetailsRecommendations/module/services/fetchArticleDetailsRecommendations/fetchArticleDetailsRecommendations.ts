import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article/model/types/article'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticleDetailsRecommendations = createAsyncThunk<Article[], FetchArticlesListProps | undefined, ThunkConfig<string>>(
  'articleDetailsRecommendations/fetchArticleDetailsRecommendations',
  async (props, thunkAPI) => {
    const {extra, getState} = thunkAPI

    try {
      const response = await extra.api.get('/articles', {
        params: {
          _page: 1,
          _limit: 4,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
