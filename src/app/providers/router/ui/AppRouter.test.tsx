import { screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import AppRouter from '@/app/providers/router/ui/AppRouter'
import {
  getRouteAbout,
  getRouteAdmin,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/routers'
import { UserRoles } from '@/entities/User'

describe('AppRouter', () => {
  test('renders Main page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteMain(),
    })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
    screen.debug()
  })

  test('renders About page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAbout(),
    })
    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
    screen.debug()
  })

  test('redirect not authed user to Main page', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteProfile('1'),
    })
    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
    screen.debug()
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
      initialState: { user: { authData: {} } },
    })
    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('render Admin panel for user with required role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: { user: { authData: { roles: [UserRoles.ADMIN] } } },
    })
    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })

  test('render Admin panel for user with required role', async () => {
    renderTestComponent(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: { user: { authData: { roles: [UserRoles.ADMIN] } } },
    })
    const page = await screen.findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })

  test('render not found page', async () => {
    renderTestComponent(<AppRouter />, {
      route: '/adsfs',
      initialState: { user: { authData: { roles: [UserRoles.ADMIN] } } },
    })
    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })
})
