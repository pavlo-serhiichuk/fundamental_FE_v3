import {addCommentFormReducer, addCommentFormSliceActions} from './addCommentFormSlice'
import {AddCommentForm} from '../types/addComment'

describe('AddCommentFormSlice', () => {
  test('set text', () => {
    const state: DeepPartial<AddCommentForm> = {text: ''}
    expect(
      addCommentFormReducer(
      state as AddCommentForm,
      addCommentFormSliceActions.setText('comment'),
      ),
    ).toEqual({text: 'comment'})
  })
})
