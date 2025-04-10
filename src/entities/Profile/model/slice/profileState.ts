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
  avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
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
