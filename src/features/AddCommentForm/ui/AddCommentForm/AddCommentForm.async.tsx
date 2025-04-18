import {FC, lazy} from 'react'
import {AddCommentFormProps} from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise<any>((resolve) => {
  setTimeout(() => resolve(import('./AddCommentForm')), 0)
}))
// const AboutPageAsync = lazy(() => import('./AboutPage'));
