import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from '../types/ProfileSchema'
import { profileInitialState } from './profileState'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = profileInitialState

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileForm: (
      state: ProfileSchema,
      action: PayloadAction<Profile>,
    ) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    setReadonly: (state: ProfileSchema) => {
      state.readonly = !state.readonly
    },
    resetForm: (state: ProfileSchema) => {
      state.readonly = true
      state.form = state.data
      state.validationErrors = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state: ProfileSchema, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
        },
      )
      .addCase(
        fetchProfileData.rejected,
        (state: ProfileSchema, action: any) => {
          state.isLoading = false
          state.validationErrors = action.payload
        },
      )
      .addCase(updateProfileData.pending, (state: ProfileSchema) => {
        state.isUpdating = true
        state.validationErrors = []
      })
      .addCase(
        updateProfileData.fulfilled,
        (state: ProfileSchema, action: PayloadAction<Profile>) => {
          state.isUpdating = false
          state.data = action.payload
          state.form = action.payload
          state.readonly = true
          state.validationErrors = []
        },
      )
      .addCase(
        updateProfileData.rejected,
        (state: ProfileSchema, action: any) => {
          state.isUpdating = false
          state.validationErrors = action.payload
        },
      )
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
