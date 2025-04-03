import {Modal} from 'shared/ui/Modal/Modal'
import {SignInForm} from 'features/SignIn/ui/SignInForm/SignInForm'

interface SignInModalProps {
    isOpen: boolean
    onClose: () => void
}

export const SignInModal = (props: SignInModalProps) => {
  const {isOpen, onClose} = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <SignInForm />
    </Modal>
  )
}
