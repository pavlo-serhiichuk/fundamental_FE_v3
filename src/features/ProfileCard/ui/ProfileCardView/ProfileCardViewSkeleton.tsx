import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import {
  getProfileData,
  getProfileError,
  getProfileLoading,
  profileActions,
} from '@/entities/Profile'
import { Text } from '@/shared/ui/Text'
import { cls } from '@/shared/lib/cls/cls'
import { Avatar } from '@/shared/ui/Avatar'
import PinIcon from '@/shared/assets/icons/map-pin.svg'
import { Button } from '@/shared/ui/Button'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'
import * as s from './ProfileCardView.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCardViewSkeleton = (props: ProfileCardProps) => {
  return (
    <div className={cls(s.ProfileCard, {}, [props.className])}>
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
