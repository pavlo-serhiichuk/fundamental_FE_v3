import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import * as s from './MainPage.module.scss'
import { Text } from '@/shared/ui/V2/Text'

const MainPage = () => {
  const { t } = useTranslation('main')
  return (
    <Page className={s.MainPage} data-testid="MainPage">
      <Text
        size="text_size_l"
        title={t('Main page')}
        text={t('Here is a main page')}
      />
      {/* <Counter /> */}
    </Page>
  )
}

export default MainPage
