import {type StateSchema} from '@/app/providers/StoreProvider'
import {buildSelector} from '@/shared/store'

export const [useGetProfileReadonly, getProfileReadonly] = buildSelector((state: StateSchema) => state.profile?.readonly)
