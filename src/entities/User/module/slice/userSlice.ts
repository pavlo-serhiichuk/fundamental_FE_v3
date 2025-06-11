import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_ID } from '@/shared/const/localStorage'
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
    // initAuthData: (state: UserSchema) => {
    //   const user = localStorage.getItem(USER_ID)
    //   if (user) {
    //     const json = JSON.parse(user)
    //     state.authData = json
    //     if (json?.features) {
    //       setFeatureFlags(json.features)
    //     }
    //   }
    //   state._inited = true
    // },
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
          setFeatureFlags(action.payload.features)
          state._inited = true
        },
      )
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
