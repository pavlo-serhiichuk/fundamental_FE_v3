import i18n from 'i18next'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type User, userActions} from 'entities/User'
import {AUTH_USER_DATA} from 'shared/const/localStorage'
import {ThunkConfig} from 'app/providers/StoreProvider'

interface FetchSignInProps {
  username: string
  password: string
}

// createAsyncThunk
// - це actionCreator який повертає в результаті action
// цей action потрапляє в dispatch і в результаті повертає якісь данні
export const fetchSignIn = createAsyncThunk<User, FetchSignInProps, ThunkConfig<string>>(
  'users/fetchByIdStatus',
  async (payload, thunkAPI) => {
    const {extra, dispatch} = thunkAPI
    try {
      const response = await extra.api.post('/login', payload)
      localStorage.setItem(AUTH_USER_DATA, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      extra.navigate?.('/about')
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('userIsNotFound'))
    }
  },
)
