import {type Profile, ValidationError} from '../../types/ProfileSchema'

export function validateProfileForm(profile: Profile): ValidationError[] {
  const errors: ValidationError[] = []

  if (!profile?.firstname) {
    errors.push(ValidationError.FIRSTNAME_ERROR)
  }

  if (!profile?.lastname) {
    errors.push(ValidationError.LASTNAME_ERROR)
  }

  if (!Number.isInteger(profile?.age)) {
    errors.push(ValidationError.AGE_ERROR)
  }

  if (!profile?.avatar?.includes('http')) {
    errors.push(ValidationError.AVATAR_ERROR)
  }

  return errors
}
