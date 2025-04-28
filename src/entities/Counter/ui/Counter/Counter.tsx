import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button} from 'shared/ui/Button/Button'
import {counterActions} from '../../module/slice/counterSlice'
import {getCounterValue} from '../../module/selectors/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <div>
      <h1 data-testid="counter-value-title">
        {value}
      </h1>
      <Button theme="bordered" data-testid="inc-btn" onClick={increment}>+ 1</Button>
      <Button theme="bordered" data-testid="dec-btn" onClick={decrement}>- 1</Button>
    </div>
  )
}
