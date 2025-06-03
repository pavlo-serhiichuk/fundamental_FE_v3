import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Input } from '@/shared/ui/Input'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Button } from '@/shared/ui/Button'
import DynamicReducerLoader, {
  type ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { getUserAuthData } from '@/entities/User'
import { Avatar } from '@/shared/ui/Avatar'
import { getArticleDetailsError } from '@/features/ArticleDetails'
import { HStack } from '@/shared/ui/Stack'
import { getAddCommentFormText } from '../../module/selectors/getAddCommentFormSelectors'
import {
  addCommentFormSliceActions,
  addCommentFormReducer,
} from '../../module/slice/addCommentFormSlice'
import * as s from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  sendComment: () => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const { t } = useTranslation()
  const { sendComment } = props
  const text = useSelector(getAddCommentFormText)
  const user = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()
  const articleError = useSelector(getArticleDetailsError)

  const onChangeComment = (value: string) => {
    dispatch(addCommentFormSliceActions.setText(value))
  }
  if (articleError) {
    return null
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <HStack
        className={s.AddCommentForm}
        gap="12"
        data-testid="AddCommentForm"
      >
        <HStack gap="16" max>
          <Avatar src={user?.avatar} alt={user?.username || ''} size={30} />
          <Input
            value={text || ''}
            onChange={onChangeComment}
            placeholder={t('Add comment:')}
            testId="AddCommentForm.Input"
          />
        </HStack>
        <Button
          className={s.button}
          disabled={!text}
          theme="bordered"
          onClick={sendComment}
          testId="AddCommentForm.SendButton"
        >
          {t('Send')}
        </Button>
      </HStack>
    </DynamicReducerLoader>
  )
}

export default AddCommentForm
