import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useTheme } from '@/shared/hooks/useTheme'
import { cls } from '@/shared/lib/cls/cls'
import AppRouter from './providers/router/ui/AppRouter'
import { Header } from '@/widgets/Header'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, initUserDataById } from '@/entities/User'
import { ToggleFeature } from '@/shared/lib/features/components/ToggleFeature/ToggleFeature'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { PageLoader } from '@/widgets/PageLoader'
import { ScrollToolbar } from '@/widgets/ScrollToolbar'
import { useAppToolbar } from '@/app/lib/useAppToolbar'

export const App = () => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  const toolbar = useAppToolbar()
  useEffect(() => {
    if (!inited) {
      dispatch(initUserDataById())
    }
  }, [dispatch, inited])

  if (!inited) {
    return (
      <div id="app-v2" className={cls('app-v2', {}, [theme])}>
        <PageLoader />
      </div>
    )
  }

  return (
    <ToggleFeature
      feature="isV2"
      on={
        <div id="app-v2" className={cls('app-v2', {}, [theme])}>
          <MainLayout
            sidebar={<Sidebar />}
            content={<AppRouter />}
            header={<Header />}
            toolbar={toolbar}
          />
        </div>
      }
      off={
        <div id="app" className={cls('app', {}, [theme])}>
          <Header />
          <div className="app-content">
            <Sidebar />
            {inited && <AppRouter />}
          </div>
        </div>
      }
    />
  )
}
