import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AUTH_USER_DATA} from 'shared/const/localStorage'
import {User, UserSchema} from '../../module/types/UserSchema'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(AUTH_USER_DATA)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state: UserSchema) => {
      state.authData = undefined
      localStorage.removeItem(AUTH_USER_DATA)
    },
  },
})

export const {actions: userActions} = userSlice
export const {reducer: userReducer} = userSlice
