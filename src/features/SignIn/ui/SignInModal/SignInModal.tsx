import { Suspense } from 'react'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { Loader } from '@/shared/ui/deprecated/Loader'
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
