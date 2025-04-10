import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {type Profile, ValidationError} from '../../types/ProfileSchema'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidationError[]>>(
  'profile/fetchProfileData',
  async (articleId, thunkAPI) => {
    const {extra} = thunkAPI
    try {
      const response = await extra.api.get(`/profiles/${articleId}`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue([ValidationError.SERVER_ERROR])
    }
  },
)
