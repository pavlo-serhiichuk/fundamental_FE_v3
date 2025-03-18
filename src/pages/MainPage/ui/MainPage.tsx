import React from 'react'
import {useTranslation} from 'react-i18next'
import {BugButton} from 'app/providers/ErrorBoundary'
import {Button} from 'shared/ui/Button/Button'
import * as s from './MainPage.module.scss'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <div className={s.MainPage}>
      <div>{t('Main page')}</div>
      <BugButton />
      <br />
      <Button theme="clear">clear</Button>
      <br />
      <Button theme="clear" />
    </div>
  )
}

export default MainPage
