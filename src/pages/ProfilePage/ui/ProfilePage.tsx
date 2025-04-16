import {profileReducer} from 'entities/Profile'
import {fetchProfileData} from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import {EditProfileCard} from 'features/EditProfileCard'
import {useParams} from 'react-router-dom'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'
import {AppDispatch} from 'app/providers/StoreProvider'
import {useSelector} from 'react-redux'
import {getProfileReadonly} from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import {ProfileCard} from 'features/ProfileCard'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const {id} = useParams<{ id: string }>()
  const readonly = useSelector(getProfileReadonly)

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  return (
    <DynamicReducerLoader reducers={reducers}>
      {readonly ? <ProfileCard /> : <EditProfileCard />}
    </DynamicReducerLoader>
  )
}

export default ProfilePage
