import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {useSelector} from 'react-redux'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {Button} from 'shared/ui/Button/Button'
import DynamicReducerLoader, {type ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {getUserAuthData} from 'entities/User'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {getArticleDetailsError} from 'features/ArticleDetails'
import {HStack} from 'shared/ui/Stack'
import {getAddCommentFormText} from '../../module/selectors/getAddCommentFormSelectors'
import {addCommentFormSliceActions, addCommentFormReducer} from '../../module/slice/addCommentFormSlice'
import * as s from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  sendComment: () => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const {t} = useTranslation()
  const {className, sendComment} = props
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
      <HStack className={s.AddCommentForm} gap="12">
        <HStack gap="16" max>
          <Avatar src={user?.avatar} alt={user?.username || ''} size={30} />
          <Input
            value={text || ''}
            onChange={onChangeComment}
            placeholder={t('Add comment:')}
          />
        </HStack>
        <Button className={s.button} disabled={!text} theme="bordered" onClick={sendComment}>{t('Send')}</Button>
      </HStack>
    </DynamicReducerLoader>
  )
}

export default AddCommentForm
