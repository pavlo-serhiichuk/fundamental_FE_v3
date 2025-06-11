import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useTheme } from '@/shared/hooks/useTheme'
import { cls } from '@/shared/lib/cls/cls'
import AppRouter from './providers/router/ui/AppRouter'
import { Header } from '@/widgets/Header'
import { Sidebar } from '@/widgets/Sidebar'
import { userActions, getUserInited, initUserDataById } from '@/entities/User'

export const App = () => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  useEffect(() => {
    dispatch(initUserDataById())
  }, [dispatch])

  return (
    <div className={cls('app', {}, [theme])}>
      <Header />
      <div className="app-content">
        <Sidebar />
        {inited && <AppRouter />}
      </div>
    </div>
  )
}
