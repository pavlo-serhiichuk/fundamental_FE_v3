import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useCallback} from 'react'
import {cls} from '@/shared/lib/cls/cls'
import {getUserAuthData} from '@/entities/User'
import {RatingCard} from '@/entities/Rating/ui/RatingCard/RatingCard'
import {useFetchProfileRating, useRateProfile} from '../../api/profileRatingApi'
import * as s from './ProfileRating.module.scss'

export interface ProfileRatingProps {
  className?: string
  profileId: string
}

const ProfileRating = (props: ProfileRatingProps) => {
  const {className, profileId} = props
  const {t} = useTranslation()
  const userId = useSelector(getUserAuthData)?.id || '0'
  const [rateProfile] = useRateProfile()

  const {
    data: profileRating,
  } = useFetchProfileRating({profileId, userId})

  const handleRate = useCallback(async (starsCount: number, feedbackMessage?: string) => {
    try {
      await rateProfile({
        profileId,
        userId,
        rate: starsCount,
        feedback: feedbackMessage,
      }).unwrap()
    } catch (err) {
      console.error('Failed to submit rating:', err)
    }
  }, [profileId, userId, rateProfile])

  const title = profileRating?.length ? "You've rated this profile" : 'Rate this profile'

  const onAccept = useCallback((startsCount: number, feedbackMessage?: string) => {
    handleRate(startsCount, feedbackMessage)
  }, [handleRate])

  const onCancel = useCallback((startsCount: number) => {
    handleRate(startsCount)
  }, [handleRate])

  return (
    <div className={cls(s.ProfileRating, {}, [className])}>
      <RatingCard
        title={t(title)}
        ratingInfo={profileRating?.[0]}
        onAccept={onAccept}
        onCancel={onCancel}
        feedbackTitle={t('Rate this profile:')}
      />
    </div>
  )
}

export default ProfileRating
