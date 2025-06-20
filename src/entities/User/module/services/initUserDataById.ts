import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { USER_ID } from '@/shared/const/localStorage'
import { User } from '../types/UserSchema'

export const initUserDataById = createAsyncThunk<
  User,
  void,
  ThunkConfig<string>
>('user/initUserDataById', async (newJsonSettings, thunkAPI) => {
  const { extra, getState } = thunkAPI
  const localStorageUserId = localStorage.getItem(USER_ID)
  if (localStorageUserId) {
    const userId = JSON.parse(localStorageUserId)
    try {
      if (userId) {
        const response = await extra.api.get(`/users/${userId}`)
        return response.data
      }
      throw new Error()
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  } else {
    console.log('user is not authenticated')
  }
})
