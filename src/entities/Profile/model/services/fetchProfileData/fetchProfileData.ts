import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {ValidationError} from '../../consts/consts'
import {type Profile} from '../../types/ProfileSchema'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidationError[]>>(
  'profile/fetchProfileData',
  async (articleId, thunkAPI) => {
    const {extra} = thunkAPI
    try {
      const response = await extra.api.get(`/profile/${articleId}`)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue([ValidationError.SERVER_ERROR])
    }
  },
)
