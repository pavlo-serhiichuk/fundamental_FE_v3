import {type AsyncThunkAction} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider'
import axios, {type AxiosStatic} from 'axios'

type ActionCreatorType<Return, Arg, RejectValue> =
  (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  api: jest.MockedFunctionDeep<AxiosStatic>

  navigate: jest.MockedFn<any>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk(arg?: Arg) {
    const action = this.actionCreator(arg as Arg)
    return action(
      this.dispatch,
      this.getState,
      {api: this.api, navigate: this.navigate},
    )
  }
}
