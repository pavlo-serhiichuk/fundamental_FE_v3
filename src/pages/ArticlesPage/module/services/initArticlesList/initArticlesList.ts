import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {fetchArticlesList} from 'pages/ArticlesPage/module/services/fetchArticlesList/fetchArticlesList'
import {articlesPageActions} from 'pages/ArticlesPage/module/slice/articlesPageSlice'
import {getArticlesPageInited} from 'pages/ArticlesPage/module/selectors/getArticlesPageInited'
import {getListView} from 'features/ChangeListView'

export const initArticlesList = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'articlesPage/initArticlesList',
  async (_, thunkAPI) => {
    const {dispatch, getState} = thunkAPI
    const inited = getArticlesPageInited(getState())
    const listView = getListView(getState())

    if (!inited) {
      dispatch(articlesPageActions.initArticlesPageState(listView))
      dispatch(fetchArticlesList())
    }
  },
)
