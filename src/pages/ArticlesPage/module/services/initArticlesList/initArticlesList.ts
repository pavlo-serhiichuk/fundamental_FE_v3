import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {getListView} from 'features/ChangeListView'
import {
  filtersActions, OrderByType, SortByType, TopicType,
} from 'entities/Filters'
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList'
import {articlesPageActions} from '../../slice/articlesPageSlice'
import {getArticlesPageInited} from '../../selectors/getArticlesPageInited'

export const initArticlesList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesList',
  async (searchParams, thunkAPI) => {
    const {dispatch, getState} = thunkAPI
    const inited = getArticlesPageInited(getState())
    const listView = getListView(getState())

    if (!inited) {
      const orderByFromUrl = searchParams.get('orderBy')
      const sortByFromUrl = searchParams.get('sortBy')
      const searchValueFromUrl = searchParams.get('searchValue')
      const topicTypeFromUrl = searchParams.get('topicType')
      if (orderByFromUrl) dispatch(filtersActions.setOrderBy(orderByFromUrl as OrderByType))
      if (sortByFromUrl) dispatch(filtersActions.setSortBy(sortByFromUrl as SortByType))
      if (searchValueFromUrl) dispatch(filtersActions.setSearchValue(searchValueFromUrl))
      if (topicTypeFromUrl) dispatch(filtersActions.setTopicType(topicTypeFromUrl as TopicType))
      dispatch(articlesPageActions.initArticlesPageState(listView))
      dispatch(fetchArticlesList())
    }
  },
)
