import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'

export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error('Error')
    }
  }, [error])

  const throwError = () => {
    setError(true)
  }
  return <Button onClick={throwError}>{t('throw error')}</Button>
}
