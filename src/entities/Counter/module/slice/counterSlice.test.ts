import {CounterSchema} from 'entities/Counter'
import {counterActions, counterReducer} from './counterSlice'

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({value: 11})
  })
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({value: 9})
  })
  test('undefined', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({value: 1})
  })
})
