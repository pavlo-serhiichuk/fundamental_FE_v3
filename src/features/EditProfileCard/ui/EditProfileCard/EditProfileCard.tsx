import {type FC, useCallback} from 'react'
import {useSelector} from 'react-redux'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import {Currency, CurrencySelect} from 'entities/Currency'
import {Country} from 'entities/Country'
import {
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileUpdating,
  getProfileReadonly,
  getProfileValidationErrors,
  updateProfileData,
  profileActions,
} from 'entities/Profile'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Input} from 'shared/ui/Input/Input'
import {CountrySelect} from 'entities/Country/ui/CountrySelect/CountrySelect'
import {useTranslation} from 'react-i18next'
import {cls} from 'shared/lib/cls/cls'
import {Text} from 'shared/ui/Text/Text'
import {Loader} from 'shared/ui/Loader/Loader'
import {Button} from 'shared/ui/Button/Button'
import {HStack, VStack} from 'shared/ui/Stack'
import * as s from './EditProfileCard.module.scss'

interface EditProfileCardProps {
  className?: string
}

export const EditProfileCard: FC<EditProfileCardProps> = () => {
  const {t} = useTranslation('profile')
  const dispatch = useAppDispatch()
  const readonly = useSelector(getProfileReadonly)
  const form = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)
  const isUpdating = useSelector(getProfileUpdating)
  const validationErrors = useSelector(getProfileValidationErrors)

  const onChangeFirstName = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({firstname: value}))
  }, [dispatch])
  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({lastname: value}))
  }, [dispatch])
  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({age: Number(value)}))
  }, [dispatch])
  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.updateProfileForm({avatar: value}))
  }, [dispatch])
  const onChangeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.updateProfileForm({currency: value}))
  }, [dispatch])
  const onChangeCountry = useCallback((value: Country) => {
    dispatch(profileActions.updateProfileForm({country: value}))
  }, [dispatch])
  const onCancel = useCallback(() => {
    dispatch(profileActions.resetForm())
  }, [dispatch])
  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  if (error) {
    return (
      <div className={cls(s.EditProfileCard, {[s.error]: true})}>
        <Text title={error} />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={cls(s.EditProfileCard, {})}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={s.EditProfileCard} data-testid="EditProfileCard">
      {validationErrors?.map((error) => (
        <Text
          key={error}
          theme="error"
          text={t(error)}
          testId={`EditProfileCard.${error}`}
        />
      ))}
      <VStack gap="10">
        <div className={s.avatarWrapper}>
          <Avatar src={form?.avatar || ''} alt="profile" size={100} />
        </div>
        <Input
          readOnly={isUpdating}
          value={form?.avatar || ''}
          placeholder={t('Your avatar...')}
          onChange={onChangeAvatar}
          label={t('Avatar')}
          testId="Input.Avatar"
        />
        <Input
          readOnly={isUpdating}
          value={form?.firstname || ''}
          placeholder={t('Your name...')}
          onChange={onChangeFirstName}
          label={t('Name')}
          testId="Input.Firstname"
        />
        <Input
          readOnly={isUpdating}
          value={form?.lastname || ''}
          placeholder={t('Your lastname...')}
          label={t('Lastname')}
          onChange={onChangeLastname}
          testId="Input.Lastname"
        />
        <Input
          readOnly={isUpdating}
          value={form?.age || ''}
          type="number"
          placeholder={t('Your age...')}
          label={t('Age')}
          onChange={onChangeAge}
          testId="Input.Age"
        />
        <HStack gap="16" className={s.selects}>
          <CountrySelect
            readonly={isUpdating}
            value={form?.country}
            onChange={onChangeCountry}
          />
          <CurrencySelect
            readonly={isUpdating}
            value={form?.currency}
            onChange={onChangeCurrency}
          />
        </HStack>
      </VStack>
      <HStack justify="end" gap="8" className={s.bottom}>
        <Button
          testId="Cancel.Button"
          disabled={isUpdating}
          onClick={onCancel}
          theme="cancel"
        >
          {t('Cancel')}
        </Button>
        <Button
          testId="Save.Button"
          disabled={isUpdating}
          onClick={onSave}
          theme="bordered"
        >
          {t('Save')}
        </Button>
      </HStack>
    </div>
  )
}
