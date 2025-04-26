import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type AddCommentSchema} from 'features/AddCommentForm/module/types/addComment'

const initialState: AddCommentSchema = {text: ''}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state: AddCommentSchema, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const {actions: addCommentFormSliceActions} = addCommentFormSlice
export const {reducer: addCommentFormReducer} = addCommentFormSlice
