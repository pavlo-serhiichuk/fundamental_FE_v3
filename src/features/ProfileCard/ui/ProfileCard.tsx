import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {
  getProfileData,
  getProfileError,
  getProfileLoading,
  profileActions,
} from '@/entities/Profile'
import {Text} from '@/shared/ui/Text/Text'
import {cls} from '@/shared/lib/cls/cls'
import {Avatar} from '@/shared/ui/Avatar/Avatar'
import PinIcon from '@/shared/assets/icons/map-pin.svg'
import {Button} from '@/shared/ui/Button/Button'
import {useCallback} from 'react'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {getUserAuthData} from '@/entities/User'
import {useParams} from 'react-router-dom'
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton'
import * as s from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {className} = props
  const {t} = useTranslation('profile')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)
  const data = useSelector(getProfileData)
  const user = useSelector(getUserAuthData)
  const {id} = useParams<{ id: string }>()
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly())
  }, [dispatch])

  if (error) {
    return (
      <div className={cls(s.ProfileCard, {}, [className])}>
        <Text text={error} />
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className={cls(s.ProfileCard, {}, [className])}>
        <div className={s.header}>
          <div>
            <Skeleton height={70} width={70} radius="50%" />
          </div>
          <div>
            <Skeleton height={20} width={100} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cls(s.ProfileCard, {}, [className])}>
      <div className={s.header}>
        <Avatar src={data?.avatar || ''} alt="profile" size={70} />
        <div>
          <Text title={`${data?.firstname} ${data?.lastname}`} size="text_size_s" />
          <Text text={`${data?.age} ${t('years old')}`} fontStyle="italic-fs" />
          <div className={s.location}>
            <PinIcon />
            <Text text={`${data?.country}, ${data?.city}`} size="text_size_m" fontStyle="italic-fs" />
          </div>
        </div>
      </div>
      {id === user?.id ? (
        <div>
          <Button theme="bordered" onClick={onEdit}>Edit</Button>
        </div>
      ) : null}
    </div>
  )
}
