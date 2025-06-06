import { useSelector } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider'

type Selector<T> = (state: StateSchema, ...args: any[]) => T
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T> {
  const useSelectorHook = (...args: any[]) =>
    useSelector((state: StateSchema) => selector(state, ...args))

  return [useSelectorHook, selector]
}
