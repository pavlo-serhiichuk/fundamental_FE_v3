import { fireEvent, screen } from '@testing-library/react'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('render', () => {
    renderTestComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('check collapse', () => {
    renderTestComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(screen.getByTestId('sidebar-toggle'))
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
