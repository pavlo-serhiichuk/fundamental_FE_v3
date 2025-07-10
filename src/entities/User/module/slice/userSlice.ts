import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LS_DESIGN_VERSION, USER_ID } from '@/shared/const/localStorage'
import { User, UserSchema } from '../../module/types/UserSchema'
import { setFeatureFlags } from '@/shared/lib/features'
import { saveJsonSettings } from '../services/saveJsonSettings'
import { initUserDataById } from '../services/initUserDataById'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload
      setFeatureFlags(action.payload.features)
      localStorage.setItem(USER_ID, JSON.stringify(action.payload.id))
    },
    logout: (state: UserSchema) => {
      state.authData = undefined
      localStorage.removeItem(USER_ID)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, action) => {})
      .addCase(
        initUserDataById.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.authData = action.payload
          setFeatureFlags(action.payload?.features)
          localStorage.setItem(
            LS_DESIGN_VERSION,
            JSON.stringify(action.payload?.features?.isV2 ? 'V2' : 'V1'),
          )
          state._inited = true
        },
      )
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
