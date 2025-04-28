import {type Profile, type ProfileSchema} from 'entities/Profile'

export const profileInitialState: ProfileSchema = {
  form: undefined,
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  isUpdating: false,
  updateError: undefined,
  validationErrors: [],
}

export const profileMockForm: Profile = {
  id: '1',
  name: 'Name',
  lastname: 'Lastname',
  age: 22,
  city: 'City',
  country: 'Ukraine',
  currency: 'UAH',
  username: 'Username',
  avatar: 'https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/12/17/1261051924334/Scene-from-Avatar-2009-001.jpg?width=465&dpr=1&s=none&crop=none',
}

export const profileMockState: ProfileSchema = {
  form: profileMockForm,
  data: profileMockForm,
  isLoading: false,
  error: undefined,
  readonly: true,
  isUpdating: false,
  updateError: undefined,
  validationErrors: [],
}
