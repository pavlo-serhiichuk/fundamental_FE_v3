import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type AddCommentForm} from 'features/AddCommentForm/module/types/addComment'

const initialState: AddCommentForm = {text: ''}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state: AddCommentForm, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const {actions: addCommentFormSliceActions} = addCommentFormSlice
export const {reducer: addCommentFormReducer} = addCommentFormSlice
