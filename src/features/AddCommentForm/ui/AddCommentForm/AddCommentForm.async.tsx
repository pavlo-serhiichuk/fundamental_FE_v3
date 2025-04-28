import {FC, lazy} from 'react'
import {AddCommentFormProps} from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'))
// const AboutPageAsync = lazy(() => import('./AboutPage'));
