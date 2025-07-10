import { Suspense } from 'react'
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal'
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader'
import { SignInFormAsync } from '../SignInForm/SignInForm.async'
import { ToggleFeature } from '@/shared/lib/features'
import { Modal } from '@/shared/ui/V2/Modal'
import { Loader } from '@/shared/ui/V2/Loader'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SignInModal = (props: SignInModalProps) => {
  const { isOpen, onClose } = props
  return (
    <ToggleFeature
      feature="isV2"
      on={
        <Modal isOpen={isOpen} onClose={onClose}>
          <Suspense fallback={<Loader />}>
            <SignInFormAsync onSuccess={onClose} />
          </Suspense>
        </Modal>
      }
      off={
        <ModalDeprecated isOpen={isOpen} onClose={onClose}>
          <Suspense fallback={<LoaderDeprecated />}>
            <SignInFormAsync onSuccess={onClose} />
          </Suspense>
        </ModalDeprecated>
      }
    />
  )
}
