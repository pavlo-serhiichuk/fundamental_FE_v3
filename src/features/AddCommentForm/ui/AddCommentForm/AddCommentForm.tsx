import {type FC} from 'react'
import {cls} from 'shared/lib/cls/cls'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {useSelector} from 'react-redux'
import {getAddCommentFormText} from 'features/AddCommentForm/module/selectors/getAddCommentFormSelectors'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {Button} from 'shared/ui/Button/Button'
import DynamicReducerLoader, {type ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {getUserAuthData} from 'entities/User'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {getArticleDetailsError} from 'entities/Article'
import {addCommentFormSliceActions, addCommentFormSliceReducer} from '../../module/slice/addCommentFormSlice'
import * as s from './AddCommentForm.module.scss'

interface AddCommentFormProps {
  className?: string
  sendComment: () => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormSliceReducer,
}

export const AddCommentForm: FC<AddCommentFormProps> = (props) => {
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
  console.log(11, user?.avatar)
  return (
    <DynamicReducerLoader reducers={reducers}>
      <div className={cls(s.AddCommentForm, {}, [className])}>
        <Avatar src={user?.avatar} alt={user?.username || ''} size={30} />
        <Input className={s.commentInput} placeholder={t('Add comment:')} value={text || ''} onChange={onChangeComment} />
        <Button disabled={!text} theme="bordered" onClick={sendComment}>{t('Send')}</Button>
      </div>
    </DynamicReducerLoader>
  )
}
