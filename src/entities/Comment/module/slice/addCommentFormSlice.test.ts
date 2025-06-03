import {
  addCommentFormReducer,
  addCommentFormSliceActions,
} from './addCommentFormSlice'
import { AddCommentSchema } from '../types/AddCommentSchema'

describe('AddCommentFormSlice', () => {
  test('set text', () => {
    const state: DeepPartial<AddCommentSchema> = { text: '' }
    expect(
      addCommentFormReducer(
        state as AddCommentSchema,
        addCommentFormSliceActions.setText('comment'),
      ),
    ).toEqual({ text: 'comment' })
  })
})
