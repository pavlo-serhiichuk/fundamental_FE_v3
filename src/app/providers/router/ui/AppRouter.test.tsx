import { screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import AppRouter from '@/app/providers/router/ui/AppRouter'
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteArticleCreate,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/routers'
import { UserRoles } from '@/entities/User'
import { getAllFeatureFlags, setFeatureFlags } from '@/shared/lib/features'

const initialState = { user: { authData: { roles: [UserRoles.USER] } } }
const initialStateForAdmin = {
  user: { authData: { roles: [UserRoles.ADMIN] } },
}

describe('AppRouter', () => {
  test('renders Main page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteMain(),
    })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('renders About page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAbout(),
    })
    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('redirect not authed user to Main page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteProfile('1'),
    })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('render Profile for authed user', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: { user: { authData: {} } },
    })
    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test('render Articles for authed user', async () => {
    const currentFeatureFlags = getAllFeatureFlags()
    setFeatureFlags({ ...currentFeatureFlags, isV2: false })
    renderTestComponent(<AppRouter />, {
      route: getRouteArticles(),
      initialState: { user: { authData: {} } },
    })
    const page = await screen.findByTestId('ArticlesPage')
    expect(page).toBeInTheDocument()
  })

  test('render Admin panel for user without required role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState,
    })
    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('render Admin panel for user with required role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: initialStateForAdmin,
    })
    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })

  test('render Admin panel for user with required role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: initialStateForAdmin,
    })
    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })

  test('render not found page', async () => {
    renderTestComponent(<AppRouter />, {
      route: '/adsfs',
      initialState: initialStateForAdmin,
    })
    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('render - "Create Article" page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteArticleCreate(),
      initialState,
    })
    const page = await screen.findByTestId('ArticleCreatePage')
    expect(page).toBeInTheDocument()
  })

  test('render - "Edit Article" page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteArticleEdit('1'),
      initialState,
    })
    const page = await screen.findByTestId('ArticleEditPage')
    expect(page).toBeInTheDocument()
  })
})
