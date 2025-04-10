import {profileReducer} from 'entities/Profile'
import {fetchProfileData} from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import {EditProfileCard} from 'features/EditProfileCard'
import {useParams} from 'react-router-dom'
import {useInitialEffect} from 'shared/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/hooks/useAppDispatch'
import DynamicReducerLoader, {ReducersList} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader'

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const {id} = useParams<{ id: string }>()

  useInitialEffect(() => {
    console.log('id', id)
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  return (
    <DynamicReducerLoader reducers={reducers}>
      <EditProfileCard />
    </DynamicReducerLoader>
  )
}

export default ProfilePage
