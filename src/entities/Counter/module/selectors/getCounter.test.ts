import {getCounter} from './getCounter'
import {StateSchema} from '../../../../app/providers/StoreProvider'

describe('getCounter', () => {
  const state: DeepPartial<StateSchema> = {
    counter: {value: 0},
  }
  test('works', () => {
    expect(getCounter(state as StateSchema)).toEqual({value: 0})
  })
})
