import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { ScrollRecoverSchema } from '../types/ScrollRecoverSchema'

const initialState: ScrollRecoverSchema = { scroll: {} }

export const scrollRecoverSlice = createSlice({
  name: 'scrollRecover',
  initialState,
  reducers: {
    setScroll: (
      state: ScrollRecoverSchema,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[payload.path] = payload.position
    },
  },
})

export const { actions: scrollRecoverActions } = scrollRecoverSlice
export const { reducer: scrollRecoverReducer } = scrollRecoverSlice
