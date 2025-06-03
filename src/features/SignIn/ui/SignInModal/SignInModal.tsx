import { Modal } from '@/shared/ui/Modal'
import { Suspense } from 'react'
import { Loader } from '@/shared/ui/Loader'
import { SignInFormAsync } from '../SignInForm/SignInForm.async'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SignInModal = (props: SignInModalProps) => {
  const { isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Loader />}>
        <SignInFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
