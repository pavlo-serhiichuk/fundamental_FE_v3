import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTestComponent } from '@/shared/lib/tests/renderTestComponent/renderTestComponent'
import ArticleCreatePage from './ArticleCreatePage'
import { StateSchema } from '@/app/providers/StoreProvider'

const initialState: DeepPartial<StateSchema> = {
  createArticle: {
    newArticle: {
      title: '',
      subtitle: '',
      image: '',
      views: 0,
      created: '',
      userId: '',
      blocks: [],
    },
  },
}

describe('ArticleCreatePage', () => {
  test('renders correctly', () => {
    renderTestComponent(<ArticleCreatePage />, { initialState })
    expect(screen.getByTestId('ArticleCreatePage')).toBeInTheDocument()
    expect(screen.getByTestId('ArticleEditCreateHeader')).toBeInTheDocument()
    expect(screen.getByTestId('ArticleEditCreateFooter')).toBeInTheDocument()
  })
  test('write Article image info', async () => {
    renderTestComponent(<ArticleCreatePage />, { initialState })
    await userEvent.type(screen.getByTestId('Input.ArticleSource'), 'image_url')
    await userEvent.type(
      screen.getByTestId('Input.ArticleTitle'),
      'This is an article title',
    )
    expect(screen.getByTestId('Input.ArticleSource')).toHaveValue('image_url')
    expect(screen.getByTestId('Input.ArticleTitle')).toHaveValue(
      'This is an article title',
    )
  })
  test('Add Text block', async () => {
    renderTestComponent(<ArticleCreatePage />, { initialState })
    await userEvent.click(screen.getByTestId('AddBlock'))
    await userEvent.click(screen.getByTestId('AddTextBlock'))
    await userEvent.type(
      screen.getByTestId('ArticleEditTextComponent.InputTitle'),
      'Block Title',
    )
    screen.debug()
    expect(screen.getAllByTestId('AddBlock')).toHaveLength(2)
    // expect(screen.getAllByTestId('ArticleEditTextComponent')).toHaveLength(1)
    // expect(screen.getByTestId('ArticleEditTextComponent.InputTitle')).toHaveValue(
    //   'Block Title',
    // )
  })
})
