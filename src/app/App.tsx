import {useTheme} from 'shared/hooks/useTheme'
import {cls} from 'shared/lib/cls/cls'
import AppRouter from 'app/providers/router/ui/AppRouter'
import {Header} from 'widgets/Header'
import {Sidebar} from 'widgets/Sidebar'

export const App = () => {
  const {theme} = useTheme()
  return (
    <div className={cls('app', {}, [theme])}>
      <Header />
      <div className="app-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
