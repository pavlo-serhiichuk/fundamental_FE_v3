import React from 'react'
import {Button} from '@/shared/ui/Button'
import {useCounterActions} from '../../module/slice/counterSlice'
import {useGetCounter} from '../../module/selectors/getCounter'

export const Counter = () => {
  const {value} = useGetCounter()
  // @ts-ignore
  const {incrementByAmount, increment, decrement} = useCounterActions()
  const onIncrement = () => {
    increment()
  }
  const onDecrement = () => {
    decrement()
  }
  const onIncByAmount = () => {
    incrementByAmount(10)
  }

  return (
    <div>
      <h1 data-testid="counter-value-title">
        {value}
      </h1>
      <Button theme="bordered" data-testid="inc-btn" onClick={onIncrement}>+ 1</Button>
      <Button theme="bordered" data-testid="dec-btn" onClick={onDecrement}>- 1</Button>
      <Button theme="bordered" data-testid="inc-by-amount-btn" onClick={onIncByAmount}>+ 10</Button>
    </div>
  )
}
