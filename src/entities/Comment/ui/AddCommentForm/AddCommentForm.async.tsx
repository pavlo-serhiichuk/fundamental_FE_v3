import {FC, lazy} from 'react'
import {AddCommentFormProps} from './AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'))
// const AboutPageAsync = lazy(() => import('./AboutPage'));
