import {type ThunkConfig} from 'app/providers/StoreProvider'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {validateProfileForm} from '../../services/validateProfileForm/validateProfileForm'
import {type Profile, ValidationError} from '../../types/ProfileSchema'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string | ValidationError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {extra, getState} = thunkAPI
    const form = getProfileForm(getState())
    const validationErrors = validateProfileForm(form!)

    if (validationErrors.length) {
      return thunkAPI.rejectWithValue(validationErrors)
    }
    try {
      const response = await extra.api.put<Profile>(`/profile/${form?.id}`, form)

      if (!response.data) {
        throw new Error('error')
      }

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue([ValidationError.SERVER_ERROR])
    }
  },
)
