import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/store'

export const [useGetCounter, getCounter] = buildSelector(
  (state: StateSchema) => state.counter,
)
