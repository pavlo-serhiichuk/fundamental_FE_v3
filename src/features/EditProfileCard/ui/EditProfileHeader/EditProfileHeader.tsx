import {type FC, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'
import {useSelector} from 'react-redux'
import {getProfileReadonly} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import {getProfileUpdating, getProfileValidationErrors, profileActions} from 'entities/Profile'
import {updateProfileData} from 'entities/Profile/model/services/updateProfileData/updateProfileData'
import {Text} from 'shared/ui/Text/Text'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {cls} from 'shared/lib/cls/cls'
import * as s from './EditProfileHeader.module.scss'

interface EditProfileHeaderProps {
  className?: string
}

export const EditProfileHeader: FC<EditProfileHeaderProps> = (props) => {
  const {t} = useTranslation()
  const {className} = props
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const validationErrors = useSelector(getProfileValidationErrors)
  const isUpdating = useSelector(getProfileUpdating)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly())
  }, [dispatch])

  const onCancel = useCallback(() => {
    dispatch(profileActions.resetForm())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={cls(s.EditProfileHeader, {}, [className])}>
      <div className={s.buttons}>
        {readonly
          ? (
            <Button onClick={onEdit} theme="bordered">{t('Edit')}</Button>
          )
          : (
            <>
              <Button disabled={isUpdating} onClick={onCancel} theme="cancel">{t('Cancel')}</Button>
              <Button disabled={isUpdating} onClick={onSave} theme="bordered">{t('Save')}</Button>
            </>
          )}

      </div>
      <div>
        {validationErrors?.map((error) => <Text key={error} theme="error" title={t(error)} />)}
      </div>
    </div>
  )
}
