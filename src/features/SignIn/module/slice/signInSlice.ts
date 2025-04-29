import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {fetchSignIn} from '../thunks/fetchSignIn'
import {getSignInInitialState} from './getSignInInitialState'
import {type SignInSchema} from '../types/signInSchema'

const initialState: SignInSchema = getSignInInitialState()

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setUsername(state: SignInSchema, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword(state: SignInSchema, action: PayloadAction<string>) {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignIn.pending, (state: SignInSchema) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchSignIn.fulfilled, (state: SignInSchema, action: any) => {
        state.isLoading = false
      })
      .addCase(fetchSignIn.rejected, (state: SignInSchema, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {actions: signInActions} = signInSlice
export const {reducer: signInReducer} = signInSlice
