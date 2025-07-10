import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import {
  updateFeatureFlagsMutation,
  UpdateFeatureFlagsOptions,
} from '../api/featureFlagsApi'
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatureFlags'

export const updateFeatureFlag = createAsyncThunk<
  any,
  UpdateFeatureFlagsOptions,
  ThunkConfig<string>
>('profile/fetchProfileData', async ({ userId, features }, thunkAPI) => {
  const { extra, dispatch } = thunkAPI
  try {
    const res = await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: {
          ...getAllFeatureFlags(),
          ...features,
        },
      }),
    )
    window.location.reload()
    return res
  } catch (e) {
    return thunkAPI.rejectWithValue('error')
  }
})
