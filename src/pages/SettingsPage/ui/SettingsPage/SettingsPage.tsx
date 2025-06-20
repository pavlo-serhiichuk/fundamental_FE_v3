import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { cls } from '@/shared/lib/cls/cls'
import * as s from './SettingsPage.module.scss'
import { Text } from '@/shared/ui/V2/Text'
import { Page } from '@/widgets/Page'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page>
      <div className={cls(s.SettingsPage, {}, [className])}>
        <Text title={`${t('Settings')}:`} />
        <UiDesignSwitcher />
      </div>
    </Page>
  )
})

export default SettingsPage
