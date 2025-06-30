import { screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import { AppLogo } from './AppLogo'

describe('AppLogo', () => {
  test('renders AppLogo component with title', () => {
    renderTestComponent(<AppLogo withTitle />)
    expect(screen.getByTestId('AppLogo')).toBeInTheDocument()
    expect(screen.getByTestId('AppLogo.Title')).toBeInTheDocument()
  })

  test('renders AppLogo component without title', () => {
    renderTestComponent(<AppLogo />)
    expect(screen.getByTestId('AppLogo')).toBeInTheDocument()
    expect(screen.queryByTestId('AppLogo.Title')).not.toBeInTheDocument()
  })
})
