import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {Input} from 'shared/ui/Input/Input'
import {getProfileError, getProfileLoading, type Profile} from 'entities/Profile'
import {CountrySelect} from 'entities/Country/ui/CountrySelect/CountrySelect'
import {CurrencySelect} from 'entities/Currency'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Text} from 'shared/ui/Text/Text'
import {Loader} from 'shared/ui/Loader/Loader'
import {cls} from 'shared/lib/cls/cls'
import * as s from './ProfileCard.module.scss'

interface ProfileCardProps {
  readonly?: boolean
  className?: string
  form: Profile | undefined
  onChangeFirstName?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeAvatar?: (value: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {t} = useTranslation('profile')
  const {
    readonly,
    className,
    form,
    onChangeFirstName,
    onChangeLastname,
    onChangeAge,
    onChangeAvatar,
  } = props
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)

  if (error) {
    return (
      <div className={cls(s.ProfileCard, {[s.error]: true}, [className])}>
        <Text title={error} />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={cls(s.ProfileCard, {}, [className])}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={cls(s.ProfileCard, {[s.editing]: !readonly}, [className])}>
      <div className={s.data}>
        <div className={s.avatarWrapper}>
          <Avatar src={form?.avatar || ''} alt="profile" size={100} />
        </div>
        {!readonly
          ? (
            <Input
              value={form?.avatar || ''}
              placeholder={t('Your avatar...')}
              onChange={onChangeAvatar}
              label={t('Avatar')}
            />
          )
          : null}
        <Input
          readOnly={!!readonly}
          value={form?.name || ''}
          placeholder={t('Your name...')}
          onChange={onChangeFirstName}
          label={t('Name')}
        />
        <Input
          readOnly={!!readonly}
          value={form?.lastname || ''}
          placeholder={t('Your lastname...')}
          label={t('Lastname')}
          onChange={onChangeLastname}
        />
        <Input
          readOnly={!!readonly}
          value={form?.age || ''}
          type="number"
          placeholder={t('Your age...')}
          label={t('Age')}
          onChange={onChangeAge}
        />
        <CountrySelect readonly={!!readonly} />
        <CurrencySelect readonly={!!readonly} />
      </div>
    </div>
  )
}
