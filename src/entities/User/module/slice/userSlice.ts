import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AUTH_USER_DATA } from '@/shared/const/localStorage'
import { User, UserSchema } from '../../module/types/UserSchema'
import { setFeatureFlags } from '@/shared/lib/features'

const initialState: UserSchema = {
  _inited: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload
      if (action.payload.features) {
        setFeatureFlags(action.payload.features)
      }
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(AUTH_USER_DATA)
      if (user) {
        const json = JSON.parse(user)
        state.authData = json
        if (json?.features) {
          console.log('json', json)
          setFeatureFlags(json.features)
        }
      }
      state._inited = true
    },
    logout: (state: UserSchema) => {
      state.authData = undefined
      localStorage.removeItem(AUTH_USER_DATA)
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
