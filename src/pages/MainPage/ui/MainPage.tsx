import React from 'react'
import {useTranslation} from 'react-i18next'
import {BugButton} from 'app/providers/ErrorBoundary'
import * as s from './MainPage.module.scss'

const MainPage = () => {
  const {t} = useTranslation('main')
  return (
    <div className={s.MainPage}>
      <div>{t('Main page')}</div>
      <BugButton />
    </div>
  )
}

export default MainPage
