import { FC, lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'

/**
 * @deprecated, there is new components from V2 folder
 * */

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => import('./AddCommentForm'),
)
