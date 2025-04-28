import {type StateSchema} from 'app/providers/StoreProvider'

export const getProfileUpdating = (state: StateSchema) => state.profile?.isUpdating
