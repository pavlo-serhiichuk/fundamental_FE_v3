import { type Meta, type StoryObj } from '@storybook/react'
import ArticleCreatePage from './ArticleCreatePage'
import {
  StoreDecorator,
  ThemeDecoratorV2,
} from '@/shared/config/storybook/decorators/decorators'

const meta = {
  title: 'pages/ArticleCreatePage',
  component: ArticleCreatePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    ThemeDecoratorV2('app_light_theme'),
    StoreDecorator({
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
    }),
  ],
} as Meta<typeof ArticleCreatePage>

export default meta
type Story = StoryObj<typeof meta>

export const Template: Story = {}
