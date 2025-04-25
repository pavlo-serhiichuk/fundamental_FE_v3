import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import {articlesPageActions} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {getArticlesPageInited} from 'pages/ArticlesPage/module/selectors/getArticlesPageInited'
import {getListView} from 'features/ChangeListView'
import {
  filtersActions, OrderByType, SortByType, TopicType,
} from 'entities/Filters'

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
      if (orderByFromUrl) dispatch(filtersActions.setOrder(orderByFromUrl as OrderByType))
      if (sortByFromUrl) dispatch(filtersActions.setSortField(sortByFromUrl as SortByType))
      if (searchValueFromUrl) dispatch(filtersActions.setSearchValue(searchValueFromUrl))
      if (topicTypeFromUrl) dispatch(filtersActions.setTopicType(topicTypeFromUrl as TopicType))
      dispatch(articlesPageActions.initArticlesPageState(listView))
      dispatch(fetchArticlesList())
    }
  },
)
