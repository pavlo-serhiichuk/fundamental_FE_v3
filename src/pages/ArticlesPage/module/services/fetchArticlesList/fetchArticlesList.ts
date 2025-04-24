import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Article} from 'entities/Article/model/types/article'
import {getArticlesPageNumber} from 'pages/ArticlesPage/module/selectors/getArticlesPageNumber'
import {getArticlesPageLimit} from 'pages/ArticlesPage/module/selectors/getArticlesPageLimit'
import {
  getFiltersOrder,
  getFiltersSearchValue,
  getFiltersSortBy,
} from 'features/Filters/module/selectors/getFiltersState'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps | undefined, ThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (props, thunkAPI) => {
    const {extra, getState} = thunkAPI
    const pageNumber = getArticlesPageNumber(getState())
    const limit = getArticlesPageLimit(getState())
    const searchValue = getFiltersSearchValue(getState())
    const order = getFiltersOrder(getState())
    const sortBy = getFiltersSortBy(getState())

    try {
      const response = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _page: pageNumber,
          _limit: limit,
          title_like: searchValue,
          _order: order,
          _sort: sortBy,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
