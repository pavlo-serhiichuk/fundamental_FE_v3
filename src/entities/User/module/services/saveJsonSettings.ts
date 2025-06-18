import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { JsonSettings } from '@/shared/types/jsonSettings'
import { getUserAuthData } from '../selectors/getUserAuthData'
import { getJsonSettings } from '../selectors/getJsonSettings'

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
  const { extra, getState } = thunkAPI
  const userId = getUserAuthData(getState())?.id
  const jsonSettings = getJsonSettings(getState())

  try {
    if (userId) {
      const response = await extra.api.patch(`/users/${userId}`, {
        jsonSettings: { ...jsonSettings, ...newJsonSettings },
      })
      return response.data
    }
    throw new Error()
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
