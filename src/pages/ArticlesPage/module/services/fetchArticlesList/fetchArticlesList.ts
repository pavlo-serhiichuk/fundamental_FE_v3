import {createAsyncThunk} from '@reduxjs/toolkit'
import {type ThunkConfig} from '@/app/providers/StoreProvider'
import {type Article} from '@/entities/Article'
import {
  getFiltersOrder,
  getFiltersSearchValue,
  getFiltersSortBy,
  getFiltersTopicType,
} from '@/entities/Filters'
import {addQueryParam} from '@/shared/lib/addueryParam/addQueryParam'
import {getArticlesPageLimit} from '../../selectors/getArticlesPageLimit'
import {getArticlesPageNumber} from '../../selectors/getArticlesPageNumber'
import {getRouteArticles} from '@/shared/const/routers'

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
    const orderBy = getFiltersOrder(getState()) || 'null'
    const sortBy = getFiltersSortBy(getState())
    const topicType = getFiltersTopicType(getState())
    try {
      const response = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _page: pageNumber,
          _limit: limit,
          title_like: searchValue,
          _order: orderBy,
          _sort: sortBy,
          type_like: topicType === 'ALL' ? undefined : topicType,
        },
      })
      addQueryParam({
        orderBy, sortBy, searchValue, topicType,
      }, getRouteArticles())
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
