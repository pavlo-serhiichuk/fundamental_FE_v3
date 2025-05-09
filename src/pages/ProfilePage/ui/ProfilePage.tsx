import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useMemo} from 'react'
import {ProfileCardEdit, ProfileCardView} from '@/features/ProfileCard'
import {profileReducer} from '@/entities/Profile'
import {fetchProfileData} from '@/entities/Profile/model/services/fetchProfileData/fetchProfileData'
import {useInitialEffect} from '@/shared/hooks/useInitialEffect'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {AppDispatch} from '@/app/providers/StoreProvider'
import {getProfileReadonly} from '@/entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import {Page} from '@/widgets/Page/Page'
import {ProfileRating} from '@/features/ProfileRating'
import {getUserAuthData} from '@/entities/User'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const {id: profileId} = useParams<{ id: string }>()
  const readonly = useSelector(getProfileReadonly)
  const userId = useSelector(getUserAuthData)?.id
  const isShowRating = useMemo(() => userId !== profileId, [userId, profileId])

  useInitialEffect(() => {
    if (profileId) {
      dispatch(fetchProfileData(profileId))
    }
  }, [profileId])

  if (!profileId) {
    return null
  }

  return (
    <DynamicReducerLoader reducers={reducers}>
      <Page>
        {readonly ? <ProfileCardView /> : <ProfileCardEdit />}
        {isShowRating && <ProfileRating profileId={profileId} />}
      </Page>
    </DynamicReducerLoader>
  )
}

export default ProfilePage
