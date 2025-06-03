import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { ProfileCardEdit, ProfileCardView } from '@/features/ProfileCard'
import {
  profileReducer,
  fetchProfileData,
  useGetProfileReadonly,
} from '@/entities/Profile'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import DynamicReducerLoader, {
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import { AppDispatch } from '@/app/providers/StoreProvider'
import { Page } from '@/widgets/Page'
import { ProfileRating } from '@/features/ProfileRating'
import { getUserAuthData } from '@/entities/User'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const { id: profileId } = useParams<{ id: string }>()
  const readonly = useGetProfileReadonly()
  const userId = useSelector(getUserAuthData)?.id
  const isShowRating = useMemo(() => userId !== profileId, [userId, profileId])

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId))
    }
  })
  if (!profileId) {
    return null
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page data-testid="ProfilePage">
        {readonly ? <ProfileCardView /> : <ProfileCardEdit />}
        {isShowRating && <ProfileRating profileId={profileId} />}
      </Page>
    </DynamicReducerLoader>
  )
}

export default ProfilePage
