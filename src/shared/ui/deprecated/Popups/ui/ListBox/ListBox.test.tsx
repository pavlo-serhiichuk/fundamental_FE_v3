import { renderWithTranslations } from '@/shared/lib/tests/renderWithTranslations/renderWithTranslations'
import { render, screen } from '@testing-library/react'
import { ListBox } from './ListBox'

const items = [
  { value: '1', content: 'content value' },
  { value: '2', content: 'content value' },
  { value: '3', content: 'content value' },
]

describe('', () => {
  test('', () => {
    renderWithTranslations(
      <ListBox items={items} defaultValue="Select item..." />,
    )
    expect(screen.getByTestId('ListBox')).toBeInTheDocument()
  })
})
