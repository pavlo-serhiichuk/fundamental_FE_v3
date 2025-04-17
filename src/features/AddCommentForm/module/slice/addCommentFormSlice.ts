import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import {type AddComment} from 'features/AddCommentForm/module/types/addComment'

const initialState: AddComment = {text: ''}

export const addCommentFormSlice = createSlice({
  name: 'addCommentFormSlice',
  initialState,
  reducers: {
    setText: (state: AddComment, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const {actions: addCommentFormSliceActions} = addCommentFormSlice
export const {reducer: addCommentFormSliceReducer} = addCommentFormSlice
