import {useTheme} from '@/shared/hooks/useTheme'
import {cls} from '@/shared/lib/cls/cls'
import AppRouter from '@/app/providers/router/ui/AppRouter'
import {Header} from '@/widgets/Header'
import {Sidebar} from '@/widgets/Sidebar'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getUserInited, userActions} from '@/entities/User'
import {changeListViewActions} from '@/features/ChangeListView/module/slice/changeListViewSlice'

export const App = () => {
  const {theme} = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  useEffect(() => {
    dispatch(userActions.initAuthData())
    dispatch(changeListViewActions.initListView())
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
