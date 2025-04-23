import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article/model/types/article'
import {getArticleDetailsMockState} from 'pages/ArticleDetailsPage/model/slice/articleState'
import {getArticlesPageNumber} from 'pages/ArticlesPage/module/selectors/getArticlesPageNumber'
import {getArticlesPageLimit} from 'pages/ArticlesPage/module/selectors/getArticlesPageLimit'

interface FetchArticlesListProps {
  page: number,
  // limit: number,
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articles/fetchNextArticlesList',
  async (props, thunkAPI) => {
    const {extra, getState} = thunkAPI
    const pageNumber = getArticlesPageNumber(getState())
    const limit = getArticlesPageLimit(getState())
    console.log('pageNumber', pageNumber)
    try {
      const response = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _page: props.page,
          _limit: limit,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
